/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import DetailContent from '../'
import * as useScreenWidth from '@/hooks/useScreenWidth'
import { fakeFeatureForProductData, fakeProductOverview } from '@/constants/data'

const defaultProp = {
  productName: 'Haley',
  productCategory: 'UI Kit',
  productPrice: 100,
  productRating: 4.5,
  productRatingCount: 100,
  productOverview: fakeProductOverview,
  productFeature: fakeFeatureForProductData
}

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<DetailContent {...props} />)
}

describe('DetailContent Test', () => {
  it('render DetailContent correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: false, isDesktop: true } as any)
    setup()

    expect(screen.getByText('Fleet - Haley UI Kit')).toBeTruthy()
  })

  it('render feature of DetailContent correctly', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true, isTablet: false, isDesktop: false } as any)
    setup()

    expect(screen.getByText(defaultProp.productFeature[0].text)).toBeTruthy()
    expect(screen.getByText(defaultProp.productFeature[1].text)).toBeTruthy()
    expect(screen.getByText(defaultProp.productFeature[2].text)).toBeTruthy()
  })
})
