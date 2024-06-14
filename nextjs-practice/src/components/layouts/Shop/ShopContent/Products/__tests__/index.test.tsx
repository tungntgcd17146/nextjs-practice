/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import Products from '../'
import * as useScreenWidth from '@/hooks/useScreenWidth'
import { useNavigate } from 'react-router-dom'

vi.mock('react-router-dom')

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(() => ({ pathname: '/' })),
  useNavigate: vi.fn(() => vi.fn())
}))

const defaultProp = {
  products: [
    {
      id: 17,
      productName: 'Product 7',
      productCategory: 'IIIustration',
      productPrice: 88,
      productRating: 4.9,
      productRatingCount: 1251,
      popularity: 'Most recent',
      createdAt: '2022-01-10T12:00:00Z'
    }
  ]
}

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<Products {...props} />)
}

describe('Products Test', () => {
  it('render Products number correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ matchedBreakpoint: true } as any)
    setup()

    expect(screen.getAllByTestId('ProductCard').length).toEqual(defaultProp.products.length)
  })

  it('click view icon on each Product should navigate to product detail page correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ matchedBreakpoint: true } as any)
    setup()

    const firstProduct = screen.getAllByTestId('ProductCard')[0]

    fireEvent.mouseEnter(firstProduct)

    fireEvent.click(screen.getAllByTestId('ProductCard_IconButton_view')[0])

    expect(useNavigate).toBeCalled()
  })
})
