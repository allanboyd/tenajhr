import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import styles from '../../admin.module.css';
import DeleteRow from './DeleteRow';

export const dynamic = 'force-dynamic';

export default async function BlogList() {
  const posts = await prisma.blogPost.findMany({
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
  });

  return (
    <>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>Blog <span className={styles.titleEm}>posts</span></div>
          <div className={styles.subtitle}>{posts.length} post{posts.length === 1 ? '' : 's'}</div>
        </div>
        <Link href="/admin/blog/new" className={`${styles.btn} ${styles.btnPrimary}`}>+ New post</Link>
      </div>

      {posts.length === 0 ? (
        <div className={styles.card}>
          <div className={styles.empty}>No posts yet. Create your first one.</div>
        </div>
      ) : (
        <div className={styles.list}>
          {posts.map((p) => (
            <div key={p.id} className={styles.row}>
              <div
                style={{
                  width: 56, height: 56, borderRadius: 10, background: p.color,
                  display: 'grid', placeItems: 'center', fontSize: 24, flexShrink: 0,
                }}
              >
                {p.icon}
              </div>
              <div className={styles.rowMain}>
                <div className={styles.rowTitle}>{p.title}</div>
                <div className={styles.rowMeta}>
                  <span className={styles.tag}>{p.tag}</span>
                  <span>{p.date}</span>
                  <span>{p.readTime}</span>
                  {!p.published && <span style={{ color: '#a55' }}>Draft</span>}
                </div>
              </div>
              <div className={styles.rowActions}>
                <Link href={`/admin/blog/${p.id}`} className={`${styles.btn} ${styles.btnGhost}`}>Edit</Link>
                <DeleteRow id={p.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
