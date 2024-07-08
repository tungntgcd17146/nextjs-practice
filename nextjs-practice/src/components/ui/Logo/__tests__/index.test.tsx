import { render, screen, describe, expect, it } from '@/src/utils/testUtils';
import Logo, { Props } from '..';

const defaultProp = {
  logoImage: '/logo.png',
  alt: 'logo.png',
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<Logo {...props} />);
};

describe('Logo Test', () => {
  it('render Logo correctly', () => {
    setup();

    expect(screen.getByTestId('Logo')).toBeTruthy();
  });
});
