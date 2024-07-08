/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ProductDetail from '@/src/components/layouts/ProductDetail';
import useScreenWidth from '@/src/hooks/useScreenWidth';
import { useMode } from '@/src/contexts/modeContext/useModeContext';

// Mock the dependencies
vi.mock('@/src/components/layouts/ProductDetail/Header', () => ({
  __esModule: true,
  default: () => <div>Header</div>,
}));

vi.mock('@/src/components/layouts/ProductDetail/SocialInfo', () => ({
  __esModule: true,
  default: () => <div>SocialInfo</div>,
}));

vi.mock('@/src/components/ui/ImageDrawer', () => ({
  __esModule: true,
  default: () => <div>ImageDrawer</div>,
}));

vi.mock(
  '@/src/components/layouts/ProductDetail/DetailContent/DetailContentWrapper',
  () => ({
    __esModule: true,
    default: () => <div>DetailContentWrapper</div>,
  }),
);

vi.mock(
  '@/src/components/layouts/ProductDetail/DetailOverview/DetailOverviewWrapper',
  () => ({
    __esModule: true,
    default: () => <div>DetailOverviewWrapper</div>,
  }),
);

vi.mock(
  '@/src/components/layouts/ProductDetail/DetailFeature/DetailFeatureWrapper',
  () => ({
    __esModule: true,
    default: () => <div>DetailFeatureWrapper</div>,
  }),
);

vi.mock(
  '@/src/components/layouts/ProductDetail/DetailContent/DetailContentSkeleton',
  () => ({
    __esModule: true,
    default: () => <div>DetailContentSkeleton</div>,
  }),
);

vi.mock(
  '@/src/components/layouts/ProductDetail/DetailOverview/DetailOverviewSkeleton',
  () => ({
    __esModule: true,
    default: () => <div>DetailOverviewSkeleton</div>,
  }),
);

vi.mock(
  '@/src/components/layouts/ProductDetail/DetailFeature/DetailFeatureSkeleton',
  () => ({
    __esModule: true,
    default: () => <div>DetailFeatureSkeleton</div>,
  }),
);

vi.mock('@/src/hooks/useScreenWidth', () => ({
  __esModule: true,
  default: () => ({ isMobile: false, isDesktop: true, isTablet: false }),
}));

vi.mock('@/src/contexts/modeContext/useModeContext', () => ({
  useMode: () => ({ isDarkMode: false }),
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '',
}));

vi.mock('@/src/hooks/useScreenWidth', () => ({
  default: vi.fn(),
}));

vi.mock('@/src/contexts/modeContext/useModeContext', () => ({
  useMode: vi.fn(),
}));

const setup = () => {
  render(<ProductDetail productId="123" />);
};

describe('ProductDetail Component', () => {
  beforeEach(() => {
    (useScreenWidth as any).mockReturnValue({ isMobile: false });
    (useMode as any).mockReturnValue({ isDarkMode: false });
    vi.clearAllMocks();
  });

  it('renders correctly on dark mode', () => {
    (useMode as any).mockReturnValue({ isDarkMode: true });
    setup();

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('SocialInfo')).toBeInTheDocument();
    expect(screen.getByText('ImageDrawer')).toBeInTheDocument();
    expect(screen.getByText('DetailContentWrapper')).toBeInTheDocument();
    expect(screen.getByText('DetailOverviewWrapper')).toBeInTheDocument();
    expect(screen.getByText('DetailFeatureWrapper')).toBeInTheDocument();
  });

  it('renders correctly on desktop', () => {
    (useMode as any).mockReturnValue({ isDarkMode: false });
    (useScreenWidth as any).mockReturnValue({ isDesktop: true });
    setup();

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('SocialInfo')).toBeInTheDocument();
    expect(screen.getByText('ImageDrawer')).toBeInTheDocument();
    expect(screen.getByText('DetailContentWrapper')).toBeInTheDocument();
    expect(screen.getByText('DetailOverviewWrapper')).toBeInTheDocument();
    expect(screen.getByText('DetailFeatureWrapper')).toBeInTheDocument();
  });
});
