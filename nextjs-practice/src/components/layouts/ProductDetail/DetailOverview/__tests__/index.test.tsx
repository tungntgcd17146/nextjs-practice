import React from 'react';
import { render } from '@testing-library/react';
import DetailOverview from '@/src/components/layouts/ProductDetail/DetailOverview';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import DetailOverviewSkeleton from '@/src/components/layouts/ProductDetail/DetailOverview/DetailOverviewSkeleton';
import DetailOverviewWrapper from '@/src/components/layouts/ProductDetail/DetailOverview/DetailOverviewWrapper';

const mockProductOverviews = [
  { text: 'Overview 1' },
  { text: 'Overview 2' },
  { text: 'Overview 3' },
];

// Mock fetchProductOverview
vi.mock('@/src/services/productsService', () => ({
  fetchProductOverview: vi.fn(() => ({
    data: [
      { text: 'Overview 1' },
      { text: 'Overview 2' },
      { text: 'Overview 3' },
    ],
  })),
}));

describe('DetailOverview', () => {
  it('renders the Overview text elements', () => {
    render(<DetailOverview productOverviews={mockProductOverviews} />);

    expect(screen.getByTestId('Detail_Overview')).toBeInTheDocument();
    expect(screen.getByText('Overview 1')).toBeInTheDocument();
    expect(screen.getByText('Overview 2')).toBeInTheDocument();
    expect(screen.getByText('Overview 3')).toBeInTheDocument();
  });

  it('render skeleton elements correctly', () => {
    render(<DetailOverviewSkeleton />);

    expect(screen.getByTestId('Detail_Overview_Skeleton')).toBeInTheDocument();
  });

  it('renders product Overviews wrapper correctly', async () => {
    render(await DetailOverviewWrapper());

    expect(screen.getByText('Overview 1')).toBeInTheDocument();
    expect(screen.getByText('Overview 2')).toBeInTheDocument();
    expect(screen.getByText('Overview 3')).toBeInTheDocument();
  });
});
