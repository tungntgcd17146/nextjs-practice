import { describe, it, expect, vi } from 'vitest';
import { fetchContacts } from '../contactsService';

const mockContacts = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('fetchContacts', () => {
  it('should fetch contacts successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockContacts,
      headers: {
        get: (header: string) => (header === 'x-total-count' ? '2' : null),
      },
    });

    const result = await fetchContacts();

    expect(result.data).toEqual(mockContacts);
    expect(result.countItems).toBe(2);
  });

  it('should handle fetch errors', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Internal Server Error',
    });

    await expect(fetchContacts()).rejects.toThrow('Error fetching data from');
  });

  it('should handle network errors', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchContacts()).rejects.toThrow('Network Error');
  });
});
