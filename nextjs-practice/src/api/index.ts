import { BASE_URL } from "@/src/constants/environment";

export const get = async <T>(
  path: string,
  queyParams?: object,
  configOptions?: RequestInit,
): Promise<T> => {
  const params = new URLSearchParams({ ...queyParams });

  const response = await fetch(`${BASE_URL}${path}?${params}`, configOptions);

  if (!response.ok) {
    throw new Error(`Error fetching data from ${BASE_URL}${path}`);
  }

  const data = await response.json();

  return data as T;
};
