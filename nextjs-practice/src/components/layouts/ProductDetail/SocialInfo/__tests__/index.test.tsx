import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SocialInfo from '@/src/components/layouts/ProductDetail/SocialInfo';

describe('SocialInfo Component', () => {
  it('renders correctly', () => {
    render(<SocialInfo />);

    // Check if IconButton is rendered
    expect(
      screen.getByRole('button', { name: /like-product/i }),
    ).toBeInTheDocument();
  });
});
