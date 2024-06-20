import { BASE_URL } from "@/src/constants/environment";

export const get = async <T>(
  path: string,
  queyParams?: object,
  configOptions?: RequestInit,
): Promise<{ data: T; countItems: number }> => {
  const params = new URLSearchParams({ ...queyParams });

  const response = await fetch(`${BASE_URL}${path}?${params}`, configOptions);

  if (!response.ok) {
    throw new Error(`Error fetching data from ${BASE_URL}${path}`);
  }

  const data = await response.json();

  const countItems = Number(response.headers.get("x-total-count"));

  return { data: data as T, countItems };
};
