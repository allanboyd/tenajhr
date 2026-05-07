'use client';

import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const NAV_SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'services', label: 'Services' },
  { id: 'impact', label: 'Impact' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'blog', label: 'Blog' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'contact', label: 'Contact' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.3) {
            setActive(e.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo} onClick={() => scrollTo('home')}>
          Janet <span>Mathenge</span>
        </div>
        <ul className={styles.links}>
          {NAV_SECTIONS.slice(1).map(({ id, label }) => (
            <li key={id}>
              {id === 'contact' ? (
                <button className={styles.cta} onClick={() => scrollTo(id)}>{label}</button>
              ) : (
                <button
                  className={active === id ? styles.activeLink : ''}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.mobileClose} onClick={() => setMobileOpen(false)}>✕</button>
          {NAV_SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              className={styles.mobileLink}
              onClick={() => { scrollTo(id); setMobileOpen(false); }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
