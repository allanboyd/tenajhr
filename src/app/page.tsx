import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Journey from '@/sections/Journey';
import { Services, Impact, Philosophy } from '@/sections/Sections';
import Blog from '@/sections/Blog';
import Showcase from '@/sections/Showcase';
import Contact from '@/sections/Contact';
import { getBlogPosts, getServices, getPhilosophy, getImpactItems } from '@/lib/content';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [posts, services, philosophy, impact] = await Promise.all([
    getBlogPosts(),
    getServices(),
    getPhilosophy(),
    getImpactItems(),
  ]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Services services={services} />
        <Impact items={impact} />
        <Philosophy items={philosophy} />
        <Blog posts={posts} />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
