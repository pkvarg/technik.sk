import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/app/libs/prismadb';
import bcrypt from 'bcrypt';

// import NextAuth from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   providers: [
//     Credentials({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       authorize: async (credentials) => {
//         const user = await prisma.user.findFirst({
//           where: { email: credentials?.email },
//         });

//         let hashedPassword = '';

//         if (credentials?.password)
//           hashedPassword = await hashPassword(credentials?.password);

//         if (!user || user.hashedPassword !== credentials?.password) {
//           throw new Error('Invalid email or password');
//         }

//         return user;
//       },
//     }),
//   ],
// });

export const authOptions = {
  //adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log('crd', credentials);
        const user = await prisma.user.findFirst({
          where: { email: credentials?.email },
        });

        let isCorrectPassword: boolean = false;

        if (user && credentials?.password) {
          isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword,
          );

          console.log(isCorrectPassword);
        }

        if (isCorrectPassword) {
          return user;
        } else throw new Error('Invalid email or password');
      },
    }),
  ],
} satisfies NextAuthOptions;
