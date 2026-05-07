import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import styles from '../../../admin.module.css';
import BlogForm from '../BlogForm';

export const dynamic = 'force-dynamic';

export default async function EditBlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) notFound();

  return (
    <>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>Edit <span className={styles.titleEm}>post</span></div>
          <div className={styles.subtitle}>{post.title}</div>
        </div>
      </div>
      <div className={styles.card}>
        <BlogForm
          initial={{
            id: post.id,
            slug: post.slug,
            tag: post.tag,
            title: post.title,
            excerpt: post.excerpt,
            date: post.date,
            readTime: post.readTime,
            icon: post.icon,
            color: post.color,
            content: post.content,
            published: post.published,
            order: post.order,
          }}
        />
      </div>
    </>
  );
}
