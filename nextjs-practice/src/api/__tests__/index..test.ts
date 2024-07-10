/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { get } from '../index';

describe('API get function', () => {
  const mockApiUrl = 'https://mockapi.com';

  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal('fetch', vi.fn());
    process.env.NEXT_PUBLIC_API_URL = mockApiUrl;
  });

  it('should fetch data successfully', async () => {
    const mockResponse = { data: { name: 'test' }, countItems: 1 };

    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse.data,
      headers: {
        get: vi.fn().mockReturnValueOnce('1'),
      },
    });

    const result = await get<{ name: string }>('/test-path');

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/test-path?`, undefined);
  });

  it('should handle query parameters', async () => {
    const mockResponse = { data: { name: 'test' }, countItems: 1 };
    const queryParams = { search: 'test' };

    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse.data,
      headers: {
        get: vi.fn().mockReturnValueOnce('1'),
      },
    });

    const result = await get<{ name: string }>('/test-path', queryParams);

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      `${mockApiUrl}/test-path?search=test`,
      undefined,
    );
  });

  it('should handle config options', async () => {
    const mockResponse = { data: { name: 'test' }, countItems: 1 };
    const configOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse.data,
      headers: {
        get: vi.fn().mockReturnValueOnce('1'),
      },
    });

    const result = await get<{ name: string }>(
      '/test-path',
      undefined,
      configOptions,
    );

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      `${mockApiUrl}/test-path?`,
      configOptions,
    );
  });

  it('should throw an error if fetch fails', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: false,
    });

    await expect(get('/test-path')).rejects.toThrow(
      `Error fetching data from ${mockApiUrl}/test-path`,
    );

    expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}/test-path?`, undefined);
  });
});
