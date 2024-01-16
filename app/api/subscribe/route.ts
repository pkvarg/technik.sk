import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
  const { email } = await req.json();

  console.log('meth', req.method);

  if (req.method !== 'PUT') {
    return NextResponse.json({ message: 'Wrong method!' });
  }
  try {
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

export async function GET(req: Request) {
  if (req.method === 'GET') {
    try {
      const subcribers = await prisma.subscriber.findMany();
      return NextResponse.json(subcribers);
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error });
    }
  }
}
