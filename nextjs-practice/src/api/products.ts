import { BASE_URL } from "@/src/constants/environment";
import { Product } from "@/src/types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Error fetching products");
  }
  return response.json();
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Error fetching product with id ${id}`);
  }

  return response.json();
};
