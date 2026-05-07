import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET() {
  if (!(await getSession())) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  return NextResponse.json(await prisma.service.findMany({ orderBy: { order: 'asc' } }));
}

export async function POST(req: Request) {
  if (!(await getSession())) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  const body = await req.json();
  return NextResponse.json(await prisma.service.create({ data: body }));
}
