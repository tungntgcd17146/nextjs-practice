import {
  render,
  screen,
  describe,
  expect,
  it,
  vi,
  fireEvent,
} from '@/src/utils/testUtils';
import ProductCard, { Props } from '..';

const defaultProp = {
  id: 1,
  productName: 'Product',
  productCategory: 'Category',
  productPrice: 100,
  productRating: 4.5,
  productRatingCount: 100,
  popularity: 'Most popular',
  onEditCard: vi.fn(),
  onDeleteCard: vi.fn(),
  onViewCard: vi.fn(),
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<ProductCard {...props} />);
};

describe('ProductCard Test', () => {
  it('render ProductCard correctly', () => {
    setup();

    expect(screen.getByText('Product (Category)')).toBeTruthy();
    expect(screen.getByText('4.5')).toBeTruthy();
    expect(screen.getByText('(100)')).toBeTruthy();
  });

  it('hover ProductCard will show Icon Button', async () => {
    setup();

    const cardItem = screen.getByTestId('ProductCard_CardActionArea');

    fireEvent.mouseEnter(cardItem);

    expect(screen.getByTestId('ProductCard_IconButton_edit')).toBeTruthy();
    expect(screen.getByTestId('ProductCard_IconButton_delete')).toBeTruthy();
    expect(screen.getByTestId('ProductCard_IconButton_view')).toBeTruthy();

    fireEvent.mouseLeave(cardItem);
  });

  it('call onEditCard when click icon edit button', () => {
    setup();

    const cardItem = screen.getByTestId('ProductCard_CardActionArea');

    fireEvent.mouseEnter(cardItem);

    fireEvent.click(screen.getByTestId('ProductCard_IconButton_edit'));

    expect(defaultProp.onEditCard).toBeCalled();
  });

  it('call onEditCard when click icon delete button', () => {
    setup();

    const cardItem = screen.getByTestId('ProductCard_CardActionArea');

    fireEvent.mouseEnter(cardItem);

    fireEvent.click(screen.getByTestId('ProductCard_IconButton_delete'));

    expect(defaultProp.onDeleteCard).toBeCalled();
  });

  it('call onEditCard when click icon view button', () => {
    setup();

    const cardItem = screen.getByTestId('ProductCard_CardActionArea');

    fireEvent.mouseEnter(cardItem);

    fireEvent.click(screen.getByTestId('ProductCard_IconButton_view'));

    expect(defaultProp.onViewCard).toBeCalled();
  });
});
