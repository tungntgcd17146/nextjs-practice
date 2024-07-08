import { describe, it, expect } from 'vitest';
import { signInSchema } from '../validation';

describe('signInSchema', () => {
  it('should validate a correct email and password', () => {
    const result = signInSchema.safeParse({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(result.success).toBe(true);
  });

  it('should fail validation if email is missing', () => {
    const result = signInSchema.safeParse({
      password: 'password123',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Email is required');
    }
  });

  it('should fail validation if email is invalid', () => {
    const result = signInSchema.safeParse({
      email: 'invalid-email',
      password: 'password123',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Invalid email');
    }
  });

  it('should fail validation if password is missing', () => {
    const result = signInSchema.safeParse({
      email: 'test@example.com',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Password is required');
    }
  });

  it('should fail validation if password is too short', () => {
    const result = signInSchema.safeParse({
      email: 'test@example.com',
      password: 'short',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        'Password must be more than 8 characters',
      );
    }
  });

  it('should fail validation if password is too long', () => {
    const result = signInSchema.safeParse({
      email: 'test@example.com',
      password: 'a'.repeat(33), // 33 characters long
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        'Password must be less than 32 characters',
      );
    }
  });
});
