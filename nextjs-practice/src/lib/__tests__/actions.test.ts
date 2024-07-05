/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it, beforeEach } from '@/src/utils/testUtils';
import { vi } from 'vitest';
import { authenticate, signup, logout, googleSignin } from '../actions';
import { signIn, signOut } from '@/src/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import * as authModule from '@/src/auth';

vi.mock('bcrypt');
vi.mock('node-fetch');

describe('Server Auth Utils', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('authenticate', () => {
    it('should call signIn with credentials provider', async () => {
      const formData = new FormData();
      formData.append('email', 'test@example.com');
      formData.append('password', 'password123');

      const mockSignIn = (
        vi.spyOn(authModule, 'signIn') as any
      ).mockResolvedValueOnce();

      await authenticate(undefined, formData);

      expect(mockSignIn).toHaveBeenCalledWith('credentials', formData);
    });

    it('should handle AuthError and return appropriate messages', async () => {
      const formData = new FormData();
      formData.append('email', 'test@example.com');
      formData.append('password', 'password123');

      const mockAuthError = new AuthError('CredentialsSignin', undefined);

      (vi.spyOn(authModule, 'signIn') as any).mockRejectedValueOnce(
        mockAuthError,
      );

      const result = await authenticate(undefined, formData);

      expect(result).toEqual('Something went wrong.');
    });

    it('should rethrow other errors', async () => {
      const formData = new FormData();
      formData.append('email', 'test@example.com');
      formData.append('password', 'password123');

      const mockError = new Error('Some other error');
      (vi.spyOn(authModule, 'signIn') as any).mockRejectedValueOnce(mockError);

      await expect(authenticate(undefined, formData)).rejects.toThrow(
        mockError,
      );
    });
  });

  describe('signup', () => {
    it('should hash password and send POST request to API', async () => {
      const signupForm = {
        email: 'test@example.com',
        password: 'password123',
      };

      const hashedPassword = '$2b$10$hashedpassword';

      (vi.spyOn(bcrypt, 'hash') as any).mockResolvedValueOnce(hashedPassword);
      (vi.spyOn(global, 'fetch') as any).mockResolvedValueOnce({
        ok: true,
        json: vi.fn().mockResolvedValueOnce({}),
      });

      await signup(signupForm);

      expect(bcrypt.hash).toHaveBeenCalledWith(signupForm.password, 10);
    });
  });

  describe('logout', () => {
    it('should call signOut', async () => {
      (vi.spyOn(authModule, 'signOut') as any).mockResolvedValueOnce();

      await logout();

      expect(signOut).toHaveBeenCalled();
    });
  });

  describe('googleSignin', () => {
    it('should call signIn with google provider', async () => {
      (vi.spyOn(authModule, 'signIn') as any).mockResolvedValueOnce();

      await googleSignin();

      expect(signIn).toHaveBeenCalledWith('google');
    });
  });
});
