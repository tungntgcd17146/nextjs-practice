import {
  render,
  screen,
  describe,
  expect,
  it,
  vi,
} from "@/src/utils/testUtils";
import IconButton, { Props } from "..";

import DragHandleIcon from "@mui/icons-material/DragHandle";

const defaultProp = {
  children: <DragHandleIcon />,
  badgeColor: "error",
  onClick: vi.fn(),
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<IconButton {...props} />);
};

describe("NavItem Test", () => {
  it("render IconButton correctly", () => {
    setup();

    expect(screen.getByTestId("IconButton")).toBeTruthy();
  });

  it("render IconButton with Badge correctly", () => {
    setup({
      badgeContent: "2",
    });

    expect(screen.getByTestId("IconButton")).toBeTruthy();
    expect(screen.queryByTestId("IconButton_Badge")).toBeTruthy();
    expect(
      screen.queryByTestId("IconButton_Badge")?.querySelector("span")
        ?.textContent,
    ).toBe("2");
  });
});
