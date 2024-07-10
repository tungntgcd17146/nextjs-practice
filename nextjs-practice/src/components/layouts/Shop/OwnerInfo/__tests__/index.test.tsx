/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@/src/utils/testUtils';
import { describe, expect, it, vi } from 'vitest';
import OwnerInfo from '../';
import * as useScreenWidth from '@/src/hooks/useScreenWidth';
import Customer1 from '@/public/assets/customer1.webp';

const defaultProp = {
  name: 'Chelsie Haley',
  description: 'Dream big. Think different.Do great!',
  avatar: Customer1,
  onClickFollow: vi.fn(),
};

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(<OwnerInfo {...props} />);
};

describe('OwnerInfo Test', () => {
  it('render OwnerInfo correctly', () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      matchedBreakpoint: false,
    } as any);
    setup();

    expect(screen.getByText('Chelsie Haley')).toBeTruthy();
    expect(
      screen.getByText('Dream big. Think different.Do great!'),
    ).toBeTruthy();
  });

  it('render follow button with disable correctly', async () => {
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      matchedBreakpoint: true,
    } as any);
    setup();

    expect(
      screen
        .getByTestId('OwnerInfo_Follow_Button')
        .getAttributeNode('disabled'),
    ).toBeTruthy();
  });
});
