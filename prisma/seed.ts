import { PrismaClient } from '@prisma/client';
import { BLOG_POSTS } from '../src/data/blog';
import { SERVICES, PHILOSOPHY, IMPACT_ITEMS } from '../src/data/content';
import { JOURNEY_DATA } from '../src/data/journey';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  for (let i = 0; i < BLOG_POSTS.length; i++) {
    const p = BLOG_POSTS[i];
    await prisma.blogPost.upsert({
      where: { slug: p.slug },
      update: {},
      create: { ...p, order: i },
    });
  }

  if ((await prisma.service.count()) === 0) {
    for (let i = 0; i < SERVICES.length; i++) {
      await prisma.service.create({ data: { ...SERVICES[i], order: i } });
    }
  }

  if ((await prisma.philosophyItem.count()) === 0) {
    for (let i = 0; i < PHILOSOPHY.length; i++) {
      await prisma.philosophyItem.create({ data: { ...PHILOSOPHY[i], order: i } });
    }
  }

  if ((await prisma.impactItem.count()) === 0) {
    for (let i = 0; i < IMPACT_ITEMS.length; i++) {
      await prisma.impactItem.create({ data: { text: IMPACT_ITEMS[i], order: i } });
    }
  }

  if ((await prisma.journeyEntry.count()) === 0) {
    for (let i = 0; i < JOURNEY_DATA.length; i++) {
      const j = JOURNEY_DATA[i];
      await prisma.journeyEntry.create({
        data: {
          period: j.period,
          company: j.company,
          role: j.role,
          sector: j.sector,
          metrics: j.metrics as any,
          groups: j.groups as any,
          order: i,
        },
      });
    }
  }

  console.log('Seed complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
