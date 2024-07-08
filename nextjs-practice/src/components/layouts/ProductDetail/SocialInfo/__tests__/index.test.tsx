/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import SocialInfo from '@/src/components/layouts/ProductDetail/SocialInfo';

// Mock dependencies
vi.mock('@/src/components/ui/IconButton', () => ({
  __esModule: true,
  default: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}));

vi.mock('@/src/components/ui/Avatar', () => ({
  __esModule: true,
  default: ({ ...props }: any) => <div {...props} />,
}));

describe('SocialInfo Component', () => {
  it('renders correctly', () => {
    render(<SocialInfo />);

    // Check if IconButton is rendered
    expect(screen.getByRole('button', { name: /like-product/i })).toBeInTheDocument();
  });
});
