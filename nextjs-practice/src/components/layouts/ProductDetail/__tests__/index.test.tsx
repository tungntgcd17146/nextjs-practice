/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import ProductDetail from '../'
import * as useScreenWidth from '@/hooks/useScreenWidth'
import { fakeFeatureForProductData, fakeProductOverview } from '@/constants/data'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useProductQuery } from '@/hooks/useProductQuery'

vi.mock('@/hooks/useProductQuery')

vi.mock('react-router-dom')

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(() => ({ id: '1' })),
  useLocation: vi.fn(() => ({ pathname: '/product/1' })),
  useNavigate: vi.fn(() => vi.fn())
}))

const mockProduct = {
  id: '1',
  productName: 'Product 1',
  productCategory: 'Category 1',
  productPrice: 100,
  productRating: 4.5,
  productRatingCount: 100,
  productOverview: fakeProductOverview,
  productFeature: fakeFeatureForProductData
  // ... other properties
}

const defaultProp = {}

const queryClient = new QueryClient()

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(
    <QueryClientProvider client={queryClient}>
      <ProductDetail {...props} />
    </QueryClientProvider>
  )
}

describe('ProductDetail Test', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })
  it('render loading correctly when fetching product data', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true, isTablet: false, isDesktop: false } as any)

    // Mock the API function
    ;(useProductQuery as any).mockReturnValue({
      data: mockProduct,
      isLoading: true,
      isError: false
    })
    setup()

    expect(screen.getByTestId('ProductDetail_Loading')).toBeTruthy()
  })

  it('render product detail correctly and go back shop page when click close', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: false, isDesktop: true } as any)

    // Mock the API function
    ;(useProductQuery as any).mockReturnValue({
      data: mockProduct,
      isLoading: false,
      isError: false
    })
    setup()

    await waitFor(() => {
      expect(screen.getByTestId('ProductDetail_CloseIconButton')).toBeTruthy()

      fireEvent.click(screen.getByTestId('ProductDetail_CloseIconButton'))
    })
  })

  it('show Error page when fetch product data error', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: false, isDesktop: true } as any)

    // Mock the API function
    ;(useProductQuery as any).mockReturnValue({
      data: mockProduct,
      isLoading: false,
      isError: true
    })
    setup()

    await waitFor(() => {
      expect(screen.getByText('Error page')).toBeTruthy()
    })
  })
})
