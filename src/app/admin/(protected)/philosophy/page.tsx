import { prisma } from '@/lib/prisma';
import styles from '../../admin.module.css';
import PhilosophyEditor from './PhilosophyEditor';

export const dynamic = 'force-dynamic';

export default async function PhilosophyPage() {
  const items = await prisma.philosophyItem.findMany({ orderBy: { order: 'asc' } });
  return (
    <>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>Philosophy <span className={styles.titleEm}>statements</span></div>
          <div className={styles.subtitle}>Short principles displayed on the landing page.</div>
        </div>
      </div>
      <PhilosophyEditor initial={items.map(i => ({ id: i.id, quote: i.quote, body: i.body, order: i.order }))} />
    </>
  );
}
