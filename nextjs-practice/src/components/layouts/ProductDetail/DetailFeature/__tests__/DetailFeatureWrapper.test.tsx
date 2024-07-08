/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import DetailOverviewWrapper from '@/src/components/layouts/ProductDetail/DetailFeature/DetailFeatureWrapper';
import DetailFeatureSkeleton from '@/src/components/layouts/ProductDetail/DetailFeature/DetailFeatureSkeleton';

// Mock fetchProductFeature
vi.mock('@/src/services/productsService', () => ({
  fetchProductFeature: vi.fn(() => ({
    data: [{ text: 'Feature 1' }, { text: 'Feature 2' }, { text: 'Feature 3' }],
  })),
}));

vi.mock('@/src/components/layouts/ProductDetail/DetailFeature', () => ({
  __esModule: true,
  default: ({ productFeatures }: { productFeatures: any[] }) => (
    <div>
      {productFeatures.map((feature, index) => (
        <div key={index} data-testid="feature-item">
          {feature.text}
        </div>
      ))}
    </div>
  ),
}));

describe('DetailOverviewWrapper', () => {
  it('renders product features correctly', async () => {
    render(await DetailOverviewWrapper());

    await waitFor(() => {
      expect(screen.getAllByTestId('feature-item')).toHaveLength(3);
    });

    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Feature 3')).toBeInTheDocument();
  });

  it('renders skeleton elements correctly', () => {
    render(<DetailFeatureSkeleton />);

    expect(screen.getByTestId('Detail_Feature_Skeleton')).toBeInTheDocument();
  });
});
