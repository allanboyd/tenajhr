'use client';

import { useState } from 'react';
import FadeIn from '@/components/FadeIn';
import { BlogPost } from '@/data/blog';
import styles from './Blog.module.css';

function BlogModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader} style={{ background: post.color }}>
          <button className={styles.modalClose} onClick={onClose}>✕</button>
          <div className={styles.modalTag}>{post.tag}</div>
          <div className={styles.modalTitle}>{post.title}</div>
          <div className={styles.modalMeta}>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
            <span>Janet Mathenge</span>
          </div>
        </div>
        <div
          className={styles.modalBody}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className={styles.blog} data-screen-label="Blog">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.label}>Insights &amp; Resources</div>
          <h2 className={styles.title}>Thinking Out Loud on<br /><em>People &amp; Culture</em></h2>
        </FadeIn>
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 60}>
              <div className={styles.card} onClick={() => setActivePost(post)}>
                <div className={styles.thumb} style={{ background: post.color }}>
                  <div className={styles.thumbIcon}>{post.icon}</div>
                  <div className={styles.thumbLabel}>{post.tag}</div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTag}>{post.tag}</div>
                  <div className={styles.cardTitle}>{post.title}</div>
                  <div className={styles.cardExcerpt}>{post.excerpt}</div>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardDate}>{post.date}</span>
                    <span className={styles.cardRead}>{post.readTime} →</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      {activePost && <BlogModal post={activePost} onClose={() => setActivePost(null)} />}
    </section>
  );
}
