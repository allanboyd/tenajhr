'use client';

import { useState } from 'react';
import FadeIn from '@/components/FadeIn';
import { JOURNEY_DATA, JourneyEntry as JourneyEntryType } from '@/data/journey';
import styles from './Journey.module.css';

function JourneyCard({ entry, index }: { entry: JourneyEntryType; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  return (
    <FadeIn delay={index * 100}>
      <div className={styles.entry}>
        <div className={styles.left}>
          <div className={styles.period}>{entry.period}</div>
          <div className={styles.company}>{entry.company}</div>
        </div>
        <div className={styles.node} />
        <div className={styles.right}>
          <div className={styles.role}>{entry.role}</div>
          <div className={styles.sector}>{entry.sector}</div>
          <div className={styles.metrics}>
            {entry.metrics.map((m, i) => (
              <div key={i} className={styles.metric}>
                <div className={styles.metricVal}>{m.val}</div>
                <div className={styles.metricLabel}>{m.label}</div>
              </div>
            ))}
          </div>
          {expanded && (
            <div className={styles.groups}>
              {entry.groups.map((g, gi) => (
                <div key={gi} className={styles.group}>
                  <div className={styles.groupLabel}>{g.label}</div>
                  {g.items.map((item, ii) => (
                    <div key={ii} className={styles.hl}>{item}</div>
                  ))}
                </div>
              ))}
            </div>
          )}
          <button className={styles.expandBtn} onClick={() => setExpanded(e => !e)}>
            {expanded ? '↑ Show less' : '↓ See highlights'}
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Journey() {
  return (
    <section id="journey" className={styles.journey} data-screen-label="Journey">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.label}>Career Journey</div>
          <h2 className={styles.title}>6+ Years Building<br /><em>People-First Organizations</em></h2>
        </FadeIn>
        <div className={styles.timeline}>
          <div className={styles.spine} />
          {JOURNEY_DATA.map((entry, i) => (
            <JourneyCard key={entry.company} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
