/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import LoginWrapper from '../LoginWrapper';
import { ModeProvider } from '@/src/contexts/modeContext/ModeContext';
import { useFormState, useFormStatus } from 'react-dom';
import useScreenWidth from '@/src/hooks/useScreenWidth';
import { useMode } from '@/src/contexts/modeContext/useModeContext';

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

// Mock the actions
vi.mock('@/src/lib/actions', () => ({
  authenticate: vi.fn(),
  googleSignin: vi.fn(),
}));

const setup = (props = {}) => {
  render(
    <ModeProvider>
      <LoginWrapper {...props} />
    </ModeProvider>,
  );
};

describe('LoginWrapper Component', () => {
  beforeEach(() => {
    (useFormState as any).mockReturnValue([null, vi.fn()]);
    (useFormStatus as any).mockReturnValue({ pending: false });
    (useScreenWidth as any).mockReturnValue({ isMobile: false });
    (useMode as any).mockReturnValue({ isDarkMode: false });
    vi.clearAllMocks();
  });

  it('renders the Login component with correct props', () => {
    setup();

    // Check if the Login component is rendered
    expect(screen.getByTestId('LoginButton')).toBeInTheDocument();
    expect(screen.getByText('Sign up with Open account')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
