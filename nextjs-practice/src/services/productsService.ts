import { getProducts, getProductById } from '../api/products';

export const fetchProducts = async () => {
  return await getProducts();
};

export const fetchProductById = async (id: string) => {
  return await getProductById(id);
};
