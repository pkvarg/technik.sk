import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  if (req.method !== 'GET') {
    return NextResponse.json({ message: 'Wrong method!' });
  }
  console.log('here get all');
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
