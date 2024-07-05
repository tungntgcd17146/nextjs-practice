import { render, screen, describe, expect, it } from '@/src/utils/testUtils';
import CartSkeleton from '..';

const defaultProp = {};

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<CartSkeleton {...props} />);
};

describe('Button Test', () => {
  it('renders the skeleton elements correctly', () => {
    setup();

    const skeletons = screen.getByTestId('CardSkeleton');

    expect(skeletons).toBeTruthy();
  });
});
