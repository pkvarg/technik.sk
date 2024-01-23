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
  let hashedPassword = '';

  if (password) {
    hashedPassword = await hashPassword(password);
    try {
      console.log('edit bck');
      const user = await prisma.user.update({
        where: {
          email: email,
        },

        data: {
          name,
          hashedPassword,
          isAdmin,
        },
      });

      return NextResponse.json(user);
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error });
    }
  } else {
    try {
      const user = await prisma.user.update({
        where: {
          email: email,
        },

        data: {
          name,
          isAdmin,
        },
      });

      return NextResponse.json(user);
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error });
    }
  }
}

export async function DELETE(req: Request, context: any) {
  if (req.method !== 'DELETE') {
    return NextResponse.json({ message: 'Wrong method!' });
  }

  const { params } = context;
  const { email } = params;

  try {
    console.log('DELETE', email);
    const user = await prisma.user.delete({
      where: {
        email: email,
      },
    });

    return NextResponse.json('USER DELETED');
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
