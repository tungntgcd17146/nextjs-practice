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
  productPrice_gte?: number;
  productPrice_lte?: number;
  productCategory?: string[];
}
