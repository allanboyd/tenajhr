import { cookies } from 'next/headers';
import crypto from 'crypto';

const COOKIE_NAME = 'janet_admin_session';
const SECRET = process.env.AUTH_SECRET || 'dev-secret-change-me';

function sign(value: string) {
  return crypto.createHmac('sha256', SECRET).update(value).digest('hex');
}

export function makeSessionToken(username: string) {
  const payload = `${username}.${Date.now()}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined): string | null {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [user, ts, sig] = parts;
  if (sign(`${user}.${ts}`) !== sig) return null;
  return user;
}

export async function getSession() {
  const c = await cookies();
  const t = c.get(COOKIE_NAME)?.value;
  return verifySessionToken(t);
}

export async function requireSession() {
  const user = await getSession();
  if (!user) throw new Error('UNAUTHORIZED');
  return user;
}

export const SESSION_COOKIE = COOKIE_NAME;

export function checkCredentials(username: string, password: string) {
  const u = process.env.ADMIN_USERNAME || 'admin';
  const p = process.env.ADMIN_PASSWORD || 'admin';
  return username === u && password === p;
}
