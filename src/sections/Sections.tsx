'use client';

import FadeIn from '@/components/FadeIn';
import { Service } from '@/data/content';
import styles from './Sections.module.css';

export function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className={styles.services} data-screen-label="Services">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.labelLight}>How I Can Support You</div>
          <h2 className={styles.titleLight}>Services</h2>
        </FadeIn>
        <div className={styles.servicesGrid}>
          {services.map((s, i) => (
            <div key={s.title} className={styles.serviceCard}>
              <div className={styles.serviceNum}>0{i + 1}</div>
              <div className={styles.serviceTitle}>{s.title}</div>
              <div className={styles.serviceDesc}>{s.desc}</div>
              <ul className={styles.serviceList}>
                {s.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Impact({ items }: { items: string[] }) {
  return (
    <section id="impact" className={styles.impact} data-screen-label="Impact">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.label}>Results</div>
          <h2 className={styles.title}>What This Work Looks Like<br /><em>In Practice</em></h2>
        </FadeIn>
        <div className={styles.impactGrid}>
          <FadeIn delay={100}>
            <div className={styles.stats}>
              {[
                { val: '80+', label: 'Learners into tech programs via structured pipelines' },
                { val: '4', label: 'Countries supported across Africa and the UK' },
                { val: '35+', label: 'Startup CEOs advised on people strategy' },
              ].map(stat => (
                <div key={stat.val} className={styles.stat}>
                  <div className={styles.statNum}>{stat.val}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className={styles.impactItems}>
              {items.map((item, i) => (
                <div key={i} className={styles.impactItem}>
                  <div className={styles.impactDot} />
                  <div className={styles.impactText}>{item}</div>
                </div>
              ))}
            </div>
            <div className={styles.impactCta}>
              The result? More clarity, better hiring decisions, and teams that actually perform.
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function Philosophy({ items }: { items: { quote: string; body: string }[] }) {
  return (
    <section id="philosophy" className={styles.philosophy} data-screen-label="Philosophy">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.label}>How I Think</div>
          <h2 className={styles.title}>My Philosophy on<br /><em>People &amp; Culture</em></h2>
        </FadeIn>
        <div className={styles.philGrid}>
          {items.map((p, i) => (
            <FadeIn key={p.quote} delay={i * 80}>
              <div className={styles.philCard}>
                <div className={styles.philQuote}>{p.quote}</div>
                <div className={styles.philBody}>{p.body}</div>
                <div className={styles.philNum}>{String(i + 1).padStart(2, '0')}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
