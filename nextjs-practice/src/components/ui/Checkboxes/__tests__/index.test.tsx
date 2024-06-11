import {
  fireEvent,
  render,
  screen,
  describe,
  expect,
  it,
  vi,
} from "@/src/utils/testUtils";
import Checkboxes, { Props } from "..";

const defaultProp = {
  onChange: vi.fn(),
  checkboxOptions: [
    {
      id: "1",
      label: "All Products",
      labelPlacement: "start",
    },
    {
      id: "2",
      label: "UI Kit",
      labelPlacement: "start",
    },
    {
      id: "3",
      label: "IIIustration",
      labelPlacement: "start",
    },
    {
      id: "4",
      label: "Wireframe Kit",
      labelPlacement: "start",
    },
    {
      id: "5",
      label: "Icons",
      labelPlacement: "start",
    },
  ],
} as unknown as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<Checkboxes {...props} />);
};

describe("Checkboxes Test", () => {
  it("render Checkboxes  correctly", () => {
    setup();

    expect(screen.getAllByRole("checkbox").length).toEqual(5);
  });

  it("onChangeValue when click checkbox correctly", () => {
    setup();

    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);

    expect(defaultProp.onChange).toBeCalled();
  });
});
