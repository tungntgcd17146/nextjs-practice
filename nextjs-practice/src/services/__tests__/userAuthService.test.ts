import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchUserByEmail } from '../userAuthService';
import { UserAuthentication, UserQueryParams } from '@/src/types/user';

const mockFetch = vi.fn();

global.fetch = mockFetch;

const mockUsers: UserAuthentication[] = [
  { email: 'user1@example.com', password: 'hashedpassword1' },
  { email: 'user2@example.com', password: 'hashedpassword2' },
];

describe('User Auth API', () => {
  afterEach(() => {
    mockFetch.mockClear();
  });

  it('should fetch users by email successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
      headers: {
        get: (header: string) => (header === 'x-total-count' ? '2' : null),
      },
    });

    const queryParams: UserQueryParams = { email: 'user1@example.com' };
    const result = await fetchUserByEmail(queryParams);

    expect(result.data).toEqual(mockUsers);
    expect(result.countItems).toBe(2);
  });

  it('should handle fetch errors', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Internal Server Error',
    });

    await expect(fetchUserByEmail()).rejects.toThrow(
      'Error fetching data from',
    );
  });

  it('should handle network errors', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchUserByEmail()).rejects.toThrow('Network Error');
  });
});
