import { prisma } from '@/lib/prisma';
import styles from '../../admin.module.css';
import ImpactEditor from './ImpactEditor';

export const dynamic = 'force-dynamic';

export default async function ImpactPage() {
  const items = await prisma.impactItem.findMany({ orderBy: { order: 'asc' } });
  return (
    <>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>Impact <span className={styles.titleEm}>highlights</span></div>
          <div className={styles.subtitle}>Bullet points showcasing measurable outcomes.</div>
        </div>
      </div>
      <ImpactEditor initial={items.map(i => ({ id: i.id, text: i.text, order: i.order }))} />
    </>
  );
}
