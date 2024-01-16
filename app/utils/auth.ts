import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/app/libs/prismadb';
import bcrypt from 'bcrypt';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'jsmith@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findFirst({
          where: { email: credentials?.email },
        });

        let isCorrectPassword: boolean = false;

        if (user && credentials?.password) {
          isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword,
          );
        }

        if (isCorrectPassword) {
          return user;
        } else throw new Error('Invalid email or password');
      },
    }),
  ],
} satisfies NextAuthOptions;
