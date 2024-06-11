import { fireEvent, render, screen, describe, expect, it, vi } from "@/src/utils/testUtils";
import SearchInput, { Props } from "..";

const defaultProp = {
  onClickEndHelper: vi.fn(),
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<SearchInput {...props} />);
};

describe("SearchInput Test", () => {
  it("render SearchInput with icon and Input correctly", () => {
    setup();

    expect(screen.getByTestId("SearchInput_SearchIcon")).toBeTruthy();
    expect(screen.getByTestId("SearchInput_InputBase")).toBeTruthy();
  });

  it("render SearchInput with EndHelper button correctly", () => {
    setup({
      endHelper: "⌘ F",
    });

    expect(screen.getByTestId("SearchInput_EndHelper")).toBeTruthy();
  });

  it("call onClick when click EndHelper button correctly", () => {
    setup({
      endHelper: "⌘ F",
    });
    fireEvent.click(screen.getByTestId("SearchInput_EndHelper"));

    expect(defaultProp.onClickEndHelper).toBeCalled();
  });
});
