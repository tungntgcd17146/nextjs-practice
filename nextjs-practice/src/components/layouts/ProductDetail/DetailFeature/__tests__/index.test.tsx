/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import DetailFeature from '@/src/components/layouts/ProductDetail/DetailFeature';
import { describe, expect, it } from 'vitest';

describe('DetailFeature', () => {
  const productFeatures = [
    { text: 'Feature 1' },
    { text: 'Feature 2' },
    { text: 'Feature 3' },
  ];

  it('renders product features correctly', () => {
    render(<DetailFeature productFeatures={productFeatures} />);

    expect(screen.getByText('Features')).toBeInTheDocument();

    productFeatures.forEach((feature) => {
      expect(screen.getByText(feature.text)).toBeInTheDocument();
    });
  });
});
