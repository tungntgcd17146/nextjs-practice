/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Contacts, {
  Props,
} from '@/src/components/layouts/Shop/ShopContent/Contacts';
import useScreenWidth from '@/src/hooks/useScreenWidth';

const mockRouter = {
  push: vi.fn(),
};
vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
}));

// Mock useScreenWidth
vi.mock('@/src/hooks/useScreenWidth', () => ({
  __esModule: true,
  default: vi.fn(),
}));

const mockContactItem = [
  {
    id: '1',
    userName: 'John Doe',
    productNumber: '123',
    followerNumber: '456',
    contactStatus: 'following',
  },
  {
    id: '2',
    userName: 'Jane Smith',
    productNumber: '789',
    followerNumber: '123',
    contactStatus: 'following',
  },
];

const defaultProp: Props = {
  contacts: mockContactItem as any,
};
const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };
  return render(<Contacts {...props} />);
};

describe('Contacts', () => {
  beforeEach(() => {
    (useScreenWidth as any).mockReturnValue({ matchedBreakpoint: true });
  });

  it('renders PageNotFound when no ContactItem are provided', () => {
    (useScreenWidth as any).mockReturnValue({ matchedBreakpoint: false });
    setup({
      contacts: undefined,
    });

    expect(screen.getByText('No item found')).toBeInTheDocument();
  });

  it('renders ContactItem components when ContactItem are provided', () => {
    setup();

    expect(screen.getAllByTestId('ContactItem').length).toEqual(
      mockContactItem.length,
    );
  });
});
