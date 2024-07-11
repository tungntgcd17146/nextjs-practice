import { authConfig } from './auth.config';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { fetchUserByEmail } from '@/src/services/userAuthService';
import { signInSchema } from '@/src/lib/validation';
import Google from 'next-auth/providers/google';

const CredentialsProvider = Credentials({
  authorize: async (credentials) => {
    const parsedCredentials = signInSchema.safeParse(credentials);

    if (parsedCredentials.success) {
      const { email, password } = parsedCredentials.data;
      const { data: users } = await fetchUserByEmail({ email });

      const [user] = users;

      if (!user) return null;
      const passwordsMatch = await bcrypt.compare(password, user.password);

      if (passwordsMatch) return user;
    }
    return null;
  },
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  providers: [CredentialsProvider, Google],
});
