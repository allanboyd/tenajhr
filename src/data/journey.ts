export interface JourneyEntry {
  period: string;
  company: string;
  role: string;
  sector: string;
  metrics: { val: string; label: string }[];
  groups: { label: string; items: string[] }[];
}

export const JOURNEY_DATA: JourneyEntry[] = [
  {
    period: 'June 2025 — Present',
    company: 'Greenspoon Limited (Certified B Corp)',
    role: 'Human Resource Manager',
    sector: 'E-Commerce · Certified B Corp',
    metrics: [
      { val: '200+', label: 'employees on payroll' },
      { val: '100%', label: 'HRIS adoption in 2 months' },
      { val: '50%', label: 'reduction in manual HR admin' },
      { val: '90%', label: 'OKR completion rate' },
    ],
    groups: [
      {
        label: 'HRIS & Digitization',
        items: [
          'Implemented Horilla HRIS, achieving 100% staff adoption within 2 months',
          'Digitised 80–90% of HR workflows, reducing manual administration by 50%',
        ],
      },
      {
        label: 'Payroll & Compliance',
        items: [
          'Managed end-to-end payroll for 200+ employees with 100% on-time delivery and zero statutory penalties',
          'Conducted monthly salary forecasting with ±2–5% variance — budgets of ~KES 15M/month',
          'Handled 200+ employee contracts annually with zero audit findings',
        ],
      },
      {
        label: 'Performance & People Ops',
        items: [
          'Developed and tracked quarterly HR OKRs achieving 90% completion rate',
          'Led performance management cycles for 100% of staff, coaching managers on PIPs',
          'Improved HR response times by 30%, measurably improving employee experience',
        ],
      },
    ],
  },
  {
    period: 'April 2022 — May 2025',
    company: 'Adanian Labs',
    role: 'Human Resource Manager',
    sector: 'Startup Ecosystem · Pan-African',
    metrics: [
      { val: '40+', label: 'professionals placed across KE, NG, SA' },
      { val: '90+', label: 'employees in performance cycles' },
      { val: '20%', label: 'increase in employee productivity' },
      { val: '35+', label: 'startup CEOs advised' },
    ],
    groups: [
      {
        label: 'Talent Acquisition',
        items: [
          'Managed end-to-end recruitment across Kenya, Nigeria, and South Africa — placing 40+ professionals',
          'Developed and optimized 15+ job descriptions aligned with organizational goals',
          'Partnered with 35+ startup CEOs on workforce planning, HR strategy, and compliance',
        ],
      },
      {
        label: 'HR Innovation & Tech',
        items: [
          'Spearheaded development of an HR self-service chatbot, reducing HR inquiries by 30%',
          'Digitized and automated onboarding processes, reducing processing time by 40%',
          'Administered contract lifecycle management via ERP with 100% compliance',
        ],
      },
      {
        label: 'Culture & Compliance',
        items: [
          'Introduced progressive workplace policies including a menstrual leave policy',
          'Launched hybrid work model, boosting employee engagement and retention',
          'Conducted policy training sessions, increasing compliance awareness by 30%',
        ],
      },
    ],
  },
  {
    period: 'January 2021 — March 2022',
    company: 'Solargen Technologies, East Africa',
    role: 'Human Resources Officer',
    sector: 'Renewable Energy',
    metrics: [
      { val: '45+', label: 'employees managed' },
      { val: '16%', label: 'improvement in overall performance' },
      { val: '30%', label: 'faster new hire adaptation' },
      { val: '20%', label: 'reduction in time-to-hire' },
    ],
    groups: [
      {
        label: 'Recruitment & Onboarding',
        items: [
          'Led end-to-end recruitment, improving time-to-hire by 20%',
          'Designed comprehensive orientation program, accelerating new hire adaptation by 30%',
          'Drafted and managed contracts for 45+ employees in compliance with labour laws',
        ],
      },
      {
        label: 'Performance & Development',
        items: [
          'Conducted KPI evaluations for 45 employees, achieving 16% improvement in overall performance',
          'Designed career development plans to address performance gaps',
        ],
      },
    ],
  },
  {
    period: 'February 2020 — October 2020',
    company: 'Oracle Edge Consulting',
    role: 'Human Resources Associate',
    sector: 'HR Consulting',
    metrics: [
      { val: '3', label: 'client companies across industries' },
      { val: '100%', label: 'labour law compliance on HR audits' },
      { val: '30+', label: 'employees per client organization' },
    ],
    groups: [
      {
        label: 'Consulting & Policy',
        items: [
          'Led HR policy formulation for three client companies across Events, Fintech, and Cleaning industries',
          'Conducted HR audits ensuring 100% compliance with labour laws',
          'Developed standardized recruitment processes including interview scorecards',
        ],
      },
      {
        label: 'Training & Engagement',
        items: [
          'Conducted training needs analyses and designed tailored training interventions',
          'Facilitated workshops improving employee competencies across client organizations',
          'Championed workplace ethics programs improving professionalism and collaboration',
        ],
      },
    ],
  },
];
