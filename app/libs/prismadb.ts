import { PrismaClient } from '@prisma/client';

const PrismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof PrismaClientSingleton>;
}

const prisma = globalThis.prisma ?? PrismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

// declare global {
//   var prisma: PrismaClient | undefined
// }

// const client = globalThis.prisma || new PrismaClient()
// if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

// export default client
