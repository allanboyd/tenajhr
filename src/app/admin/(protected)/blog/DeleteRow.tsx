'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../../admin.module.css';

export default function DeleteRow({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onDelete() {
    if (!confirm('Delete this post? This cannot be undone.')) return;
    setLoading(true);
    await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' });
    router.refresh();
  }

  return (
    <button className={`${styles.btn} ${styles.btnDanger}`} onClick={onDelete} disabled={loading}>
      {loading ? 'Deleting…' : 'Delete'}
    </button>
  );
}
