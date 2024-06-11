/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  fireEvent,
  render,
  screen,
  describe,
  expect,
  it,
  vi,
} from "@/src/utils/testUtils";
import Tabs, { Props } from "..";
import * as useScreenWidth from "@/src/hooks/useScreenWidth";

import { tabItems } from "@/src/constants/data";

const defaultProp = {
  onTabClick: vi.fn(),
  onTabsChange: vi.fn(),
  tabItems: tabItems,
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<Tabs {...props} />);
};

describe("Tabs Test", () => {
  it("render Tab number correctly", () => {
    setup();

    expect(screen.queryAllByTestId("Tabs_StyledTab").length).toEqual(
      defaultProp.tabItems.length,
    );
  });

  it("render Tab with item is disabled correctly", () => {
    setup({
      tabItems: [
        ...tabItems,
        { ...tabItems[2], text: "Disable", isDisabled: true },
      ],
    });

    expect(screen.getByText("Disable").getAttribute("disabled")).toBeDefined();
  });

  it("Call onTabChange and onTabClick when click Tab", () => {
    vi.spyOn(useScreenWidth, "default").mockReturnValue({
      isMobile: true,
    } as any);
    setup();

    const tabClicking = screen.queryAllByTestId("Tabs_StyledTab")[1];
    fireEvent.click(tabClicking);

    expect(defaultProp.onTabClick).toBeCalled();
    expect(defaultProp.onTabsChange).toBeCalled();
  });
});
