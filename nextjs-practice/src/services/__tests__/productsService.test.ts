import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  fetchProducts,
  fetchProductById,
  fetchProductOverview,
  fetchProductFeature,
} from '../productsService';

const mockFetch = vi.fn();

global.fetch = mockFetch;

const mockProducts = [
  { id: '1', name: 'Product 1', description: 'Description 1' },
  { id: '2', name: 'Product 2', description: 'Description 2' },
];

const mockProduct = {
  id: '1',
  name: 'Product 1',
  description: 'Description 1',
};

const mockFeatureProducts = [
  { id: '1', name: 'Feature Product 1', feature: 'Feature 1' },
  { id: '2', name: 'Feature Product 2', feature: 'Feature 2' },
];

describe('Product API', () => {
  afterEach(() => {
    mockFetch.mockClear();
  });

  it('should fetch products successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
      headers: {
        get: (header: string) => (header === 'x-total-count' ? '2' : null),
      },
    });

    const result = await fetchProducts();

    expect(result.data).toEqual(mockProducts);
    expect(result.countItems).toBe(2);
  });

  it('should fetch product by ID successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
      headers: {
        get: () => null,
      },
    });

    const result = await fetchProductById('1');

    expect(result.data).toEqual(mockProduct);
    expect(result.countItems).toBe(0);
  });

  it('should fetch product overview successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockFeatureProducts,
      headers: {
        get: (header: string) => (header === 'x-total-count' ? '2' : null),
      },
    });

    const result = await fetchProductOverview();

    expect(result.data).toEqual(mockFeatureProducts);
    expect(result.countItems).toBe(2);
  });

  it('should fetch product feature successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockFeatureProducts,
      headers: {
        get: (header: string) => (header === 'x-total-count' ? '2' : null),
      },
    });

    const result = await fetchProductFeature();

    expect(result.data).toEqual(mockFeatureProducts);
    expect(result.countItems).toBe(2);
  });

  it('should handle fetch errors', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Internal Server Error',
    });

    await expect(fetchProducts()).rejects.toThrow('Error fetching data from');
  });

  it('should handle network errors', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchProducts()).rejects.toThrow('Network Error');
  });
});
