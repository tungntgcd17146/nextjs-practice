import React from 'react';

//components
import Products from '@/src/components/layouts/Shop/ShopContent/Products';

//services
import { PRODUCTS_PER_PAGE } from '@/src/constants/common';
import { fetchProducts } from '@/src/services/productsService';

import { ProductQueryParams } from '@/src/types/product';
import { convertArrayToQueryObject } from '@/src/utils/convert';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Shop page, built using App Router.',
  keywords: ['Shop', 'products', 'technical'],
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    query?: string;
    sortBy?: string;
    categories?: string;
    minPriceRange?: string;
    maxPriceRange?: string;
    rating?: string;
    popularity?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query;
  const sortBy = searchParams?.sortBy;

  // Decode and parse categories from query params
  const categoriesString = searchParams?.categories;
  const decodedCategories = categoriesString
    ? decodeURIComponent(categoriesString)
    : '';
  const categories = decodedCategories ? decodedCategories.split(',') : [];

  const minPriceRange = searchParams?.minPriceRange;
  const maxPriceRange = searchParams?.maxPriceRange;
  const rating = searchParams?.rating;
  const popularity = searchParams?.popularity;

  const queryParams: ProductQueryParams = {
    _page: currentPage,
    _limit: PRODUCTS_PER_PAGE,
    ...(query && { q: query }),
    _order: sortBy === 'New' ? 'desc' : 'asc',
    _sort: 'createdAt', // Sorting by createdAt property from API
    ...(maxPriceRange && { productPrice_lte: maxPriceRange }),
    ...(minPriceRange && { productPrice_gte: minPriceRange }),
    ...(rating && { productRating_gte: rating }),
    ...(popularity && { popularity }),

    // Convert categories array to query object format
    ...convertArrayToQueryObject(categories),
  };

  const fetchAllProducts = async (queryParams: ProductQueryParams) => {
    const pageNumbers = Array.from(
      { length: queryParams._page },
      (_, i) => i + 1,
    );

    const allProductsPromises = pageNumbers.map((item) =>
      fetchProducts({
        ...queryParams,
        _page: item,
      }),
    );

    const allProductsResults = await Promise.all(allProductsPromises);

    const initialItems = allProductsResults.flatMap((result) => result.data);

    // All pages will have the same totalCount value in the response headers
    // Get the first item in the array to get the totalCount
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
}
