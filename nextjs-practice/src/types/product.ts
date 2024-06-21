import { CommonQueryParams } from '@/src/types/common';

export interface Product {
  id: number;
  productName: string;
  productCategory: string;
  productPrice: number;
  productRating: number;
  productRatingCount: number;
  popularity: string;
}

export interface FeatureProduct {
  text: string;
}

export interface ProductQueryParams extends CommonQueryParams {
  productPrice_gte?: string;
  productPrice_lte?: string;
  productCategory?: string[];
  productRating_gte?: string;
  popularity?: string;
}

export interface FilterValue {
  query: string;
  sortBy: string;
  categories: string[];
  minPriceRange: number;
  maxPriceRange: number;
  rating: string;
}
