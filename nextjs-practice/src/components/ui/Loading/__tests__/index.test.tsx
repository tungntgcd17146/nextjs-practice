import { render, screen, describe, expect, it } from "@/src/utils/testUtils";
import Loading, { Props } from "..";

const defaultProp = {
  dataTestId: "Loading",
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<Loading {...props} />);
};

describe("Loading Test", () => {
  it("render Loading correctly", () => {
    setup();

    expect(screen.getByTestId("Loading")).toBeTruthy();
    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it("render Loading with custom helper text correctly", () => {
    setup({
      helperText: "More ...",
    });

    expect(screen.getByText("More ...")).toBeTruthy();
  });
});
