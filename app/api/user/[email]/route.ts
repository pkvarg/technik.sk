import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(req: Request, context: any) {
  if (req.method !== 'GET') {
    return NextResponse.json({ message: 'Wrong method!' });
  }

  const { params } = context;
  const { email } = params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
