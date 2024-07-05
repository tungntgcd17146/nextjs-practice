/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Wrapper from '../Wrapper';
import { useMode } from '@/src/contexts/modeContext/useModeContext';
import { defaultTheme } from '@/src/materialTheme';

// Mocking the useMode hook
vi.mock('@/src/contexts/modeContext/useModeContext', () => ({
  useMode: vi.fn(),
}));

// Mocking the defaultTheme function
vi.mock('@/src/materialTheme', () => ({
  defaultTheme: vi.fn(),
}));

describe('Wrapper', () => {
  it('should render children with the correct theme', () => {
    const mockIsDarkMode = false;
    const mockTheme = { palette: { mode: 'light' } };

    // Mocking the return value of useMode and defaultTheme
    (useMode as any).mockReturnValue({ isDarkMode: mockIsDarkMode });
    (defaultTheme as any).mockReturnValue(mockTheme);

    render(
      <Wrapper>
        <div data-testid="child">Test Child</div>
      </Wrapper>,
    );

    // Verify that the child is rendered
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeTruthy();
  });

  it('should render children with dark mode theme', () => {
    const mockIsDarkMode = true;
    const mockTheme = { palette: { mode: 'dark' } };

    // Mocking the return value of useMode and defaultTheme
    (useMode as any).mockReturnValue({ isDarkMode: mockIsDarkMode });
    (defaultTheme as any).mockReturnValue(mockTheme);

    render(
      <Wrapper>
        <div data-testid="child">Test Child</div>
      </Wrapper>,
    );

    // Verify that the child is rendered
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeTruthy();
  });
});
