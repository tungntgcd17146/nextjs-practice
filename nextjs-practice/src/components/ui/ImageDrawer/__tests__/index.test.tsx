/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, describe, expect, it, vi } from "@/src/utils/testUtils";
import ImageDrawer, { Props } from "..";

import * as useScreenWidth from "@/src/hooks/useScreenWidth";
import DarkProductDetail from "@/public/assets/ProductDetailImgDark.webp";

const defaultProp = {
  image: DarkProductDetail,
} as unknown as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<ImageDrawer {...props} />);
};

describe("ImageDrawer Test", () => {
  it("render ImageDrawer with icon and text correctly", () => {
    setup();

    expect(screen.getByTestId("ImageDrawer_Img")).toBeTruthy();
  });

  it("render ImageDrawer when click image correctly", () => {
    vi.spyOn(useScreenWidth, "default").mockReturnValue({
      matchedBreakpoint: true,
    } as any);
    setup();

    fireEvent.click(screen.getByTestId("ImageDrawer_Img"));

    expect(screen.getByTestId("ImageDrawer_Img_Modal")).toBeTruthy();
  });
});
