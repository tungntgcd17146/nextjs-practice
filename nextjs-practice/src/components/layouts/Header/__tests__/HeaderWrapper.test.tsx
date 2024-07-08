import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import HeaderWrapper from '../HeaderWrapper';
import { logout } from '@/src/lib/actions';

// Mocking the logout action
vi.mock('@/src/lib/actions', () => ({
  logout: vi.fn(),
}));

// Mocking the Header component
vi.mock('@/src/components/layouts/Header', () => ({
  __esModule: true,
  default: ({ logout }: { logout: () => void }) => (
    <button onClick={logout} data-testid="logout-button">
      Logout
    </button>
  ),
}));

describe('HeaderWrapper Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the Header component with the logout function', () => {
    render(<HeaderWrapper />);

    // Assert that the logout button is rendered
    const logoutButton = screen.getByTestId('logout-button');
    expect(logoutButton).toBeInTheDocument();

    // Assert that the logout function is called when the button is clicked
    fireEvent.click(logoutButton);
    expect(logout).toHaveBeenCalled();
  });
});
