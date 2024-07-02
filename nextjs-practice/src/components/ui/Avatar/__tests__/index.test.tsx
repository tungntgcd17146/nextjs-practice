import {
  fireEvent,
  render,
  screen,
  describe,
  expect,
  it,
  vi,
} from '@/src/utils/testUtils';
import Avatar, { Props } from '..';

import Customer1 from '/assets/customer1.webp';
import { themes } from '@/src/themes';

import DragHandleIcon from '@mui/icons-material/DragHandle';

const defaultProp = {
  src: Customer1,
  alt: Customer1,
  avtBackground: themes.colors.yellow[600],
  onClick: vi.fn(),
  size: 'small',
} as unknown as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<Avatar {...props} />);
};

describe('Avatar Test', () => {
  it('render Avatar correctly', () => {
    setup();

    expect(screen.getByTestId('Avatar_MuiAvatar')).toBeTruthy();
  });

  it('render Avatar with badge correctly', () => {
    setup({
      BadgeIcon: <DragHandleIcon />,
      size: 'large',
    });

    expect(screen.getByTestId('Avatar_StyledBadge')).toBeTruthy();
  });

  it('call onClick when click Avatar correctly', () => {
    setup({
      BadgeIcon: <DragHandleIcon />,
      size: 'medium',
    });

    const avatarWithBadge = screen.getByTestId('Avatar_StyledBadge');

    fireEvent.click(avatarWithBadge);

    expect(defaultProp.onClick).toBeCalled();
  });
});
