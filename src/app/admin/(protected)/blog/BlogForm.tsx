'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../admin.module.css';

export interface BlogFormData {
  id?: string;
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  icon: string;
  color: string;
  content: string;
  published: boolean;
  order: number;
}

const EMPTY: BlogFormData = {
  slug: '', tag: '', title: '', excerpt: '',
  date: '', readTime: '', icon: '✍️', color: '#6B1414',
  content: '', published: true, order: 0,
};

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
}

export default function BlogForm({ initial }: { initial?: BlogFormData }) {
  const router = useRouter();
  const [data, setData] = useState<BlogFormData>(initial ?? EMPTY);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function update<K extends keyof BlogFormData>(key: K, value: BlogFormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    const isEdit = !!data.id;
    const url = isEdit ? `/api/admin/blog/${data.id}` : '/api/admin/blog';
    const { id, ...payload } = data;
    void id;
    const res = await fetch(url, {
      method: isEdit ? 'PUT' : 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    setSaving(false);
    if (!res.ok) {
      setError('Failed to save. Slug must be unique.');
      return;
    }
    router.push('/admin/blog');
    router.refresh();
  }

  return (
    <form className={styles.form} onSubmit={save}>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            value={data.title}
            onChange={(e) => {
              const t = e.target.value;
              update('title', t);
              if (!data.id && (!data.slug || data.slug === slugify(data.title))) {
                update('slug', slugify(t));
              }
            }}
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Slug</label>
          <input className={styles.input} value={data.slug} onChange={(e) => update('slug', slugify(e.target.value))} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Tag</label>
          <input className={styles.input} value={data.tag} onChange={(e) => update('tag', e.target.value)} placeholder="HR Strategy" required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Date label</label>
          <input className={styles.input} value={data.date} onChange={(e) => update('date', e.target.value)} placeholder="April 2025" required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Read time</label>
          <input className={styles.input} value={data.readTime} onChange={(e) => update('readTime', e.target.value)} placeholder="5 min read" required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Icon (emoji)</label>
          <input className={styles.input} value={data.icon} onChange={(e) => update('icon', e.target.value)} maxLength={4} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Accent color</label>
          <input className={styles.input} type="color" value={data.color} onChange={(e) => update('color', e.target.value)} />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Order</label>
          <input
            className={styles.input}
            type="number"
            value={data.order}
            onChange={(e) => update('order', parseInt(e.target.value || '0', 10))}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Excerpt</label>
        <textarea
          className={styles.textarea}
          value={data.excerpt}
          onChange={(e) => update('excerpt', e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Content (HTML)</label>
        <textarea
          className={`${styles.textarea} ${styles.textareaTall}`}
          value={data.content}
          onChange={(e) => update('content', e.target.value)}
          placeholder="<p>Your post content...</p><h3>Subheading</h3><p>...</p>"
          required
        />
      </div>

      <div className={styles.field}>
        <label style={{ display: 'flex', gap: 10, alignItems: 'center', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={data.published}
            onChange={(e) => update('published', e.target.checked)}
          />
          <span>Published (visible on the public site)</span>
        </label>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.formActions}>
        <button type="button" className={`${styles.btn} ${styles.btnGhost}`} onClick={() => router.push('/admin/blog')}>
          Cancel
        </button>
        <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={saving}>
          {saving ? 'Saving…' : data.id ? 'Save changes' : 'Create post'}
        </button>
      </div>
    </form>
  );
}
