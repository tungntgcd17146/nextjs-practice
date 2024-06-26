import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
//import Resend from "next-auth/providers/resend";
import bcrypt from "bcrypt";
import { fetchUserByEmail } from "@/src/services/userAuthService";
import { signInSchema } from "@/src/lib/validation";

const credentialsProvider = Credentials({
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

// const resendProvider = Resend({
//   async sendVerificationRequest(email, url, token) {
//     // Generate a 4-digit verification code
//     const verificationCode = Math.floor(1000 + Math.random() * 9000);
//     // Email content
//     const mailOptions = {
//       from: process.env.EMAIL_FROM,
//       to: email,
//       subject: 'Verification Code',
//       text: `Your verification code is: ${verificationCode}`,
//     };
//     // Return the verification code as the token for verification
//     return { token: verificationCode.toString() };
//   },
// });

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [credentialsProvider],
});
