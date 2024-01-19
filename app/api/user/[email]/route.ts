import { hashPassword } from '@/app/libs/hashPassword';
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

export async function PUT(req: Request, context: any) {
  if (req.method !== 'PUT') {
    return NextResponse.json({ message: 'Wrong method!' });
  }

  const { params } = context;
  const { email } = params;
  const { name, password, isAdmin } = await req.json();

  console.log('body', name, password, isAdmin);

  try {
    console.log('edit bck');
    const user = await prisma.user.update({
      where: {
        email: email,
      },

      data: {},
    });

    return NextResponse.json('OK');
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
