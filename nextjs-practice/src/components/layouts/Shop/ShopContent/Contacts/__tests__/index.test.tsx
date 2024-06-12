/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@/utils/testUtils'
import { describe, expect, it, vi } from 'vitest'
import Contacts from '../'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useContactsQuery } from '@/hooks/useContactsQuery'
import * as useScreenWidth from '@/hooks/useScreenWidth'

vi.mock('@/hooks/useContactsQuery')
vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(() => ({ pathname: '/' })),
  useNavigate: vi.fn(() => vi.fn())
}))

const defaultProp = {
  tabSelectedText: 'Following'
}

const queryClient = new QueryClient()

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps
  }

  return render(
    <QueryClientProvider client={queryClient}>
      <Contacts {...props} />
    </QueryClientProvider>
  )
}

describe('Contacts Test', () => {
  it('render Contacts with loading when fetching correctly', async () => {
    // Mock the response you expect from useContactsQuery
    const mockResponse = {
      data: {
        data: []
      },
      isLoading: true,
      isError: false
    }
    ;(useContactsQuery as any).mockReturnValue(mockResponse)

    setup()

    expect(screen.getByTestId('InfiniteScroll_Loading')).toBeTruthy()
  })

  it('render error tab correctly', async () => {
    // Mock the response you expect from useContactsQuery
    const mockResponse = {
      data: {
        data: []
      },
      isLoading: false,
      isError: true
    }
    ;(useContactsQuery as any).mockReturnValue(mockResponse)

    setup()

    expect(screen.getByText('Error page')).toBeTruthy()
  })

  it('render not found item tab correctly', async () => {
    // Mock the response you expect from useContactsQuery
    const mockResponse = {
      data: {
        data: undefined
      },
      isLoading: false,
      isError: true
    }
    ;(useContactsQuery as any).mockReturnValue(mockResponse)

    setup()

    expect(screen.getByText('No item found')).toBeTruthy()
  })

  it('render contact item number correctly', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({ matchedBreakpoint: true } as any)
    // Mock the response you expect from useContactsQuery
    const mockResponse = {
      data: {
        data: [
          {
            id: 8,
            userName: 'Rosetta Gottlieb8',
            productNumber: 12,
            followerNumber: 23,
            contactStatus: 'followers'
          },
          {
            id: 9,
            userName: 'Rosetta Gottlieb9',
            productNumber: 12,
            followerNumber: 23,
            contactStatus: 'following'
          },
          {
            id: 10,
            userName: 'Rosetta Gottlieb10',
            productNumber: 12,
            followerNumber: 23,
            contactStatus: 'followers'
          },
          {
            id: 11,
            userName: 'Rosetta Gottlieb11',
            productNumber: 12,
            followerNumber: 23,
            contactStatus: 'following'
          },
          {
            id: 12,
            userName: 'Rosetta Gottlieb12',
            productNumber: 12,
            followerNumber: 23,
            contactStatus: 'followers'
          }
        ],
        headers: { 'x-total-count': '10' }
      },
      isLoading: false,
      isError: false
    }
    ;(useContactsQuery as any).mockReturnValue(mockResponse)

    setup()

    expect(screen.getAllByTestId('ContactItem').length).toEqual(mockResponse.data.data.length)
  })
})
