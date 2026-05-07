'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../admin.module.css';

interface Row { id?: string; quote: string; body: string; order: number; }

export default function PhilosophyEditor({ initial }: { initial: Row[] }) {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>(initial);
  const [savingKey, setSavingKey] = useState<string | null>(null);

  function update(idx: number, patch: Partial<Row>) {
    setRows((r) => r.map((row, i) => (i === idx ? { ...row, ...patch } : row)));
  }

  async function save(idx: number) {
    const row = rows[idx];
    const key = row.id ?? `new-${idx}`;
    setSavingKey(key);
    const url = row.id ? `/api/admin/philosophy/${row.id}` : '/api/admin/philosophy';
    const res = await fetch(url, {
      method: row.id ? 'PUT' : 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ quote: row.quote, body: row.body, order: row.order }),
    });
    setSavingKey(null);
    if (res.ok) router.refresh();
  }

  async function remove(idx: number) {
    const row = rows[idx];
    if (!row.id) { setRows((r) => r.filter((_, i) => i !== idx)); return; }
    if (!confirm('Delete this item?')) return;
    await fetch(`/api/admin/philosophy/${row.id}`, { method: 'DELETE' });
    router.refresh();
  }

  return (
    <>
      {rows.map((row, idx) => {
        const key = row.id ?? `new-${idx}`;
        return (
          <div key={key} className={styles.card}>
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label className={styles.label}>Quote</label>
                <input className={styles.input} value={row.quote} onChange={(e) => update(idx, { quote: e.target.value })} />
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
              <label className={styles.label}>Body</label>
              <textarea className={styles.textarea} value={row.body} onChange={(e) => update(idx, { body: e.target.value })} />
            </div>
            <div className={styles.formActions}>
              <button className={`${styles.btn} ${styles.btnDanger}`} onClick={() => remove(idx)}>Delete</button>
              <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => save(idx)} disabled={savingKey === key}>
                {savingKey === key ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        );
      })}
      <button
        className={`${styles.btn} ${styles.btnGhost}`}
        onClick={() => setRows((r) => [...r, { quote: '', body: '', order: r.length }])}
      >+ Add item</button>
    </>
  );
}
