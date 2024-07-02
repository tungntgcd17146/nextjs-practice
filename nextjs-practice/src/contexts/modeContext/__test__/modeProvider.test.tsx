import {
  describe,
  expect,
  fireEvent,
  it,
  render,
  screen,
} from '../../../utils/testUtils';
import { ModeProvider } from '../ModeContext';
import { useMode } from '../useModeContext';

const TestComponent = () => {
  const { isDarkMode, toggleMode } = useMode();

  const handleToggleMode = () => {
    toggleMode(!isDarkMode);
  };

  return (
    <>
      <p>Dark Mode: {isDarkMode ? 'Enabled' : 'Disabled'}</p>
      <button onClick={handleToggleMode}>Toggle Dark Mode</button>
    </>
  );
};

describe('ModeProvider', () => {
  it('ModeProvider toggles dark mode correctly', async () => {
    // Wrap the component tree with ModeProvider
    const { unmount } = render(
      <ModeProvider>
        <TestComponent />
      </ModeProvider>,
    );

    // Toggle the mode
    fireEvent.click(screen.getByText('Toggle Dark Mode'));

    // Check if the mode is updated
    expect(screen.getByText('Dark Mode: Enabled')).toBeTruthy();

    // Clean up
    unmount();
  });
});
