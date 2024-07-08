/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react';
import ContentHeader from '@/src/components/layouts/Shop/ContentHeader';
import { useShopContext } from '@/src/contexts/shopContext/useShopContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// Mock hooks and context
vi.mock('@/src/contexts/shopContext/useShopContext');
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

const mockUseShopContext = useShopContext as any;
const mockUsePathname = usePathname as any;
const mockUseRouter = useRouter as any;
const mockUseSearchParams = useSearchParams as any;

const setup = () => {
  return render(<ContentHeader />);
};

describe('ContentHeader', () => {
  beforeEach(() => {
    mockUseShopContext.mockReturnValue({
      totalProducts: 100,
      showingProducts: 10,
    });
    mockUsePathname.mockReturnValue('/shop');
    mockUseRouter.mockReturnValue({ push: vi.fn() });
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
  });

  it('renders tabs and select component correctly', () => {
    setup();

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders tabs and without select filter when in follower tab correctly', () => {
    mockUsePathname.mockReturnValue('/shop/followers');
    setup();

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.queryAllByRole('combobox')).toEqual([]);
  });

  it('renders tabs and without select filter when in following tab correctly', () => {
    mockUsePathname.mockReturnValue('/shop/following');
    setup();

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.queryAllByRole('combobox')).toEqual([]);
  });

  it('handles filter icon button click correctly', async () => {
    setup();

    const filterButton = screen.getByTestId('ProductFilter_IconButton');
    expect(filterButton).toBeInTheDocument();

    fireEvent.click(filterButton);

    await waitFor(() => {
      // Verify that the ProductFilter component is rendered after clicking the button
      expect(screen.getByTestId('ProductFilter_Popover')).toBeInTheDocument();
    });
  });

  it('handles submit filter modal correctly', async () => {
    setup();

    const filterButton = screen.getByTestId('ProductFilter_IconButton');
    expect(filterButton).toBeInTheDocument();

    fireEvent.click(filterButton);

    await waitFor(() => {
      // Verify that the ProductFilter component is rendered after clicking the button
      expect(screen.getByTestId('ProductFilter_Popover')).toBeInTheDocument();
    });
  });

  it('filter products category when selected checkbox filter product modal correctly', async () => {
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams({ popularity: 'Most recent' }),
    );
    setup();

    const filterButton = screen.getByTestId('ProductFilter_IconButton');
    expect(filterButton).toBeInTheDocument();

    fireEvent.click(filterButton);

    await waitFor(() => {
      // Verify that the ProductFilter component is rendered after clicking the button
      expect(screen.getByTestId('ProductFilter_Popover')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('UI Kit'));

    fireEvent.click(screen.getByText('Apply'));

    //hidden filter modal
    await waitFor(() =>
      expect(screen.queryByTestId('ProductFilter_Popover')).toBeFalsy(),
    );
  });

  it('handles reset filter modal correctly', async () => {
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams({ popularity: 'Most recent' }),
    );
    setup();

    const filterButton = screen.getByTestId('ProductFilter_IconButton');
    expect(filterButton).toBeInTheDocument();

    fireEvent.click(filterButton);

    await waitFor(() => {
      // Verify that the ProductFilter component is rendered after clicking the button
      expect(screen.getByTestId('ProductFilter_Popover')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('UI Kit'));

    fireEvent.click(screen.getByText('Reset'));

    // reset button change to close button
    await waitFor(() => {
      expect(screen.getByText('Close')).toBeTruthy();
    });
  });

  it('updates URL when selecting a filter option', async () => {
    const mockPush = vi.fn();
    mockUseRouter.mockReturnValue({ push: mockPush });

    setup();

    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/Most recent/i));

    await waitFor(() => {
      // Verify that the URL is updated correctly
      expect(mockPush).toHaveBeenCalledWith(
        expect.stringContaining('/shop?popularity=Most+recent'),
      );
    });
  });
});
