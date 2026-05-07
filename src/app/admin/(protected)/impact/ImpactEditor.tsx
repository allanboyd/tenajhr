'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../admin.module.css';

interface Row { id?: string; text: string; order: number; }

export default function ImpactEditor({ initial }: { initial: Row[] }) {
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
    const url = row.id ? `/api/admin/impact/${row.id}` : '/api/admin/impact';
    const res = await fetch(url, {
      method: row.id ? 'PUT' : 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: row.text, order: row.order }),
    });
    setSavingKey(null);
    if (res.ok) router.refresh();
  }

  async function remove(idx: number) {
    const row = rows[idx];
    if (!row.id) { setRows((r) => r.filter((_, i) => i !== idx)); return; }
    if (!confirm('Delete this impact item?')) return;
    await fetch(`/api/admin/impact/${row.id}`, { method: 'DELETE' });
    router.refresh();
  }

  return (
    <>
      <div className={styles.list}>
        {rows.map((row, idx) => {
          const key = row.id ?? `new-${idx}`;
          return (
            <div key={key} className={styles.row}>
              <div className={styles.rowMain}>
                <textarea
                  className={styles.textarea}
                  value={row.text}
                  onChange={(e) => update(idx, { text: e.target.value })}
                  style={{ minHeight: 60 }}
                />
              </div>
              <div className={styles.rowActions}>
                <input
                  className={styles.input}
                  type="number"
                  value={row.order}
                  onChange={(e) => update(idx, { order: parseInt(e.target.value || '0', 10) })}
                  style={{ width: 70 }}
                />
                <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => save(idx)} disabled={savingKey === key}>
                  {savingKey === key ? '…' : 'Save'}
                </button>
                <button className={`${styles.btn} ${styles.btnDanger}`} onClick={() => remove(idx)}>×</button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={`${styles.btn} ${styles.btnGhost}`}
        style={{ marginTop: 14 }}
        onClick={() => setRows((r) => [...r, { text: '', order: r.length }])}
      >+ Add item</button>
    </>
  );
}
