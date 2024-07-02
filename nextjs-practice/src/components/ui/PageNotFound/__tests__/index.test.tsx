/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  describe,
  expect,
  it,
  vi,
  render,
  screen,
} from '@/src/utils/testUtils';
import NotFoundPage, { Props } from '..';

import * as useScreenWidth from '@/src/hooks/useScreenWidth';

const defaultProp = {
  onClick: vi.fn(),
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<NotFoundPage {...props} />);
};

describe('NotFoundPage Test', () => {
  it('render NotFoundPage with error 404 correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isTablet: true,
      isDesktop: false,
    } as any);
    setup();

    expect(screen.getByText('404')).toBeTruthy();
  });

  it('render NotFoundPage with error 404 on mobile correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isTablet: false,
      isDesktop: false,
    } as any);
    setup();

    expect(screen.getByText('404')).toBeTruthy();
  });

  it('hidden action button correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isTablet: false,
      isDesktop: false,
    } as any);
    setup({
      isHiddenActionButton: true,
    });

    expect(screen.queryByTestId('NotFoundPage_Button')).toBeFalsy();
  });

  // it('re-direct home page when click go home button correctly', () => {
  //   vi.spyOn(useScreenWidth, 'default').mockReturnValue({ isTablet: false, isDesktop: false } as any)
  //   const spyNavigate = vi.mocked(useNavigate).mockReturnValue(vi.fn() as any)
  //   setup()

  //   fireEvent.click(screen.getByTestId('NotFoundPage_Button'))

  //   expect(spyNavigate).toBeCalled()
  // })

  it('render NotFoundPage with custom content correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isTablet: false,
      isDesktop: true,
    } as any);
    setup({
      headerContent: 'Oops',
      body: 'This page does not exist.',
      footer: 'This feature will be implemented in the future.',
      isBrowserError: false,
    });

    expect(screen.getByText('Oops')).toBeTruthy();
    expect(screen.getByText('This page does not exist.')).toBeTruthy();
    expect(
      screen.getByText('This feature will be implemented in the future.'),
    ).toBeTruthy();
  });
});
