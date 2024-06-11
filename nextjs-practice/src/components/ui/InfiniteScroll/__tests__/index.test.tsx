import {
  vi,
  fireEvent,
  render,
  screen,
  describe,
  expect,
  it,
} from "@/src/utils/testUtils";
import InfiniteScroll, { Props } from "..";

const defaultProp = {
  maxHeight: "300px",
  children: <></>,
  isLoading: false,
  isError: false,
  isEmptyItem: false,
  onClickLoadMore: vi.fn(),
  isHiddenLoadMore: false,
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<InfiniteScroll {...props} />);
};

describe("NavItem Test", () => {
  it("render InfiniteScroll with load more button correctly", () => {
    setup();

    expect(screen.getByTestId("InfiniteScroll_LoadMoreButton")).toBeTruthy();
  });

  it("click load more button will call onClickLoadMore correctly", () => {
    setup();

    fireEvent.click(screen.getByTestId("InfiniteScroll_LoadMoreButton"));

    expect(defaultProp.onClickLoadMore).toBeCalled();
  });

  it("render InfiniteScroll without load more button correctly", () => {
    setup({
      isHiddenLoadMore: true,
    });

    expect(screen.queryByTestId("InfiniteScroll_LoadMoreButton")).toBeFalsy();
  });

  it("render loading CircularProgress  correctly", () => {
    setup({
      isLoading: true,
    });

    expect(screen.getByTestId("InfiniteScroll_Loading")).toBeTruthy();
  });

  it("render error page correctly", () => {
    setup({
      isError: true,
    });

    expect(screen.getByText("Error page")).toBeTruthy();
  });

  it("render No item found page correctly", () => {
    setup({
      isEmptyItem: true,
    });

    expect(screen.getByText("No item found")).toBeTruthy();
  });
});
