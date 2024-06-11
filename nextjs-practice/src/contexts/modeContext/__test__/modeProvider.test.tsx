import {
  describe,
  expect,
  fireEvent,
  it,
  render,
  screen,
} from "../../../utils/testUtils";
import { ModeProvider } from "../modeProvider";
import { useMode } from "../useModeContext";

const TestComponent = () => {
  const { isDarkMode, toggleMode } = useMode();

  const handleToggleMode = () => {
    toggleMode(!isDarkMode);
  };

  return (
    <div>
      <p>Dark Mode: {isDarkMode ? "Enabled" : "Disabled"}</p>
      <button onClick={handleToggleMode}>Toggle Dark Mode</button>
    </div>
  );
};

describe("ModeProvider", () => {
  it("ModeProvider toggles dark mode correctly", async () => {
    // Wrap the component tree with ModeProvider
    const { unmount } = render(
      <ModeProvider>
        <TestComponent />
      </ModeProvider>,
    );

    // Toggle the mode
    fireEvent.click(screen.getByText("Toggle Dark Mode"));

    // Check if the mode is updated
    expect(screen.getByText("Dark Mode: Enabled")).toBeTruthy();

    // Clean up
    unmount();
  });
});
