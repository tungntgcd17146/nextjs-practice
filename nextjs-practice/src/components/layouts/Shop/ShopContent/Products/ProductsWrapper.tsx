//components
import Products from '@/src/components/layouts/Shop/ShopContent/Products';

import { fetchProducts } from '@/src/services/productsService';
import { ProductQueryParams } from '@/src/types/product';

export interface ProductsWrapperProps {
  queryParams: ProductQueryParams;
}

const ProductsWrapper = async ({ queryParams }: ProductsWrapperProps) => {
  const fetchAllProducts = async (queryParams: ProductQueryParams) => {
    const pageNumbers = Array.from(
      { length: queryParams._page },
      (_, i) => i + 1,
    );

    const allProductsPromises = pageNumbers.map(() =>
      fetchProducts(queryParams),
    );

    const allProductsResults = await Promise.all(allProductsPromises);

    const initialItems = allProductsResults.flatMap((result) => result.data);

    // Assuming all pages will have the same totalCount value in the response headers
    const totalCount =
      allProductsResults.length > 0 ? allProductsResults[0].countItems : 0;

    return { initialItems, totalCount };
  };

  const { initialItems, totalCount } = await fetchAllProducts(queryParams);

  return (
    <Products
      products={initialItems}
      totalCount={totalCount}
      queryParams={queryParams}
    />
  );
};

export default ProductsWrapper;
