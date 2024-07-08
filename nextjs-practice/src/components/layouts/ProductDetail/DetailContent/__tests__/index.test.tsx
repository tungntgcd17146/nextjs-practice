/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@/src/utils/testUtils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import DetailContent from '../';
import * as useScreenWidth from '@/src/hooks/useScreenWidth';
import { usePathname } from 'next/navigation';
import { useMode } from '@/src/contexts/modeContext/useModeContext';
import DetailContentSkeleton from '@/src/components/layouts/ProductDetail/DetailContent/DetailContentSkeleton';
import DetailContentWrapper from '@/src/components/layouts/ProductDetail/DetailContent/DetailContentWrapper';

// Mocking hooks and modules
vi.mock('next/navigation', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    usePathname: vi.fn(),
    useRouter: vi.fn(),
  };
});

vi.mock('@/src/contexts/modeContext/useModeContext', () => ({
  useMode: vi.fn(),
}));

const defaultProp: any = {
  product: {
    productId: '123',
    productName: 'Haley',
    productCategory: 'UI Kit',
    productPrice: 100,
    productRating: 4.5,
    productRatingCount: 100,
  },
};

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<DetailContent {...props} />);
};

describe('DetailContent Test', () => {
  beforeEach(() => {
    vi.mocked(usePathname).mockReturnValue('/shop');
    (useMode as any).mockReturnValue({ isDarkMode: true });
    vi.clearAllMocks();
  });

  it('render DetailContent correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    } as any);
    setup();

    expect(screen.getByText('Fleet - Haley UI Kit')).toBeTruthy();
  });

  it('render DetailContent on mobile correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    } as any);
    setup();

    expect(screen.getByText('Fleet - Haley UI Kit')).toBeTruthy();
  });

  it('render DetailContent skeleton correctly', () => {
    render(<DetailContentSkeleton />);

    expect(screen.getByTestId('Detail_Content_Skeleton')).toBeTruthy();
  });

  it('render DetailContent wrapper correctly', async () => {
    // Mock fetchProductFeature
    vi.mock('@/src/services/productsService', () => ({
      fetchProductById: vi.fn(() => ({
        data: defaultProp.product,
      })),
    }));
    render(await DetailContentWrapper(defaultProp.product.productId));

    expect(screen.getByText('Fleet - Haley UI Kit')).toBeTruthy();
  });
});
