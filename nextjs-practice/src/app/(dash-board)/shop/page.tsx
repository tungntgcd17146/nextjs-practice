import React, { Suspense } from 'react';

//components
import ProductsWrapper from '@/src/components/layouts/Shop/ShopContent/Products/ProductsWrapper';
import LoadingProgress from '@/src/components/ui/LoadingProgress';

//services
import { PRODUCTS_PER_PAGE } from '@/src/constants/common';
import { ProductQueryParams } from '@/src/types/product';
import { convertArrayToQueryObject } from '@/src/utils/convert';

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

  return (
    <Suspense fallback={<LoadingProgress />}>
      <ProductsWrapper queryParams={queryParams} />
    </Suspense>
  );
}
