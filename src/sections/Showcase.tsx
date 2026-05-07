'use client';

import { useState, useEffect } from 'react';
import FadeIn from '@/components/FadeIn';
import styles from './Showcase.module.css';

// ── AUDIT ──
const AUDIT_AREAS = [
  { id: 'recruitment', label: 'Recruitment & Hiring' },
  { id: 'performance', label: 'Performance Management' },
  { id: 'compliance', label: 'HR Compliance & Policies' },
  { id: 'culture', label: 'Culture & Engagement' },
  { id: 'tech', label: 'HR Tech & Systems' },
];

function ShowcaseAudit() {
  const [scores, setScores] = useState<Record<string, number>>({ recruitment: 3, performance: 2, compliance: 4, culture: 2, tech: 1 });
  const [ran, setRan] = useState(false);
  const total = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 5);
  const pct = Math.round((total / 5) * 100);
  const scoreLabel = pct >= 80 ? 'Strong Foundation' : pct >= 60 ? 'Developing' : pct >= 40 ? 'Needs Attention' : 'At Risk';

  const getRecs = () => {
    const recs: string[] = [];
    if (scores.recruitment <= 2) recs.push('Implement structured interview scorecards and a defined hiring framework');
    if (scores.performance <= 2) recs.push('Establish quarterly performance cycles with clear OKRs linked to business goals');
    if (scores.compliance <= 2) recs.push('Conduct a full HR policy audit against Kenyan Labour Laws');
    if (scores.culture <= 2) recs.push('Launch an engagement survey to baseline current culture health');
    if (scores.tech <= 2) recs.push('Evaluate and implement an HRIS to digitise core HR workflows');
    if (recs.length === 0) recs.push('Your HR foundations are strong — focus on HR analytics and strategic people planning');
    return recs;
  };

  return (
    <div>
      <div className={styles.auditGrid}>
        {AUDIT_AREAS.map(a => (
          <div key={a.id} className={styles.auditItem}>
            <div className={styles.auditLabel}>{a.label}</div>
            <div className={styles.auditBtns}>
              {[1,2,3,4,5].map(n => (
                <button key={n}
                  className={`${styles.auditBtn} ${scores[a.id] >= n ? styles.auditBtnActive : ''}`}
                  onClick={() => setScores(s => ({ ...s, [a.id]: n }))}>
                  {n}
                </button>
              ))}
            </div>
            <div className={styles.auditBar}>
              <div className={styles.auditFill}
                style={{
                  width: `${(scores[a.id]/5)*100}%`,
                  background: scores[a.id] >= 4 ? '#4CAF50' : scores[a.id] >= 3 ? 'var(--gold)' : '#E53935'
                }} />
            </div>
          </div>
        ))}
      </div>
      <button className={styles.btnPrimary} onClick={() => setRan(true)}>Generate HR Audit Report →</button>
      {ran && (
        <div className={styles.auditResult}>
          <div className={styles.auditScore}>{pct}%</div>
          <div className={styles.auditScoreLabel}>HR Maturity Score — {scoreLabel}</div>
          <div className={styles.auditRecs}>
            <div className={styles.auditRecsTitle}>Priority Recommendations</div>
            {getRecs().map((r, i) => <div key={i} className={styles.auditRec}>{r}</div>)}
          </div>
        </div>
      )}
    </div>
  );
}

// ── HIRING ──
const HIRING_STAGES = [
  { label: 'Define Role', title: 'Step 1: Define the Role Clearly', body: 'Before posting, we define what success looks like in the first 90 days.', items: ['Draft outcome-based job description', 'Align with hiring manager on must-haves vs. nice-to-haves', 'Define compensation range with market benchmarks', 'Identify assessment criteria upfront'] },
  { label: 'Source', title: 'Step 2: Source Strategically', body: 'Reactive sourcing fills desks. Strategic sourcing builds teams.', items: ['Activate relevant job boards + LinkedIn', 'Tap internal referral networks', 'Engage passive candidates where relevant', 'Create a talent pipeline for repeated needs'] },
  { label: 'Screen', title: 'Step 3: Screen with Consistency', body: 'Every candidate gets the same structured screening.', items: ['CV shortlist against defined criteria', 'Structured phone screen (20 min)', 'Skills assessment relevant to the role', 'Candidate scorecard completed before debrief'] },
  { label: 'Interview', title: 'Step 4: Run a Structured Interview', body: 'Structured interviews use behavioural + situational questions tied to real role challenges.', items: ['Panel interview with scorecard', 'Behavioural questions (STAR method)', 'Culture-add assessment', 'Candidate has space to ask real questions'] },
  { label: 'Decide', title: 'Step 5: Decide on Evidence', body: 'Gut feel has a role — but it follows the data, not the other way around.', items: ['Structured debrief with all interviewers', 'Reference check on final candidate', 'Offer aligned with internal equity', 'Clear timeline communicated to candidate'] },
  { label: 'Onboard', title: 'Step 6: Onboard Intentionally', body: 'The first 90 days determine whether a great hire becomes a great employee.', items: ['30-60-90 day plan created before day 1', 'Week 1 structured introduction programme', 'Manager check-ins at 30, 60, 90 days', 'Clear milestones for probation confirmation'] },
];

function ShowcaseHiring() {
  const [stage, setStage] = useState(0);
  const s = HIRING_STAGES[stage];
  return (
    <div>
      <div className={styles.hiringStages}>
        {HIRING_STAGES.map((st, i) => (
          <div key={st.label}
            className={`${styles.hiringStage} ${i < stage ? styles.done : ''} ${i === stage ? styles.active : ''}`}
            onClick={() => setStage(i)}>
            <div className={styles.hiringNum}>{String(i+1).padStart(2,'0')}</div>
            <div className={styles.hiringLabel}>{st.label}</div>
          </div>
        ))}
      </div>
      <div className={styles.hiringContent}>
        <h4 className={styles.hiringTitle}>{s.title}</h4>
        <p className={styles.hiringBody}>{s.body}</p>
        <ul className={styles.hiringList}>{s.items.map((item,i) => <li key={i}>{item}</li>)}</ul>
        <div className={styles.hiringNav}>
          {stage > 0 && <button className={styles.btnSecondary} onClick={() => setStage(s => s-1)}>← Back</button>}
          {stage < HIRING_STAGES.length - 1 && <button className={styles.btnPrimary} onClick={() => setStage(s => s+1)}>Next Step →</button>}
          {stage === HIRING_STAGES.length - 1 && <button className={styles.btnPrimary} onClick={() => setStage(0)}>Start Over ↺</button>}
        </div>
      </div>
    </div>
  );
}

// ── OKR ──
const OKR_EXAMPLES = [
  { objective: 'Reduce voluntary turnover', krs: [{ label: 'Exit interview completion rate', pct: 92 }, { label: 'Turnover reduced to 15%', pct: 68 }, { label: 'Stay interviews conducted', pct: 85 }] },
  { objective: 'Improve hiring speed & quality', krs: [{ label: 'Time-to-hire < 25 days', pct: 78 }, { label: 'Offer acceptance rate > 85%', pct: 91 }, { label: 'New hire 90-day retention', pct: 95 }] },
  { objective: 'Build HR system foundation', krs: [{ label: 'HRIS adoption 100%', pct: 100 }, { label: 'Policy documentation complete', pct: 88 }, { label: 'Compliance audit passed', pct: 100 }] },
];

function ShowcaseOKR() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <div className={styles.okrBuilder}>
      {OKR_EXAMPLES.map((okr, oi) => (
        <div key={oi} className={styles.okrRow}>
          <div className={styles.okrObjective}>{okr.objective}</div>
          <div className={styles.okrKrs}>
            {okr.krs.map((kr, ki) => (
              <div key={ki} className={styles.okrKr}>
                <span className={styles.okrKrLabel}>{kr.label}</span>
                <div className={styles.okrBar}><div className={styles.okrFill} style={{ width: visible ? `${kr.pct}%` : '0%' }} /></div>
                <span className={styles.okrPct}>{kr.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <p className={styles.okrNote}>Sample HR OKR dashboard — showing a Greenspoon-style quarterly cycle.</p>
    </div>
  );
}

// ── POLICY ──
const POLICY_OPTIONS: Record<string, { id: string; label: string; default: boolean }[]> = {
  leave: [
    { id: 'annual', label: 'Annual Leave (21 working days)', default: true },
    { id: 'sick', label: 'Sick Leave (7 days with medical cert)', default: true },
    { id: 'maternity', label: 'Maternity Leave (90 days)', default: true },
    { id: 'paternity', label: 'Paternity Leave (14 days)', default: true },
    { id: 'menstrual', label: 'Menstrual Leave (1 day/month)', default: false },
    { id: 'bereavement', label: 'Bereavement Leave (3–5 days)', default: true },
  ],
  work: [
    { id: 'hybrid', label: 'Hybrid Work Model', default: false },
    { id: 'remote', label: 'Remote Work Policy', default: false },
    { id: 'flex', label: 'Flexible Working Hours', default: false },
    { id: 'overtime', label: 'Overtime Compensation Policy', default: true },
  ],
  wellness: [
    { id: 'eap', label: 'Employee Assistance Programme', default: false },
    { id: 'insurance', label: 'Medical Insurance', default: true },
    { id: 'gym', label: 'Wellness / Gym Allowance', default: false },
    { id: 'counseling', label: 'Mental Health Counseling Access', default: false },
  ],
};

const POLICY_TITLES: Record<string, string> = { leave: 'Leave Policies', work: 'Work Arrangement Policies', wellness: 'Wellness Policies' };

function ShowcasePolicy() {
  const [policies, setPolicies] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    Object.values(POLICY_OPTIONS).flat().forEach(o => { init[o.id] = o.default; });
    return init;
  });
  const toggle = (id: string) => setPolicies(p => ({ ...p, [id]: !p[id] }));
  const allLabels = Object.values(POLICY_OPTIONS).flat();
  const activeLabels = allLabels.filter(o => policies[o.id]).map(o => o.label);

  return (
    <div className={styles.policyBuilder}>
      {Object.entries(POLICY_OPTIONS).map(([cat, opts]) => (
        <div key={cat} className={styles.policySection}>
          <div className={styles.policySectionTitle}>{POLICY_TITLES[cat]}</div>
          <div className={styles.policyToggles}>
            {opts.map(o => (
              <div key={o.id} className={styles.policyRow} onClick={() => toggle(o.id)}>
                <span>{o.label}</span>
                <div className={`${styles.switch} ${policies[o.id] ? styles.switchOn : ''}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className={styles.policyPreview}>
        <strong>Policy Bundle Preview ({activeLabels.length} policies):</strong><br />
        {activeLabels.length > 0
          ? `This organisation's People Policy includes: ${activeLabels.join(', ')}.`
          : 'Select policies above to preview your bundle.'}
      </div>
    </div>
  );
}

// ── TABS ──
const TABS = [
  { id: 'audit', label: 'HR Audit Tool', title: 'HR Maturity Audit', desc: 'Rate your organisation across 5 HR dimensions and get a personalised readiness score with priority recommendations.', Component: ShowcaseAudit },
  { id: 'hiring', label: 'Hiring Framework', title: 'End-to-End Hiring Framework', desc: "Walk through Janet's 6-step structured hiring process — from role definition to intentional onboarding.", Component: ShowcaseHiring },
  { id: 'okr', label: 'HR OKR Dashboard', title: 'People OKR Tracker', desc: 'A sample of how HR goals get tracked against business outcomes — making people strategy visible and accountable.', Component: ShowcaseOKR },
  { id: 'policy', label: 'Policy Builder', title: 'HR Policy Builder', desc: 'Toggle the policies that matter to your organisation and preview your custom People Policy bundle.', Component: ShowcasePolicy },
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('audit');
  const tab = TABS.find(t => t.id === activeTab)!;
  const Comp = tab.Component;

  return (
    <section id="showcase" className={styles.showcase} data-screen-label="Showcase">
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.label}>Interactive Demos</div>
          <h2 className={styles.title}>See the Work<br /><em>In Action</em></h2>
        </FadeIn>
        <div className={styles.tabs}>
          {TABS.map(t => (
            <button key={t.id}
              className={`${styles.tab} ${activeTab === t.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        <div className={styles.panel}>
          <div className={styles.panelTitle}>{tab.title}</div>
          <div className={styles.panelDesc}>{tab.desc}</div>
          <Comp key={activeTab} />
        </div>
      </div>
    </section>
  );
}
