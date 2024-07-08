/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Login, { Props } from '../'; // Update the import path based on your project structure
import { useFormState, useFormStatus } from 'react-dom';
import useScreenWidth from '@/src/hooks/useScreenWidth';
import { useMode } from '@/src/contexts/modeContext/useModeContext';
import { ModeProvider } from '@/src/contexts/modeContext/ModeContext';

// Mock dependencies
vi.mock('react-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    useFormState: vi.fn(),
    useFormStatus: vi.fn(),
  };
});

vi.mock('@/src/hooks/useScreenWidth', () => ({
  default: vi.fn(),
}));

vi.mock('@/src/contexts/modeContext/useModeContext', () => ({
  useMode: vi.fn(),
}));

const mockGoogleSignin = vi.fn();
const mockUserAuthenticate = vi.fn();

const setup = (props: Props) => {
  render(
    <ModeProvider>
      <Login {...props} />
    </ModeProvider>,
  );
};

describe('Login Component', () => {
  beforeEach(() => {
    (useFormState as any).mockReturnValue([null, vi.fn()]);
    (useFormStatus as any).mockReturnValue({ pending: false });
    (useScreenWidth as any).mockReturnValue({ isMobile: false });
    (useMode as any).mockReturnValue({ isDarkMode: false });
    vi.clearAllMocks();
  });

  it('renders the component correctly', () => {
    setup({
      googleSignin: mockGoogleSignin,
      userAuthenticate: mockUserAuthenticate,
    });

    expect(screen.getByText('Sign up with Open account')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('calls googleSignin when Google button is clicked', () => {
    setup({
      googleSignin: mockGoogleSignin,
      userAuthenticate: mockUserAuthenticate,
    });

    const googleButton = screen.getByLabelText('close-reset');
    fireEvent.click(googleButton);

    expect(mockGoogleSignin).toHaveBeenCalled();
  });

  it('displays error message on invalid credentials', async () => {
    (useFormState as any).mockReturnValue(['Invalid credentials.', vi.fn()]);

    setup({
      googleSignin: mockGoogleSignin,
      userAuthenticate: mockUserAuthenticate,
    });

    const submitButton = screen.getByTestId('LoginButton');
    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText('Invalid credentials.')).toBeInTheDocument(),
    );
  });

  it('submits the form successfully with loading status', async () => {
    (useFormState as any).mockReturnValue([null, vi.fn()]);
    (useFormStatus as any).mockReturnValue({ pending: true });

    setup({
      googleSignin: mockGoogleSignin,
      userAuthenticate: mockUserAuthenticate,
    });

    fireEvent.change(screen.getByPlaceholderText('Your email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });

    const submitButton = screen.getByTestId('LoginButton');
    fireEvent.click(submitButton);

    await waitFor(() => expect(submitButton.textContent).toEqual('Loading...'));
  });
});
