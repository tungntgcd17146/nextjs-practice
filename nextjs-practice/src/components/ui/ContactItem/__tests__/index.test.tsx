import {
  render,
  screen,
  describe,
  expect,
  it,
  vi,
  fireEvent,
} from "@/src/utils/testUtils";
import ContactItem, { Props } from "..";
import { fakeUserContact } from "@/src/mocks/commonData";

const defaultProp = {
  user: fakeUserContact,
  onChangeFollowButtonStatus: vi.fn(),
  onClickMessageButton: vi.fn(),
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<ContactItem {...props} />);
};

describe("ContactItem Test", () => {
  it("render ContactItem correctly", () => {
    setup();

    expect(screen.getByText("Rosetta Gottlieb")).toBeTruthy();

    expect(screen.getByText("12")).toBeTruthy();
    expect(screen.getByText("Products")).toBeTruthy();

    expect(screen.getByText("23")).toBeTruthy();
    expect(screen.getByText("Followers")).toBeTruthy();
  });

  it("init Following for follow button correctly", async () => {
    setup({
      user: {
        ...fakeUserContact,
        contactStatus: "following",
      },
    });

    const actionButton = screen.getByTestId("ContactItem_FollowButton");

    expect(actionButton.textContent).toEqual("Unfollow");
  });

  it("call onChangeFollowButtonStatus when click FollowButton", () => {
    setup({
      user: {
        ...fakeUserContact,
        contactStatus: "following",
      },
    });

    const actionButton = screen.getByTestId("ContactItem_FollowButton");

    fireEvent.click(actionButton);

    expect(defaultProp.onChangeFollowButtonStatus).toBeCalled();
    expect(actionButton.textContent).toEqual("Follow");
  });

  it("change FollowButton to Following when click FollowButton", () => {
    setup();

    const actionButton = screen.getByTestId("ContactItem_FollowButton");

    fireEvent.click(actionButton);

    expect(defaultProp.onChangeFollowButtonStatus).toBeCalled();
    expect(actionButton.textContent).toEqual("Following");
  });

  it("call onClickMessageButton when click MessageButton button", () => {
    setup();

    const actionButton = screen.getByTestId("ContactItem_MessageButton");

    fireEvent.click(actionButton);

    expect(defaultProp.onClickMessageButton).toBeCalled();
  });
});
