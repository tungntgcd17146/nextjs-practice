import { render, screen, describe, expect, it } from '@/src/utils/testUtils';
import Rating, { Props } from '..';

const defaultProp = {
  ratingPoint: 5,
  counter: 5,
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<Rating {...props} />);
};

describe('Rating Test', () => {
  it('render Rating correctly', () => {
    setup();

    expect(screen.getByTestId('Rating_StarIcon')).toBeTruthy();
    expect(screen.getByText('5')).toBeTruthy();
    expect(screen.getByText('(5)')).toBeTruthy();
  });

  it('render Rating is empty correctly', () => {
    setup({
      ratingPoint: 0,
      counter: 0,
    });

    expect(screen.getByTestId('Rating_StarIcon_No_Rating')).toBeTruthy();
    expect(screen.getByText('No ratings')).toBeTruthy();
  });
});
