import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from '@/app/libs/prismadb';
import { hashPassword } from '@/app/libs/hashPassword';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findFirst({
          where: { email: credentials?.email },
        });

        let hashedPassword = '';

        if (credentials?.password)
          hashedPassword = await hashPassword(credentials?.password);

        if (!user || user.hashedPassword !== credentials?.password) {
          throw new Error('Invalid email or password');
        }

        return user;
      },
    }),
  ],
});
