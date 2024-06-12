/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import OwnerInfo from '../'
import * as useScreenWidth from '@/hooks/useScreenWidth'
import Customer1 from '/assets/customer1.webp'

const defaultProp = {
  name: 'Chelsie Haley',
  description: 'Dream big. Think different.Do great!',
  avatar: Customer1,
  onClickFollow: vi.fn()
}

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(<OwnerInfo {...props} />)
}

describe('OwnerInfo Test', () => {
  it('render OwnerInfo correctly', () => {
    setup()

    expect(screen.getByText('Chelsie Haley')).toBeTruthy()
    expect(screen.getByText('Dream big. Think different.Do great!')).toBeTruthy()
  })

  it('click follow button call onClickFollow prop correctly', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isMobile: true, isTablet: false, isDesktop: false } as any)
    setup()

    fireEvent.click(screen.getByTestId('OwnerInfo_Follow_Button'))

    expect(defaultProp.onClickFollow).toBeCalled()
  })
})
