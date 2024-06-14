/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import BackgroundImage from '../'
import * as useScreenWidth from '@/hooks/useScreenWidth'

const defaultProp = {}

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<BackgroundImage {...props} />)
}

describe('BackgroundImage Test', () => {
  it('render BackgroundImage on mobile correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true, isTablet: false, isDesktop: false } as any)
    setup()

    expect(screen.getByTestId('BackgroundImage_Mobile')).toBeTruthy()
  })

  it('click search icon on mobile should show search input popup on mobile', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: false, isDesktop: true } as any)
    setup()

    expect(screen.getByTestId('BackgroundImage')).toBeTruthy()
  })
})
