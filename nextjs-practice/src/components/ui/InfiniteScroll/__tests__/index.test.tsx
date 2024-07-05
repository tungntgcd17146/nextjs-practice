import {
  fireEvent,
  render,
  screen,
  describe,
  expect,
  it,
} from '@/src/utils/testUtils';
import { vi } from 'vitest';
import InfiniteScroll, { Props } from '..';

const defaultProp = {
  maxHeight: '300px',
  children: <></>,
  isLoading: false,
  isError: false,
  isEmptyItem: false,
  onClickLoadMore: vi.fn(),
  isHiddenLoadMore: false,
} as Props;

// Mock useRouter implementation using vi.mock
const mockRouter = {
  push: vi.fn(), // Mock push function as needed
};

vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter, // Mock useRouter to return your mockRouter object
}));

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<InfiniteScroll {...props} />);
};

describe('InfiniteScroll Test', () => {
  it('render InfiniteScroll with load more button correctly', () => {
    setup();

    expect(screen.getByTestId('InfiniteScroll_LoadMoreButton')).toBeTruthy();
  });

  it('click load more button will call onClickLoadMore correctly', () => {
    setup();

    fireEvent.click(screen.getByTestId('InfiniteScroll_LoadMoreButton'));

    expect(defaultProp.onClickLoadMore).toBeCalled();
  });

  it('render InfiniteScroll without load more button correctly', () => {
    setup({
      isHiddenLoadMore: true,
    });

    expect(screen.queryByTestId('InfiniteScroll_LoadMoreButton')).toBeFalsy();
  });

  it('render InfiniteScroll with show less button correctly', () => {
    setup({
      isHiddenLoadMore: true,
    });

    expect(screen.queryByTestId('InfiniteScroll_ShowLessButton')).toBeTruthy();
    expect(screen.queryByTestId('InfiniteScroll_LoadMoreButton')).toBeFalsy();
  });

  it('render No item found correctly', () => {
    setup({
      isEmptyItem: true,
    });

    expect(screen.getByText('No item found')).toBeTruthy();
  });

  it('render error page correctly', () => {
    setup({
      isError: true,
    });

    expect(screen.getByText('Opp!')).toBeTruthy();
  });

  it('render No item found page correctly', () => {
    setup({
      isEmptyItem: true,
    });

    expect(screen.getByText('No item found')).toBeTruthy();
  });
});
