import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import styles from '../admin.module.css';

export const dynamic = 'force-dynamic';

export default async function AdminOverview() {
  const [posts, services, philosophy, impact] = await Promise.all([
    prisma.blogPost.count(),
    prisma.service.count(),
    prisma.philosophyItem.count(),
    prisma.impactItem.count(),
  ]);

  const stats = [
    { val: posts, label: 'Blog posts', href: '/admin/blog' },
    { val: services, label: 'Services', href: '/admin/services' },
    { val: philosophy, label: 'Philosophy', href: '/admin/philosophy' },
    { val: impact, label: 'Impact items', href: '/admin/impact' },
  ];

  return (
    <>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>
            Manage <span className={styles.titleEm}>your platform</span>
          </div>
          <div className={styles.subtitle}>Update content that appears on the public site.</div>
        </div>
        <Link href="/" className={`${styles.btn} ${styles.btnGhost}`}>View site →</Link>
      </div>

      <div className={styles.statGrid}>
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className={styles.stat}>
            <div className={styles.statVal}>{s.val}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </Link>
        ))}
      </div>

      <div className={styles.card}>
        <div className={styles.title} style={{ fontSize: 24, marginBottom: 6 }}>
          Quick actions
        </div>
        <div className={styles.subtitle} style={{ marginBottom: 18 }}>
          Jump straight into the most common edits.
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link href="/admin/blog/new" className={`${styles.btn} ${styles.btnPrimary}`}>+ New blog post</Link>
          <Link href="/admin/services" className={`${styles.btn} ${styles.btnGhost}`}>Edit services</Link>
          <Link href="/admin/philosophy" className={`${styles.btn} ${styles.btnGhost}`}>Edit philosophy</Link>
          <Link href="/admin/impact" className={`${styles.btn} ${styles.btnGhost}`}>Edit impact</Link>
        </div>
      </div>
    </>
  );
}
