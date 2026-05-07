'use client';

import styles from './Footer.module.css';

const NAV_LINKS = [
  'home','about','journey','services','impact','philosophy','blog','showcase','contact'
];
const NAV_LABELS = [
  'Home','About','Journey','Services','Impact','Philosophy','Blog','Showcase','Contact'
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.brand}>
          <div className={styles.logo}>Janet <span>Mathenge</span></div>
          <p className={styles.desc}>
            People &amp; Culture partner to startups and scaling organizations across Africa and globally.
            Building HR systems that bring structure, clarity, and consistency.
          </p>
          <div className={styles.social}>
            <a className={styles.socialLink} href="https://www.linkedin.com/in/janet-mathenge-187783177" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a className={styles.socialLink} href="mailto:mathengejanet875@gmail.com" title="Email">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a className={styles.socialLink} href="tel:+254719163570" title="Phone">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Navigation</div>
          <ul className={styles.navLinks}>
            {NAV_LINKS.map((id, i) => (
              <li key={id}><button onClick={() => scrollTo(id)}>{NAV_LABELS[i]}</button></li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.colTitle}>Contact</div>
          <div className={styles.contactItems}>
            {[
              { label: 'Email', val: 'mathengejanet875@gmail.com', href: 'mailto:mathengejanet875@gmail.com' },
              { label: 'Phone', val: '+254 719 163 570', href: 'tel:+254719163570' },
              { label: 'Location', val: 'Nairobi, Kenya', href: null },
              { label: 'LinkedIn', val: 'janet-mathenge', href: 'https://www.linkedin.com/in/janet-mathenge-187783177' },
            ].map(({ label, val, href }) => (
              <div key={label} className={styles.contactItem}>
                <span className={styles.contactLabel}>{label}</span>
                <span className={styles.contactVal}>
                  {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{val}</a> : val}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Availability</div>
          <div className={styles.avail}>
            {['Consulting','Fractional HR','Advisory'].map(a => (
              <div key={a} className={styles.availChip}><span className={styles.availDot} />{a}</div>
            ))}
          </div>
          <div className={styles.expertiseWrap}>
            <div className={styles.colTitle} style={{ marginTop: 28 }}>Expertise</div>
            <div className={styles.expertiseTags}>
              {['People Strategy','Talent Acquisition','HRIS Implementation','Performance Management','HR Compliance','Employee Experience'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>© 2026 Janet Mathenge. All rights reserved.</span>
        <span className={styles.tagline}>People Systems for Companies That Are Scaling Fast</span>
      </div>
    </footer>
  );
}
