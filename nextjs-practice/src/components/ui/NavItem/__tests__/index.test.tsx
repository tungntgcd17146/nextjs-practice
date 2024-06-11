/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, describe, expect, it, vi } from "@/src/utils/testUtils";
import NavItem, { Props } from "..";

import * as useScreenWidth from "@/src/hooks/useScreenWidth";

const defaultProp = {
  icon: <></>,
  text: "Nav Item",
  index: 1,
  isSelected: false,
  onNavItemClick: vi.fn(),
  isShowText: true,
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(
      <NavItem {...props} />
  );
};

describe("NavItem Test", () => {
  it("render NavItem with icon and text correctly", () => {
    setup();

    expect(screen.getByTestId("NavItem_ListItemIcon")).toBeTruthy();
    expect(screen.getByTestId("NavItem_ListItemText")).toBeTruthy();
  });

  it("render NavItem with just icon when screen is tablet correctly", () => {
    vi.spyOn(useScreenWidth, "default").mockReturnValue({
      isTablet: true,
    } as any);
    setup({
      isShowText: false,
    });

    expect(screen.getByTestId("NavItem_ListItemIcon")).toBeTruthy();
    expect(screen.queryByTestId("NavItem_ListItemText")).toBeFalsy();
  });

  it("render NavItem selected correctly", () => {
    setup({
      isSelected: true,
    });

    expect(
      screen
        .getByTestId("NavItem_ListItemButton")
        .getAttribute("class")
        ?.includes("Mui-selected"),
    ).toBeTruthy();
  });

  it("call onClick when click NavItem correctly", () => {
    setup();

    fireEvent.click(screen.getByTestId("NavItem_ListItemButton"));

    expect(defaultProp.onNavItemClick).toBeCalled();
  });
});
