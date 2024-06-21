import React, { Suspense } from "react";

//components
import Products from "@/src/components/layouts/Shop/ShopContent/Products";
import LoadingProgress from "@/src/components/ui/LoadingProgress";

//services
import { fetchProducts } from "@/src/services/productsService";
import { PRODUCTS_PER_PAGE } from "@/src/constants/common";
//import { ProductQueryParams } from "@/src/types/product";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  // const queryParams: ProductQueryParams = {
  //   _page: currentPage,
  //   _limit: PRODUCTS_PER_PAGE,
  // };

  const fetchAllProducts = async (
    currentPage: number,
    productPerPage: number,
  ) => {
    const pageNumbers = Array.from({ length: currentPage }, (_, i) => i + 1);

    const allProductsPromises = pageNumbers.map((pageNumber) =>
      fetchProducts({
        _page: pageNumber,
        _limit: productPerPage,
      }),
    );

    const allProductsResults = await Promise.all(allProductsPromises);

    const initialItems = allProductsResults.flatMap((result) => result.data);

    // Assuming all pages will have the same totalCount value in the response headers
    const totalCount =
      allProductsResults.length > 0 ? allProductsResults[0].countItems : 0;

    return { initialItems, totalCount };
  };

  const { initialItems, totalCount } = await fetchAllProducts(
    currentPage,
    PRODUCTS_PER_PAGE,
  );

  return (
    <Suspense fallback={<LoadingProgress />}>
      <Products
        products={initialItems}
        totalCount={totalCount}
        initPage={currentPage}
      />
    </Suspense>
  );
}
