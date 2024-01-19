import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import { hashPassword } from '@/app/libs/hashPassword';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Wrong method!' });
  }
  const { name, email } = await req.json();

  //console.log(typeof email);

  const defaultPassword = process.env.TECHNIK_USER_DEFAULT_PASSWORD;

  let hashedPassword = '';

  if (defaultPassword) hashedPassword = await hashPassword(defaultPassword);

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (existingUser)
      return new NextResponse(JSON.stringify({ error: 'Conflict' }), {
        status: 500,
      });

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
