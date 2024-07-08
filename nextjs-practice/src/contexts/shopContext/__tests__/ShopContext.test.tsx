import React from 'react';
import { describe, expect, it, render, screen } from '../../../utils/testUtils';
import { ShopProvider } from '../ShopContext';
import { useShopContext } from '@/src/contexts/shopContext/useShopContext';

describe('ShopProvider', () => {
  it('should render children and provide context values', () => {
    render(
      <ShopProvider>
        <TestComponent />
      </ShopProvider>,
    );

    // Verify that the children render correctly
    expect(screen.getByTestId('showing-products')).toBeInTheDocument();
    expect(screen.getByTestId('total-products')).toBeInTheDocument();

    // Verify initial context values
    expect(screen.getByTestId('showing-products')).toHaveTextContent('0');
    expect(screen.getByTestId('total-products')).toHaveTextContent('0');
  });
});

const TestComponent = () => {
  const { showingProducts, setShowingProducts, totalProducts } =
    useShopContext()!;

  const handleIncrementShowingProducts = () => {
    setShowingProducts(showingProducts + 1);
  };

  return (
    <div>
      <p data-testid="showing-products">{showingProducts}</p>
      <p data-testid="total-products">{totalProducts}</p>
      <button
        data-testid="increment-showing-products"
        onClick={handleIncrementShowingProducts}
      >
        Increment Showing Products
      </button>
    </div>
  );
};
