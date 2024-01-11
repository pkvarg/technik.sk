import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
  if (req.method !== 'PUT') {
    return NextResponse.json({ message: 'Wrong method!' });
  }
  const { email } = await req.json();

  try {
    console.log(email, process.env.DATABASE_URL);
    const sub = await prisma.subscriber.create({
      data: {
        email,
      },
    });

    return NextResponse.json('ok');
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
