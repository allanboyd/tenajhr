'use client';

import { useState } from 'react';
import FadeIn from '@/components/FadeIn';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', org: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (!endpoint || endpoint.includes('YOUR_FORM_ID')) {
        // Demo mode — simulate success
        await new Promise(r => setTimeout(r, 1200));
        setSent(true);
        return;
      }
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError('Something went wrong. Please try emailing directly.');
      }
    } catch {
      setError('Network error. Please email mathengejanet875@gmail.com directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className={styles.contact} data-screen-label="Contact">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.label}>Get In Touch</div>
          <h2 className={styles.title}>{"Let's Build Something"}<br /><em>That Works</em></h2>
        </FadeIn>
        <div className={styles.grid}>
          <FadeIn delay={100}>
            <p className={styles.lead}>
              If you&apos;re scaling your team, struggling with hiring or retention, building HR
              systems from scratch, or trying to fix what&apos;s already not working — we should talk.
            </p>
            <ul className={styles.triggers}>
              {['Scaling your team','Struggling with hiring or retention','Building HR systems from scratch','Trying to fix what\'s already not working'].map(t => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className={styles.meta}>
              {[
                { label: 'Email', val: 'mathengejanet875@gmail.com', href: 'mailto:mathengejanet875@gmail.com' },
                { label: 'Location', val: 'Nairobi, Kenya', href: null },
                { label: 'LinkedIn', val: 'janet-mathenge-187783177', href: 'https://www.linkedin.com/in/janet-mathenge-187783177' },
                { label: 'Availability', val: 'Consulting · Fractional HR · Advisory', href: null },
              ].map(({ label, val, href }) => (
                <div key={label} className={styles.metaItem}>
                  <strong>{label}</strong>
                  {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{val}</a> : <span>{val}</span>}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            {sent ? (
              <div className={styles.success}>
                Thank you for reaching out{form.name ? `, ${form.name.split(' ')[0]}` : ''}. Janet will be in touch shortly.
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Your Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" required />
                  </div>
                  <div className={styles.field}>
                    <label>Organization</label>
                    <input name="org" value={form.org} onChange={handleChange} placeholder="Company or startup" />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
                <div className={styles.field}>
                  <label>Area of Interest</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service area...</option>
                    <option>People &amp; Culture Strategy</option>
                    <option>Talent Acquisition &amp; Hiring Systems</option>
                    <option>Performance &amp; HR Systems</option>
                    <option>Employee Experience &amp; Engagement</option>
                    <option>HR Tech &amp; Automation</option>
                    <option>Other / Not sure yet</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your team and what you're working through..." required />
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <button type="submit" className={styles.submit} disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
