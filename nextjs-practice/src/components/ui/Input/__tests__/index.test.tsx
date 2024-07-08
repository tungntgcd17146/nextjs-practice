import {
  fireEvent,
  render,
  screen,
  describe,
  expect,
  it,
  vi,
} from '@/src/utils/testUtils';
import Input, { Props } from '..';

const defaultProp = {
  onClickEndHelper: vi.fn(),
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<Input {...props} />);
};

describe('Input Test', () => {
  it('render Input correctly', () => {
    setup();

    expect(screen.getByTestId('Input_InputBase')).toBeTruthy();
  });

  it('render Input with start icon correctly', () => {
    setup({
      startIcon: 'search',
    });

    expect(screen.getByTestId('Input_Start_Icon')).toBeTruthy();
  });

  it('render Input with EndHelper button correctly', () => {
    setup({
      endHelper: '⌘ F',
    });

    expect(screen.getByTestId('Input_EndHelper')).toBeTruthy();
  });

  it('call onClick when click EndHelper button correctly', () => {
    setup({
      endHelper: '⌘ F',
    });
    fireEvent.click(screen.getByTestId('Input_EndHelper'));

    expect(defaultProp.onClickEndHelper).toBeCalled();
  });
});
