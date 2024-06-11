import { render, screen, describe, expect, it } from "@/src/utils/testUtils";
import Chip, { Props } from "..";

const defaultProp = {
  price: 100,
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<Chip {...props} />);
};

describe("Chip Test", () => {
  it("render Chip correctly", () => {
    setup();

    expect(screen.getByTestId("Chip")).toBeTruthy();
    expect(screen.getByTestId("Chip").textContent).toEqual("100$");
  });

  it("render Chip with price = 0 correctly", () => {
    setup({
      price: 0,
    });

    expect(screen.getByTestId("Chip")).toBeTruthy();
    expect(screen.getByTestId("Chip").textContent).toEqual("$0");
  });

  it("render Chip with empty price correctly", () => {
    setup({
      price: undefined,
    });

    expect(screen.getByTestId("Chip")).toBeTruthy();
    expect(screen.getByTestId("Chip").textContent).toEqual("");
  });
});
