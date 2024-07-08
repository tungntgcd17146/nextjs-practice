/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from '@/src/utils/testUtils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Drawer, { Props } from '..';

import * as useScreenWidth from '@/src/hooks/useScreenWidth';
import { ModeProvider } from '@/src/contexts/modeContext/ModeContext';
import { navigationItems } from '@/src/mocks/sideNavigation';
import { usePathname } from 'next/navigation';
import { useMode } from '@/src/contexts/modeContext/useModeContext';

// Mocking hooks and modules
vi.mock('next/navigation', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    usePathname: vi.fn(),
    useRouter: vi.fn(),
  };
});

vi.mock('@/src/contexts/modeContext/useModeContext', () => ({
  useMode: vi.fn(),
}));

const defaultProp = {
  isOpen: true,
  onClose: vi.fn(),
  onChangeMode: vi.fn(),
  onOpen: vi.fn(),
  listItems: navigationItems,
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(
    <ModeProvider>
      <Drawer {...props} />
    </ModeProvider>,
  );
};

describe('Drawer Test', () => {
  beforeEach(() => {
    vi.mocked(usePathname).mockReturnValue('/shop');
    (useMode as any).mockReturnValue({ isDarkMode: true });
    vi.clearAllMocks();
  });

  it('should render correct header on dark mode include close button on mobile', () => {
    vi.mocked(usePathname).mockReturnValue('/shop');
    (useMode as any).mockReturnValue({ isDarkMode: true });
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isTablet: false,
      isDesktop: false,
      isMobile: true,
    } as any);
    setup();

    expect(screen.getByTestId('Drawer_CloseIcon')).toBeTruthy();
  });

  it('should call onClose when close button on mobile', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isTablet: false,
      isDesktop: false,
    } as any);
    (useMode as any).mockReturnValue({ isDarkMode: false });
    setup();

    expect(screen.getByTestId('Drawer_CloseIcon')).toBeTruthy();

    fireEvent.click(screen.getByTestId('Drawer_CloseIcon'));
    expect(defaultProp.onClose).toHaveBeenCalled();
  });

  it('should hidden close button on desktop and tablet', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isTablet: true,
      isDesktop: true,
    } as any);
    setup();

    expect(screen.queryByTestId('Drawer_CloseIcon')).toBeFalsy();
  });

  it('render NavItem correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isDeskTop: true,
    } as any);
    setup();

    expect(screen.queryAllByTestId('NavItem_ListItemButton').length).toEqual(
      navigationItems.length + 1,
    );
  });

  it('should show ArrowForwardIcon icon on tablet', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isTablet: true,
    } as any);
    setup({
      isOpen: false,
    });

    expect(screen.getByTestId('Drawer_ArrowForwardIcon')).toBeTruthy();
  });
});
