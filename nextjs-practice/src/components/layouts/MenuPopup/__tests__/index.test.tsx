import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import MenuPopup, { Props } from '@/src/components/layouts/MenuPopup';
import { ModeProvider } from '@/src/contexts/modeContext/ModeContext';

// Mock useScreenWidth
vi.mock('@/src/hooks/useScreenWidth', () => ({
  default: () => ({
    isMobile: false,
  }),
}));
// Mocking hooks and modules
vi.mock('next/navigation', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    usePathname: vi.fn(),
    useRouter: vi.fn(),
  };
});

const onCloseModal = vi.fn();
const logout = vi.fn().mockResolvedValue(undefined);
const anchorEl = document.createElement('div');
document.body.appendChild(anchorEl);

const setup = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    anchorEl,
    onCloseModal,
    logout,
    ...props,
  };

  return render(
    <ModeProvider>
      <MenuPopup {...defaultProps} />
    </ModeProvider>,
  );
};

describe('MenuPopup component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly when open', () => {
    setup();

    expect(screen.getByTestId('Menu_Popover')).toBeInTheDocument();
  });

  it('handles close modal functionality', () => {
    setup();

    fireEvent.click(screen.getByTestId('Menu_Backdrop'));
    expect(onCloseModal).toHaveBeenCalledTimes(1);
  });

  it('handles logout button click', async () => {
    setup();

    fireEvent.click(screen.getByTestId('Logout_ItemButton'));

    await waitFor(() => {
      expect(logout).toHaveBeenCalledTimes(1);
    });

    expect(onCloseModal).toHaveBeenCalledTimes(1);
  });
});
