/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Products, {
  Props,
} from '@/src/components/layouts/Shop/ShopContent/Products';
import useScreenWidth from '@/src/hooks/useScreenWidth';
import { fetchProducts } from '@/src/services/productsService';
import { useRouter } from 'next/navigation';
import { useShopContext } from '@/src/contexts/shopContext/useShopContext';
import { Product } from '@/src/types/product';

// Mock dependencies
vi.mock('@/src/hooks/useScreenWidth', () => ({
  default: vi.fn(),
}));

vi.mock('@/src/services/productsService', () => ({
  fetchProducts: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
  useSearchParams: vi.fn(),
  useRouter: vi.fn(),
}));

vi.mock('@/src/contexts/shopContext/useShopContext', () => ({
  useShopContext: vi.fn(),
}));

const products: Product[] = [
  {
    id: 1,
    productName: 'Product 1',
    productCategory: 'Category 1',
    productPrice: 100,
    productRating: 4,
    productRatingCount: 10,
    popularity: 'Most Popular',
  },
  {
    id: 2,
    productName: 'Product 2',
    productCategory: 'Category 2',
    productPrice: 200,
    productRating: 5,
    productRatingCount: 20,
    popularity: 'Most Popular',
  },
  {
    id: 3,
    productName: 'Product 2',
    productCategory: 'Category 2',
    productPrice: 200,
    productRating: 5,
    productRatingCount: 20,
    popularity: 'Most Popular',
  },
  {
    id: 4,
    productName: 'Product 2',
    productCategory: 'Category 2',
    productPrice: 200,
    productRating: 5,
    productRatingCount: 20,
    popularity: 'Most Popular',
  },
  {
    id: 5,
    productName: 'Product 2',
    productCategory: 'Category 2',
    productPrice: 200,
    productRating: 5,
    productRatingCount: 20,
    popularity: 'Most Popular',
  },
  {
    id: 6,
    productName: 'Product 2',
    productCategory: 'Category 2',
    productPrice: 200,
    productRating: 5,
    productRatingCount: 20,
    popularity: 'Most Popular',
  },
  {
    id: 7,
    productName: 'Product 2',
    productCategory: 'Category 2',
    productPrice: 200,
    productRating: 5,
    productRatingCount: 20,
    popularity: 'Most Popular',
  },
];

const queryParams = { _page: 1 };

const setup = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    products: [],
    queryParams,
    totalCount: 0,
    ...props,
  };

  return render(<Products {...defaultProps} />);
};

describe('Products component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    (useScreenWidth as any).mockReturnValue({ matchedBreakpoint: false });
    (useRouter as any).mockReturnValue({
      push: vi.fn(),
    });
    (useShopContext as any).mockReturnValue({
      setShowingProducts: vi.fn(),
      setTotalProducts: vi.fn(),
    });
  });

  it('renders InfiniteScroll and ProductCards when products are provided', () => {
    setup({ products });

    expect(screen.getByTestId('InfiniteScroll')).toBeInTheDocument();
    expect(screen.getAllByTestId('ProductCard')).toHaveLength(7);
  });

  it('renders CardSkeleton when loading', () => {
    const { rerender } = setup({ products, totalCount: 7 });

    rerender(
      <Products
        products={products}
        totalCount={7}
        queryParams={{ _page: 1 }}
      />,
    );
    fireEvent.click(screen.getByText('Load more'));

    expect(screen.getAllByTestId('CardSkeleton')).toHaveLength(7);
  });

  it('handles empty products state', () => {
    setup({ products: [], totalCount: 0 });

    expect(screen.getByText('No item found')).toBeInTheDocument();
    expect(screen.queryByTestId('ProductCard')).toBeNull();
  });

  it('handles load more functionality', async () => {
    const newProducts = [
      {
        id: 3,
        productName: 'Product 3',
        productCategory: 'Category 3',
        productPrice: 300,
        productRating: 3,
        productRatingCount: 30,
        popularity: 300,
      },
    ];

    (fetchProducts as any).mockResolvedValue({ data: newProducts });

    setup({ products, totalCount: 7 });

    fireEvent.click(screen.getByText('Load more'));

    await waitFor(() => expect(fetchProducts).toHaveBeenCalled());
  });

  it('handles view card click', () => {
    const mockPush = vi.fn();
    (useRouter as any).mockReturnValue({
      push: mockPush,
    });

    setup({ products, totalCount: 2 });

    const firstProduct = screen.getAllByTestId('ProductCard')[0];

    fireEvent.mouseEnter(firstProduct);
    fireEvent.click(screen.getAllByTestId('ProductCard_IconButton_view')[0]);

    expect(mockPush).toHaveBeenCalledWith('/product/1');
  });
});
