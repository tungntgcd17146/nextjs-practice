'use server';

//next-auth
import { signIn, signOut } from '@/src/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { USER_AUTHENTICATION_URL } from '@/src/constants/url';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signup(newUser: { email: string; password: string }) {
  const { email, password } = newUser;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${USER_AUTHENTICATION_URL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: uuidv4(),
          name: email,
          email: email,
          password: hashedPassword,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

export async function logout() {
  await signOut();
}

export async function googleSignin() {
  await signIn('google');
}
