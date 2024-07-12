import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Header from '@/src/components/layouts/ProductDetail/Header';
import { BASE_REDIRECT_URL } from '@/src/constants/common';

// Mock dependencies
const mockRouter = {
  push: vi.fn(),
};
vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
}));

describe('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />);

    expect(screen.getByTestId('ProductDetail_EditButton')).toBeInTheDocument();
    expect(
      screen.getByTestId('ProductDetail_CloseIconButton'),
    ).toBeInTheDocument();
  });

  it('calls router.push when the close button is clicked', () => {
    render(<Header />);

    const closeButton = screen.getByTestId('ProductDetail_CloseIconButton');
    fireEvent.click(closeButton);

    expect(mockRouter.push).toHaveBeenCalledWith(BASE_REDIRECT_URL);
  });
});
