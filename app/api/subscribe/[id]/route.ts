import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request, context: any) {
  if (req.method !== 'DELETE') {
    return NextResponse.json({ message: 'Wrong method!' });
  }

  const { params } = context;
  const { id } = params;

  try {
    console.log('DELETE', id);
    const sub = await prisma.subscriber.delete({
      where: {
        id,
      },
    });

    return NextResponse.json('SUBSCRIBER DELETED');
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
