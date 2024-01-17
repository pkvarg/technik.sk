import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import { hashPassword } from '@/app/libs/hashPassword';

export async function PUT(req: Request) {
  if (req.method !== 'PUT') {
    return NextResponse.json({ message: 'Wrong method!' });
  }
  const { name, email } = await req.json();

  //console.log(typeof email);

  const defaultPassword = process.env.TECHNIK_USER_DEFAULT_PASSWORD;

  let hashedPassword = '';

  if (defaultPassword) hashedPassword = await hashPassword(defaultPassword);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json('ok');
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}

export async function GET(req: Request) {
  if (req.method !== 'GET') {
    return NextResponse.json({ message: 'Wrong method!' });
  }

  console.log('get here');

  const { email } = await req.json();

  console.log(email);

  try {
    console.log('try');
    // const user = await prisma.user.findUnique({
    //   where: {
    //     email,
    //   },
    //});

    return NextResponse.json('ok');
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
