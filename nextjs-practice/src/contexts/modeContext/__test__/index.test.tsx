import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ModeContextProvider from '../index';

vi.mock('./ModeContext', () => ({
  ModeContextProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock('./Wrapper', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('ModeContextProvider', () => {
  it('should render children within ModeContextProvider and ComponentWrapper', () => {
    render(
      <ModeContextProvider>
        <div data-testid="child">Test Child</div>
      </ModeContextProvider>,
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeTruthy();
  });
});
