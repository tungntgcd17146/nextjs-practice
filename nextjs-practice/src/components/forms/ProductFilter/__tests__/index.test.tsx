/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  fireEvent,
  render,
  screen,
  describe,
  expect,
  it,
  vi,
  waitFor,
} from '@/src/utils/testUtils';
import ProductFilter, { Props } from '..';

import * as useScreenWidth from '@/src/hooks/useScreenWidth';

const defaultProp = {
  onReset: vi.fn(),
  onSubmit: vi.fn(),
  totalProducts: 0,
  showingProducts: 0,
  onCloseModal: vi.fn(),
  anchorEl: (<button />) as unknown as HTMLElement,
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<ProductFilter {...props} />);
};

describe('ProductFilter Test', () => {
  it('render ProductFilter when click icon button correctly', () => {
    setup();

    expect(screen.getByTestId('ProductFilter_Popover')).toBeTruthy();
  });

  it('render and close ProductFilter on mobile when click icon button correctly', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isMobile: true,
    } as any);
    setup();

    expect(screen.getByTestId('ProductFilter_Popover')).toBeTruthy();

    fireEvent.click(screen.getByTestId('ProductFilter_CloseIconButton'));

    await waitFor(() => expect(defaultProp.onCloseModal).toBeCalled());
  });

  it('call onReset when click Reset button', () => {
    setup();

    const search = screen.getByPlaceholderText('Search for products');
    fireEvent.change(search, { target: { value: 'test' } });

    fireEvent.click(screen.getByText('Reset'));

    expect(defaultProp.onReset).toBeCalled();
  });

  it('change to close button when reset filter modal', async () => {
    setup();

    const checkedBoxes = screen.getAllByRole('checkbox');

    fireEvent.click(checkedBoxes[0]);
    fireEvent.click(checkedBoxes[1]);
    fireEvent.click(checkedBoxes[1]);

    fireEvent.click(screen.getByText('Reset'));

    expect(defaultProp.onReset).toBeCalled();

    await waitFor(() => expect(screen.queryByText('Reset')).toBeFalsy());
  });

  it('call onSubmit when click Apply button', () => {
    setup();

    const search = screen.getByPlaceholderText('Search for products');
    fireEvent.change(search, { target: { value: 'test' } });

    fireEvent.click(screen.getByText('Apply'));

    expect(defaultProp.onSubmit).toBeCalled();
  });
});
