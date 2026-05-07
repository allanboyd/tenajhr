import { prisma } from '@/lib/prisma';
import styles from '../../admin.module.css';
import ServicesEditor from './ServicesEditor';

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  const services = await prisma.service.findMany({ orderBy: { order: 'asc' } });
  return (
    <>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>Services <span className={styles.titleEm}>offered</span></div>
          <div className={styles.subtitle}>Edit the service offerings shown on the landing page.</div>
        </div>
      </div>
      <ServicesEditor initial={services.map(s => ({
        id: s.id, title: s.title, desc: s.desc, items: s.items, order: s.order,
      }))} />
    </>
  );
}
