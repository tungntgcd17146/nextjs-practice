/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from "@/src/utils/testUtils";
import { describe, expect, it, vi } from "vitest";
import Drawer, { Props } from "..";

import * as useScreenWidth from "@/src/hooks/useScreenWidth";
import { ModeProvider } from "@/src/contexts/modeContext/ModeContext";
import { listItems } from "@/src/components/layouts/Header";

const defaultProp = {
  isOpen: true,
  onClose: vi.fn(),
  onChangeMode: vi.fn(),
  onOpen: vi.fn(),
  listItems: listItems,
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(
      <ModeProvider>
        <Drawer {...props} />
      </ModeProvider>,
  );
};

describe("Drawer Test", () => {
  it("should render correct header include close button on mobile", () => {
    vi.spyOn(useScreenWidth, "default").mockReturnValue({
      isTablet: false,
      isDesktop: false,
    } as any);
    setup();

    expect(screen.getByTestId("Drawer_CloseIcon")).toBeTruthy();
  });

  it("should call onClose when close button on mobile", () => {
    vi.spyOn(useScreenWidth, "default").mockReturnValue({
      isTablet: false,
      isDesktop: false,
    } as any);
    setup();

    expect(screen.getByTestId("Drawer_CloseIcon")).toBeTruthy();

    fireEvent.click(screen.getByTestId("Drawer_CloseIcon"));
    expect(defaultProp.onClose).toHaveBeenCalled();
  });

  it("should hidden close button on desktop and tablet", () => {
    vi.spyOn(useScreenWidth, "default").mockReturnValue({
      isTablet: true,
      isDesktop: true,
    } as any);
    setup();

    expect(screen.queryByTestId("Drawer_CloseIcon")).toBeFalsy();
  });

  it("render NavItem correctly", () => {
    vi.spyOn(useScreenWidth, "default").mockReturnValue({
      isDeskTop: true,
    } as any);
    setup();

    expect(screen.queryAllByTestId("NavItem_ListItemButton").length).toEqual(
      listItems.length + 1,
    );
  });

  it("should show ArrowForwardIcon icon on tablet", () => {
    vi.spyOn(useScreenWidth, "default").mockReturnValue({
      isTablet: true,
    } as any);
    setup({
      isOpen: false,
    });

    expect(screen.getByTestId("Drawer_ArrowForwardIcon")).toBeTruthy();
  });
});
