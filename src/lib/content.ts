import { prisma } from '@/lib/prisma';
import { BLOG_POSTS, BlogPost } from '@/data/blog';
import { SERVICES, PHILOSOPHY, IMPACT_ITEMS, Service } from '@/data/content';

async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch (e) {
    console.warn('[content] DB unavailable, using fallback:', (e as Error).message);
    return fallback;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return safe(async () => {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });
    return posts.map((p) => ({
      slug: p.slug, tag: p.tag, title: p.title, excerpt: p.excerpt,
      date: p.date, readTime: p.readTime, icon: p.icon, color: p.color, content: p.content,
    }));
  }, BLOG_POSTS);
}

export async function getServices(): Promise<Service[]> {
  return safe(async () => {
    const rows = await prisma.service.findMany({ orderBy: { order: 'asc' } });
    return rows.map((s) => ({ title: s.title, desc: s.desc, items: s.items }));
  }, SERVICES);
}

export async function getPhilosophy(): Promise<{ quote: string; body: string }[]> {
  return safe(async () => {
    const rows = await prisma.philosophyItem.findMany({ orderBy: { order: 'asc' } });
    return rows.map((r) => ({ quote: r.quote, body: r.body }));
  }, PHILOSOPHY);
}

export async function getImpactItems(): Promise<string[]> {
  return safe(async () => {
    const rows = await prisma.impactItem.findMany({ orderBy: { order: 'asc' } });
    return rows.map((r) => r.text);
  }, IMPACT_ITEMS);
}
