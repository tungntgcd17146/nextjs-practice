import { PRODUCT_URL } from "@/src/constants/url";
import { get } from "../api";
import { Product, ProductQueryParams } from "@/src/types/product";

export const fetchProducts = async (queryParams?: ProductQueryParams) => {
  return await get<Product[]>(PRODUCT_URL, queryParams);
};

export const fetchProductById = async (id: number) => {
  return await get<Product>(`${PRODUCT_URL}/${id}`);
};
