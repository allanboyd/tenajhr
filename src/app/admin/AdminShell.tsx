'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './admin.module.css';

const NAV = [
  { href: '/admin', label: 'Overview' },
  { href: '/admin/blog', label: 'Blog Posts' },
  { href: '/admin/services', label: 'Services' },
  { href: '/admin/philosophy', label: 'Philosophy' },
  { href: '/admin/impact', label: 'Impact' },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>Janet <em>Mathenge</em></div>
        <div className={styles.brandSub}>CMS · Admin</div>
        {NAV.map((item) => {
          const active = path === item.href || (item.href !== '/admin' && path.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
            >
              {item.label}
            </Link>
          );
        })}
        <div className={styles.sidebarFoot}>
          <div>Signed in</div>
          <button className={styles.logout} onClick={logout}>Sign out</button>
        </div>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
