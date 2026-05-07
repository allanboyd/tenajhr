'use client';

import FadeIn from '@/components/FadeIn';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about} data-screen-label="About">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.label}>About Janet</div>
          <h2 className={styles.title}>Building People Systems<br /><em>That Actually Work</em></h2>
        </FadeIn>
        <div className={styles.grid}>
          <FadeIn delay={100}>
            <p className={styles.lead}>
              Most companies don&apos;t struggle because of lack of talent. They struggle because they
              don&apos;t have the systems to support that talent.
            </p>
            <p className={styles.body}>
              I&apos;ve spent my career working inside fast-growing startups and ecosystem organizations
              where growth is rapid, messy, and often unpredictable. I&apos;ve worked across Kenya,
              Nigeria, South Africa, and the UK — supporting distributed teams, startup founders,
              and growing organizations navigating scale.
            </p>
            <ul className={styles.painList}>
              <li>Great hires fail due to lack of structure</li>
              <li>Teams burn out because processes are unclear</li>
              <li>Culture becomes reactive instead of intentional</li>
            </ul>
            <div className={styles.chips}>
              {['HR Expertise','Startup Agility','Systems Thinking','Employee Experience','People Strategy','HR Tech'].map(s => (
                <span key={s} className={styles.chip}>{s}</span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className={styles.expBlock}>
              <div className={styles.org}>Greenspoon Limited</div>
              <ul className={styles.expItems}>
                <li>Implemented Horilla HRIS — 100% adoption within 2 months</li>
                <li>Managed end-to-end payroll for 200+ employees monthly</li>
                <li>Led performance management cycles for 100% of staff</li>
              </ul>
            </div>
            <div className={styles.expBlock}>
              <div className={styles.org}>Adanian Labs</div>
              <ul className={styles.expItems}>
                <li>Built recruitment pipelines across multiple ventures</li>
                <li>Supported 35+ startup founders with hiring and team structuring</li>
                <li>Developed HR self-service chatbot, reducing inquiries by 30%</li>
              </ul>
            </div>
            <div className={styles.expBlock}>
              <div className={styles.org}>Solargen Technologies</div>
              <ul className={styles.expItems}>
                <li>Led end-to-end recruitment, reducing time-to-hire by 20%</li>
                <li>Designed orientation program, accelerating adaptation by 30%</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
