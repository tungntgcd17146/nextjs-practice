/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import Shop from '../'
import * as useScreenWidth from '@/hooks/useScreenWidth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const defaultProp = {}

const queryClient = new QueryClient()

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(
    <QueryClientProvider client={queryClient}>
      <Shop {...props} />
    </QueryClientProvider>
  )
}

describe('Shop Test', () => {
  it('render Shop on mobile correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true, isTablet: false, isDesktop: false } as any)
    setup()

    expect(screen.getByText('Chelsie Haley')).toBeTruthy()
    expect(screen.getByText('Dream big. Think different.Do great!')).toBeTruthy()
  })

  it('render Shop on tablet correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: true, isDesktop: false } as any)
    setup()

    expect(screen.getByText('Chelsie Haley')).toBeTruthy()
    expect(screen.getByText('Dream big. Think different.Do great!')).toBeTruthy()
  })

  it('render Shop on desktop correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: false, isTablet: false, isDesktop: true } as any)
    setup()

    expect(screen.getByText('Chelsie Haley')).toBeTruthy()
    expect(screen.getByText('Dream big. Think different.Do great!')).toBeTruthy()
  })
})
