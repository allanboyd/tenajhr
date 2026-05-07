'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../admin.module.css';

interface ServiceRow {
  id?: string;
  title: string;
  desc: string;
  items: string[];
  order: number;
}

export default function ServicesEditor({ initial }: { initial: ServiceRow[] }) {
  const router = useRouter();
  const [rows, setRows] = useState<ServiceRow[]>(initial);
  const [savingId, setSavingId] = useState<string | null>(null);

  function update(idx: number, patch: Partial<ServiceRow>) {
    setRows((r) => r.map((row, i) => (i === idx ? { ...row, ...patch } : row)));
  }

  async function save(idx: number) {
    const row = rows[idx];
    setSavingId(row.id ?? `new-${idx}`);
    const url = row.id ? `/api/admin/services/${row.id}` : '/api/admin/services';
    const res = await fetch(url, {
      method: row.id ? 'PUT' : 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ title: row.title, desc: row.desc, items: row.items, order: row.order }),
    });
    setSavingId(null);
    if (res.ok) router.refresh();
  }

  async function remove(idx: number) {
    const row = rows[idx];
    if (!row.id) {
      setRows((r) => r.filter((_, i) => i !== idx));
      return;
    }
    if (!confirm('Delete this service?')) return;
    await fetch(`/api/admin/services/${row.id}`, { method: 'DELETE' });
    router.refresh();
  }

  function addNew() {
    setRows((r) => [...r, { title: '', desc: '', items: [''], order: r.length }]);
  }

  return (
    <>
      {rows.map((row, idx) => (
        <div key={row.id ?? `new-${idx}`} className={styles.card}>
          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label className={styles.label}>Title</label>
              <input className={styles.input} value={row.title} onChange={(e) => update(idx, { title: e.target.value })} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Order</label>
              <input
                className={styles.input}
                type="number"
                value={row.order}
                onChange={(e) => update(idx, { order: parseInt(e.target.value || '0', 10) })}
              />
            </div>
          </div>
          <div className={styles.field} style={{ marginTop: 14 }}>
            <label className={styles.label}>Description</label>
            <input className={styles.input} value={row.desc} onChange={(e) => update(idx, { desc: e.target.value })} />
          </div>
          <div className={styles.field} style={{ marginTop: 14 }}>
            <label className={styles.label}>Items (one per line)</label>
            <textarea
              className={styles.textarea}
              value={row.items.join('\n')}
              onChange={(e) => update(idx, { items: e.target.value.split('\n').filter(Boolean) })}
            />
          </div>
          <div className={styles.formActions}>
            <button className={`${styles.btn} ${styles.btnDanger}`} onClick={() => remove(idx)}>Delete</button>
            <button
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() => save(idx)}
              disabled={savingId === (row.id ?? `new-${idx}`)}
            >
              {savingId === (row.id ?? `new-${idx}`) ? 'Saving…' : 'Save'}
            </button>
          </div>
        </div>
      ))}
      <button className={`${styles.btn} ${styles.btnGhost}`} onClick={addNew}>+ Add service</button>
    </>
  );
}
