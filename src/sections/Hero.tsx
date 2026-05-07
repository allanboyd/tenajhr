'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export default function Hero() {
  return (
    <section id="home" className={styles.hero} data-screen-label="Home">
      <div className={styles.inner}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.eyebrow}>People &amp; Culture Partner</div>
          <h1 className={styles.headline}>
            Build a Company People Actually Want to Work For{' '}
            <em>— While You Scale It</em>
          </h1>
          <p className={styles.sub}>
            I help startups and growing organizations design people systems, hire intentionally,
            and build cultures that drive performance without burning out teams.
          </p>
          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={() => scrollTo('contact')}>Work With Me</button>
            <button className={styles.btnSecondary} onClick={() => scrollTo('services')}>View My Approach</button>
          </div>
        </motion.div>

        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.photoBg} />
          <Image
            src="/janet.jpeg"
            alt="Janet Mathenge"
            width={320}
            height={400}
            className={styles.photo}
            priority
          />
          <div className={styles.badge}>Nairobi, Kenya</div>
        </motion.div>
      </div>
    </section>
  );
}
