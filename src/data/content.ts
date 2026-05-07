export interface Service {
  title: string;
  desc: string;
  items: string[];
}

export const SERVICES: Service[] = [
  {
    title: 'People & Culture Strategy',
    desc: 'For startups that need structure without losing flexibility.',
    items: [
      'HR setup from scratch',
      'Organizational design & team structuring',
      'Policy creation that actually gets used',
      'Founder advisory on people decisions',
    ],
  },
  {
    title: 'Talent Acquisition & Hiring Systems',
    desc: 'For companies tired of reactive hiring.',
    items: [
      'Recruitment strategy design',
      'Structured hiring processes',
      'Technical & non-technical hiring frameworks',
      'Employer branding for startups',
    ],
  },
  {
    title: 'Performance & HR Systems',
    desc: 'For teams that need clarity and accountability.',
    items: [
      'Performance management frameworks',
      'OKRs & KPI alignment',
      'HR process audits',
      'Workflow optimization',
    ],
  },
  {
    title: 'Employee Experience & Engagement',
    desc: 'Because retention starts with experience.',
    items: [
      'Engagement surveys & insights',
      'Culture-building programs',
      'Retention strategies',
      'Wellness initiatives',
    ],
  },
  {
    title: 'HR Tech & Automation',
    desc: 'For scaling without operational chaos.',
    items: [
      'HRIS implementation (Zoho, Workpay, ERPNext)',
      'HR workflow automation',
      'AI integration in HR processes',
      'Onboarding system design',
    ],
  },
];

export const PHILOSOPHY = [
  { quote: 'Systems should enable people — not slow them down', body: "If your HR system creates friction, it's broken." },
  { quote: 'Culture is what happens consistently', body: "Not what's written in your values doc." },
  { quote: 'Hiring is a long-term decision', body: 'Not a quick fix for short-term problems.' },
  { quote: 'Startups need structure earlier than they think', body: 'Waiting too long creates expensive problems later.' },
  { quote: 'HR must evolve with technology', body: "AI won't replace HR — but it will redefine how great HR operates." },
];

export const IMPACT_ITEMS = [
  'Supported 80+ learners into tech programs through structured recruitment pipelines',
  'Designed and implemented hybrid work systems across distributed teams',
  'Built HR systems supporting multi-country teams across Kenya, Nigeria, South Africa, and the UK',
  'Helped startup founders hire, onboard, and retain early-stage teams',
  'Introduced wellness and engagement initiatives improving employee satisfaction and retention',
];
