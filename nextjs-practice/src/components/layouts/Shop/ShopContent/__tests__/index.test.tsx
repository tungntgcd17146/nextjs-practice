/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import ShopContent from '../'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useProductsQuery } from '@/hooks/useProductsQuery'

vi.mock('@/hooks/useProductsQuery')

vi.mock('react-router-dom')

vi.mock('react-router-dom', () => ({
  // useParams: vi.fn(() => ({ id: '1' })),
  useLocation: vi.fn(() => ({ pathname: '/' })),
  useNavigate: vi.fn(() => vi.fn())
}))

const defaultProp = {}

const queryClient = new QueryClient()

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(
    <QueryClientProvider client={queryClient}>
      <ShopContent {...props} />
    </QueryClientProvider>
  )
}

describe('ShopContent Test', () => {
  it('render ShopContent with loading when fetching correctly', async () => {
    // Mock the response you expect from useProductsQuery
    const mockResponse = {
      data: undefined,
      isLoading: true,
      isError: false
    }
    ;(useProductsQuery as any).mockReturnValue(mockResponse)

    setup()

    expect(screen.getByTestId('InfiniteScroll_Loading')).toBeTruthy()
  })

  it('render error correctly', async () => {
    // Mock the response you expect from useProductsQuery
    const mockResponse = {
      data: undefined,
      isLoading: false,
      isError: true
    }
    ;(useProductsQuery as any).mockReturnValue(mockResponse)

    setup()

    expect(screen.getByText('Error page')).toBeTruthy()
  })

  it('render ShopContent with loading when fetching and after that are products data correctly', async () => {
    // Mock the response you expect from useProductsQuery
    const mockResponse = {
      data: {
        data: [
          {
            id: '1',
            productName: 'Product 1',
            productCategory: 'Category 1',
            productPrice: 100,
            productRating: 4.5,
            productRatingCount: 100
            // ... other properties
          },
          {
            id: '2',
            productName: 'Product 2',
            productCategory: 'Category 2',
            productPrice: 200,
            productRating: 4.0,
            productRatingCount: 50
            // ... other properties
          }
        ],
        headers: { 'x-total-count': '10' }
      },
      isLoading: false,
      isError: false
    }
    ;(useProductsQuery as any).mockReturnValue(mockResponse)

    setup()

    expect(screen.getByText('Product 1 (Category 1)')).toBeTruthy()
    expect(screen.getByText('Product 2 (Category 2)')).toBeTruthy()
  })

  it('hidden loadmore button when showing products === total products', async () => {
    // Mock the response you expect from useProductsQuery
    const mockResponse = {
      data: {
        data: [
          {
            id: '1',
            productName: 'Product 1',
            productCategory: 'Category 1',
            productPrice: 100,
            productRating: 4.5,
            productRatingCount: 100
            // ... other properties
          },
          {
            id: '2',
            productName: 'Product 2',
            productCategory: 'Category 2',
            productPrice: 200,
            productRating: 4.0,
            productRatingCount: 50
            // ... other properties
          }
        ],
        headers: { 'x-total-count': '2' }
      },
      isLoading: false,
      isError: false
    }
    ;(useProductsQuery as any).mockReturnValue(mockResponse)

    setup()

    expect(screen.queryByTestId('InfiniteScroll_LoadMoreButton')).toBeFalsy()
  })

  it('render loadmore button when showing products < total products', async () => {
    // Mock the response you expect from useProductsQuery
    const mockResponse = {
      data: {
        data: [
          {
            id: '1',
            productName: 'Product 1',
            productCategory: 'Category 1',
            productPrice: 100,
            productRating: 4.5,
            productRatingCount: 100
            // ... other properties
          },
          {
            id: '2',
            productName: 'Product 2',
            productCategory: 'Category 2',
            productPrice: 200,
            productRating: 4.0,
            productRatingCount: 50
            // ... other properties
          }
        ],
        headers: { 'x-total-count': '10' }
      },
      isLoading: false,
      isError: false
    }
    ;(useProductsQuery as any).mockReturnValue(mockResponse)

    setup()

    const loadMoreButton = screen.queryByTestId('InfiniteScroll_LoadMoreButton')
    fireEvent.click(loadMoreButton!)

    expect(loadMoreButton).toBeTruthy()
  })

  it('hidden products tab when click change tab correctly', async () => {
    // Mock the response you expect from useProductsQuery
    const mockResponse = {
      data: {
        data: [
          {
            id: '1',
            productName: 'Product 1',
            productCategory: 'Most popular',
            productPrice: 100,
            productRating: 4.5,
            productRatingCount: 100
            // ... other properties
          },
          {
            id: '2',
            productName: 'Product 2',
            productCategory: 'Most new',
            productPrice: 200,
            productRating: 4.0,
            productRatingCount: 50
            // ... other properties
          },
          {
            id: '3',
            productName: 'Product 3',
            productCategory: 'Most recent',
            productPrice: 300,
            productRating: 3.5,
            productRatingCount: 30
            // ... other properties
          }
        ],
        headers: { 'x-total-count': '10' }
      },
      isLoading: false,
      isError: false
    }
    ;(useProductsQuery as any).mockReturnValue(mockResponse)

    setup()

    const followingTab = screen.getByText('Following')
    fireEvent.click(followingTab)

    expect(screen.queryByText('Product 1 (Most popular)')).toBeFalsy()
    expect(screen.queryByText('Product 2 (Most new)')).toBeFalsy()
  })

  it('show modal filter products when select filter products icon button', async () => {
    // Mock the response you expect from useProductsQuery
    const mockResponse = {
      data: {
        data: [
          {
            id: '1',
            productName: 'Product 1',
            productCategory: 'Most popular',
            productPrice: 100,
            productRating: 4.5,
            productRatingCount: 100
            // ... other properties
          },
          {
            id: '2',
            productName: 'Product 2',
            productCategory: 'Most new',
            productPrice: 200,
            productRating: 4.0,
            productRatingCount: 50
            // ... other properties
          },
          {
            id: '3',
            productName: 'Product 3',
            productCategory: 'Most recent',
            productPrice: 300,
            productRating: 3.5,
            productRatingCount: 30
            // ... other properties
          }
        ],
        headers: { 'x-total-count': '10' }
      },
      isLoading: false,
      isError: false
    }
    ;(useProductsQuery as any).mockReturnValue(mockResponse)

    setup()

    const filterProductModal = screen.getByTestId('ProductFilter_IconButton')
    fireEvent.click(filterProductModal)

    expect(screen.getByTestId('ProductFilter_Popover')).toBeTruthy()
  })

  it('filter products category when selected checkbox filter product modal correctly', async () => {
    // Mock the response you expect from useProductsQuery
    const mockResponse = {
      data: {
        data: [
          {
            id: '1',
            productName: 'Product 1',
            productCategory: 'Most',
            productPrice: 100,
            productRating: 4.5,
            productRatingCount: 100
            // ... other properties
          },
          {
            id: '2',
            productName: 'Product 2',
            productCategory: 'Kit',
            productPrice: 200,
            productRating: 4.0,
            productRatingCount: 50
            // ... other properties
          },
          {
            id: '3',
            productName: 'Product 3',
            productCategory: 'UI',
            productPrice: 300,
            productRating: 3.5,
            productRatingCount: 30
            // ... other properties
          }
        ],
        headers: { 'x-total-count': '10' }
      },
      isLoading: false,
      isError: false
    }
    ;(useProductsQuery as any).mockReturnValue(mockResponse)

    setup()

    const filterProductModal = screen.getByTestId('ProductFilter_IconButton')
    fireEvent.click(filterProductModal)

    fireEvent.click(screen.getByText('UI Kit'))

    fireEvent.click(screen.getByText('Apply'))

    //hidden filter modal
    await waitFor(() => expect(screen.queryByTestId('ProductFilter_Popover')).toBeFalsy())

    //just show products match with category UI Kit
    expect(screen.queryByText('Product 3')).toBeFalsy()
    expect(screen.queryByText('Product 2')).toBeFalsy()
    expect(screen.queryByText('Product 1')).toBeFalsy()
  })

  it('click reset filter button will reset filter modal and change reset button to close button', async () => {
    // Mock the response you expect from useProductsQuery
    const mockResponse = {
      data: {
        data: [
          {
            id: '1',
            productName: 'Product 1',
            productCategory: 'Most',
            productPrice: 100,
            productRating: 4.5,
            productRatingCount: 100
            // ... other properties
          },
          {
            id: '2',
            productName: 'Product 2',
            productCategory: 'Kit',
            productPrice: 200,
            productRating: 4.0,
            productRatingCount: 50
            // ... other properties
          },
          {
            id: '3',
            productName: 'Product 3',
            productCategory: 'UI',
            productPrice: 300,
            productRating: 3.5,
            productRatingCount: 30
            // ... other properties
          }
        ],
        headers: { 'x-total-count': '10' }
      },
      isLoading: false,
      isError: false
    }
    ;(useProductsQuery as any).mockReturnValue(mockResponse)

    setup()

    const filterProductModal = screen.getByTestId('ProductFilter_IconButton')
    fireEvent.click(filterProductModal)

    //check UI Kit category
    fireEvent.click(screen.getByText('UI Kit'))

    //click reset button
    fireEvent.click(screen.getByText('Reset'))

    // filter modal still show when click reset
    await waitFor(() => expect(screen.getByTestId('ProductFilter_Popover')).toBeTruthy())

    // reset button change to close button
    await waitFor(() => {
      expect(screen.getByText('Close')).toBeTruthy()
    })
  })
})
