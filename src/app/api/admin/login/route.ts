import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { checkCredentials, makeSessionToken, SESSION_COOKIE } from '@/lib/auth';

export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (!checkCredentials(username, password)) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  const token = makeSessionToken(username);
  const c = await cookies();
  c.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
  return NextResponse.json({ ok: true });
}
