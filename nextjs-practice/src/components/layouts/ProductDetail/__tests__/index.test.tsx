//TODO: Update test later
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { fireEvent, render, screen, waitFor } from '@/src/utils/testUtils'
// import { describe, expect, it, vi } from 'vitest'
// import ProductDetail from '../'
// import * as useScreenWidth from '@/src/hooks/useScreenWidth'
// import { fakeFeatureForProductData, fakeProductOverview } from '@/src/mocks/data'

// const mockProduct = {
//   id: '1',
//   productName: 'Product 1',
//   productCategory: 'Category 1',
//   productPrice: 100,
//   productRating: 4.5,
//   productRatingCount: 100,
//   productOverview: fakeProductOverview,
//   productFeature: fakeFeatureForProductData
//   // ... other properties
// }

// const defaultProp = {
//   product: mockProduct
// }

// const setup = (overrideProps = {}) => {
//   const props = {
//     ...defaultProp,
//     ...overrideProps
//   }

//   return render(
//       <ProductDetail {...props} />
//   )
// }

// describe('ProductDetail Test', () => {
//   afterEach(() => {
//     vi.clearAllMocks()
//   })
//   it('render loading correctly when fetching product data', () => {
//     vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true, isTablet: false, isDesktop: false } as any)

//     // Mock the API function
//     ;(useProductQuery as any).mockReturnValue({
//       data: mockProduct,
//       isLoading: true,
//       isError: false
//     })
//     setup()

//     expect(screen.getByTestId('ProductDetail_Loading')).toBeTruthy()
//   })

//   it('render product detail correctly and go back shop page when click close', async () => {
//     vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: false, isDesktop: true } as any)

//     // Mock the API function
//     ;(useProductQuery as any).mockReturnValue({
//       data: mockProduct,
//       isLoading: false,
//       isError: false
//     })
//     setup()

//     await waitFor(() => {
//       expect(screen.getByTestId('ProductDetail_CloseIconButton')).toBeTruthy()

//       fireEvent.click(screen.getByTestId('ProductDetail_CloseIconButton'))
//     })
//   })

//   it('show Error page when fetch product data error', async () => {
//     vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: false, isDesktop: true } as any)

//     // Mock the API function
//     ;(useProductQuery as any).mockReturnValue({
//       data: mockProduct,
//       isLoading: false,
//       isError: true
//     })
//     setup()

//     await waitFor(() => {
//       expect(screen.getByText('Error page')).toBeTruthy()
//     })
//   })
// })
