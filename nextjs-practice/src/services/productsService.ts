import {
  PRODUCT_URL,
  PRODUCT_OVERVIEW_URL,
  PRODUCT_FEATURE_URL,
} from '@/src/constants/url';
import { get } from '../api';
import {
  FeatureProduct,
  Product,
  ProductQueryParams,
} from '@/src/types/product';

export const fetchProducts = async (queryParams?: ProductQueryParams) => {
  return await get<Product[]>(PRODUCT_URL, queryParams);
};

export const fetchProductById = async (id: string) => {
  return await get<Product>(`${PRODUCT_URL}/${id}`);
};

export const fetchProductOverview = async (
  queryParams?: ProductQueryParams,
) => {
  return await get<FeatureProduct[]>(PRODUCT_OVERVIEW_URL, queryParams, {
    next: {
      revalidate: 60, // 1 minute revalidation
    },
  });
};

export const fetchProductFeature = async (queryParams?: ProductQueryParams) => {
  return await get<FeatureProduct[]>(PRODUCT_FEATURE_URL, queryParams, {
    next: {
      revalidate: 60, // 1 minute revalidation
    },
  });
};
