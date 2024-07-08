/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signup from '../index';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ModeProvider } from '@/src/contexts/modeContext/ModeContext';
import { signup } from '@/src/lib/actions';
import { fetchUserByEmail } from '@/src/services/userAuthService';
import { useMode } from '@/src/contexts/modeContext/useModeContext';
import useScreenWidth from '@/src/hooks/useScreenWidth';

// Mock dependencies
vi.mock('@/src/services/userAuthService', () => ({
  fetchUserByEmail: vi.fn(),
}));

vi.mock('@/src/lib/actions', () => ({
  signup: vi.fn(),
}));

vi.mock('@/src/hooks/useScreenWidth', () => ({
  default: vi.fn(),
}));

vi.mock('@/src/contexts/modeContext/useModeContext', () => ({
  useMode: vi.fn(),
}));

const defaultProp = {};
const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(
    <ModeProvider>
      <Signup {...props} />
    </ModeProvider>,
  );
};

describe('Signup Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the component correctly', () => {
    (useMode as any).mockReturnValue({ isDarkMode: false });
    (useScreenWidth as any).mockReturnValue({ isMobile: false });
    setup();

    // Check initial rendering
    expect(screen.getByText('Sign up with Open account')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
  });

  it('submits the form successfully', async () => {
    (useMode as any).mockReturnValue({ isDarkMode: true });
    (useScreenWidth as any).mockReturnValue({ isMobile: true });
    (signup as any).mockResolvedValueOnce(undefined);
    (fetchUserByEmail as any).mockResolvedValueOnce({ data: [] });

    setup();

    const emailInput = screen.getByPlaceholderText('Your email');
    const passwordInput = screen.getByPlaceholderText('Your password');
    const confirmPasswordInput = screen.getByPlaceholderText(
      'Confirm your password',
    );
    const submitButton = screen.getByText('Continue');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText('Register user success')).toBeInTheDocument(),
    );

    expect(signup).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('handles existing email correctly', async () => {
    (fetchUserByEmail as any).mockResolvedValueOnce({
      data: [{ email: 'test@example.com' }],
    });

    setup();

    const emailInput = screen.getByPlaceholderText('Your email');
    const passwordInput = screen.getByPlaceholderText('Your password');
    const confirmPasswordInput = screen.getByPlaceholderText(
      'Confirm your password',
    );
    const submitButton = screen.getByText('Continue');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText('Email already exists')).toBeInTheDocument(),
    );

    expect(fetchUserByEmail).toHaveBeenCalledWith({
      email: 'test@example.com',
    });
  });

  it('displays error message on signup failure', async () => {
    (signup as any).mockRejectedValueOnce(new Error('Failed to sign up'));
    (fetchUserByEmail as any).mockResolvedValueOnce({
      data: [],
    });

    setup();

    const emailInput = screen.getByPlaceholderText('Your email');
    const passwordInput = screen.getByPlaceholderText('Your password');
    const confirmPasswordInput = screen.getByPlaceholderText(
      'Confirm your password',
    );
    const submitButton = screen.getByText('Continue');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText('Register user failed')).toBeInTheDocument(),
    );

    fireEvent.click(screen.getByTestId('Close_Icon'));

    expect(signup).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('validates password match', async () => {
    setup();

    const passwordInput = screen.getByPlaceholderText('Your password');
    const confirmPasswordInput = screen.getByPlaceholderText(
      'Confirm your password',
    );
    const submitButton = screen.getByText('Continue');

    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'differentpassword' },
    });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(
        screen.getByText('Password and confirm password must match'),
      ).toBeInTheDocument(),
    );
  });

  it('show invalid password and email correctly', async () => {
    setup();

    const emailInput = screen.getByPlaceholderText('Your email');
    const passwordInput = screen.getByPlaceholderText('Your password');
    const confirmPasswordInput = screen.getByPlaceholderText(
      'Confirm your password',
    );
    const submitButton = screen.getByText('Continue');

    fireEvent.change(emailInput, { target: { value: 'test@example' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: '123' },
    });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText('Invalid email')).toBeInTheDocument(),
    );

    await waitFor(() =>
      expect(
        screen.getByText('Password must be more than 8 characters'),
      ).toBeInTheDocument(),
    );
  });
});
