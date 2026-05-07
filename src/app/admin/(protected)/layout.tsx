import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import AdminShell from '../AdminShell';

export const dynamic = 'force-dynamic';

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getSession();
  if (!user) redirect('/admin/login');
  return <AdminShell>{children}</AdminShell>;
}
