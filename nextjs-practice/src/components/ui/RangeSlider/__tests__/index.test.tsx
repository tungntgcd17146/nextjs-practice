import {
  fireEvent,
  render,
  screen,
  describe,
  expect,
  it,
  vi,
} from "@/src/utils/testUtils";
import RangeSlider, { Props, valuetext } from "..";

const defaultProp = {
  valueLabelFormat: valuetext,
  min: 0,
  max: 100,
  defaultValue: [20, 40],
  onChangeValue: vi.fn(),
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<RangeSlider {...props} />);
};

describe("RangeSlider Test", () => {
  it("render RangeSlider  correctly", () => {
    setup();

    expect(screen.getByTestId("RangeSlider")).toBeTruthy();
  });

  it("onChangeValue  correctly", () => {
    setup();

    const slider = screen.getAllByRole("slider")[1];
    fireEvent.change(slider, { target: { value: "50" } });

    expect(defaultProp.onChangeValue).toBeCalled();
  });
});
