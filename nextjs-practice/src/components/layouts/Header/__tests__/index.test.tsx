/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  fireEvent,
  render,
  screen,
  waitFor,
  describe,
  expect,
  it,
} from '@/src/utils/testUtils';
import { beforeEach, vi } from 'vitest';
import * as useScreenWidth from '@/src/hooks/useScreenWidth';
import { ModeProvider } from '@/src/contexts/modeContext/ModeContext';
import Header from '..';
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
  logout: vi.fn(),
};

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(
    <ModeProvider>
      <Header {...props} />
    </ModeProvider>,
  );
};

describe('Header Test', () => {
  beforeEach(() => {
    vi.mocked(usePathname).mockReturnValue('/shop');
    (useMode as any).mockReturnValue({ isDarkMode: true });
    vi.clearAllMocks();
  });

  it('render header on mobile', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    } as any);
    setup();

    expect(await screen.findByTestId('Header')).toBeTruthy();
    expect(screen.getByTestId('Header_SearchInputIcon_Mobile')).toBeTruthy();
    expect(screen.getByTestId('Header_MenuIcon')).toBeTruthy();
  });

  it('click search icon on mobile should show search input popup on mobile', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    } as any);
    setup();

    fireEvent.click(screen.getByTestId('Header_SearchInputIcon_Mobile'));

    expect(screen.getByTestId('Header_SearchInput_Mobile')).toBeTruthy();
  });

  it('open and close drawer on mobile ', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    } as any);
    setup();

    fireEvent.click(screen.getByTestId('Header_MenuIcon'));

    await waitFor(() => expect(screen.getByTestId('Drawer')).toBeTruthy());

    fireEvent.click(screen.getByTestId('Drawer_CloseIcon'));

    await waitFor(() => expect(screen.queryByTestId('Drawer')).toBeFalsy());
  });

  it('show drawer side bar on tablet correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isMobile: false,
      isTablet: true,
      isDesktop: false,
    } as any);
    setup();

    expect(screen.findByTestId('Header_Drawer')).toBeTruthy();
  });

  it('show drawer side bar on desktop correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    } as any);
    setup();

    expect(screen.findByTestId('Header_Drawer')).toBeTruthy();
  });
});
