export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  icon: string;
  color: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'startups-need-hr-structure',
    tag: 'HR Strategy',
    title: 'Why Startups Need HR Structure Earlier Than They Think',
    excerpt: 'Most founders wait until something breaks before investing in people systems. By then, the cost — in turnover, culture, and compliance — is already steep.',
    date: 'April 2025',
    readTime: '5 min read',
    icon: '🧭',
    color: '#6B1414',
    content: `
      <p>There's a pattern I've seen repeat itself across dozens of startups: a founding team of brilliant people, moving fast, making things work through sheer force of will. Then they hit 15, 20, 30 people — and suddenly the informal systems that worked when everyone sat in one room start creating friction.</p>
      <h3>The Cost of Waiting</h3>
      <p>When HR structure arrives too late, organisations inherit the worst of both worlds: the complexity of a larger company, but none of the systems to manage it. Great hires leave because expectations were never clearly set. Performance issues fester because no one defined what "good" looks like. Culture drifts because growth happened faster than intentionality.</p>
      <h3>What "Early Structure" Actually Means</h3>
      <p>I'm not talking about bureaucracy. Early HR structure means clear job descriptions, an onboarding process, a simple performance framework, and basic policies that protect both the company and the employee. These aren't heavy lifts — but they compound enormously.</p>
      <h3>The Right Time Is Now</h3>
      <p>If you're reading this and thinking "we'll deal with HR when we're bigger" — you're already late. The best time to build people systems is before you feel the pain. The second best time is today.</p>
    `,
  },
  {
    slug: 'hris-implementation-greenspoon',
    tag: 'HR Tech',
    title: 'Implementing HRIS in a 200-Person Organisation: Lessons from Greenspoon',
    excerpt: 'A behind-the-scenes look at how we achieved 100% staff adoption of Horilla HRIS within two months — and what made the difference.',
    date: 'March 2025',
    readTime: '7 min read',
    icon: '⚙️',
    color: '#3D1A5E',
    content: `
      <p>When I joined Greenspoon as HR Manager, one of my first mandates was to digitise HR operations. We were running a 200-person workforce on a patchwork of spreadsheets, WhatsApp threads, and manual processes.</p>
      <h3>Choosing the Right System</h3>
      <p>We evaluated several HRIS platforms before landing on Horilla — an open-source system that gave us the flexibility to configure it for our specific Kenyan compliance needs, including NHIF, NSSF, and PAYE workflows.</p>
      <h3>The Adoption Challenge</h3>
      <p>What worked: champions in every department, a parallel-run period, fast feedback loops, and clear communication about what the system would do for employees directly.</p>
      <h3>The Results</h3>
      <p>Within two months: 100% adoption, 80–90% of HR workflows digitised, and manual HR administration down by 50%.</p>
    `,
  },
  {
    slug: 'building-culture-intentionally',
    tag: 'Culture',
    title: 'Building Culture Intentionally — Not by Accident',
    excerpt: "Culture isn't a values poster on the wall. It's what happens at 4pm on a Friday when no one's watching.",
    date: 'February 2025',
    readTime: '6 min read',
    icon: '🌱',
    color: '#1A3D2B',
    content: `
      <p>Every company has a culture. The question is whether it's the culture you chose, or the one that emerged by default. Most cultures are accidental — shaped by the founders' personalities, early hires, and the pressures of growth.</p>
      <h3>Culture Is Behavioural, Not Declarative</h3>
      <p>Culture lives in who gets promoted and why, how decisions get made, what behaviours get rewarded, and how people treat each other under pressure.</p>
      <h3>Designing Culture Deliberately</h3>
      <p>Intentional culture starts with honest diagnosis, then structural reinforcement — making the desired behaviours the path of least resistance. Culture change operates on a 12–18 month cycle at minimum.</p>
    `,
  },
  {
    slug: 'hidden-cost-bad-hiring',
    tag: 'Talent',
    title: 'The Hidden Cost of a Bad Hiring Process',
    excerpt: "Reactive hiring is expensive — not just financially, but in culture, productivity, and management overhead.",
    date: 'January 2025',
    readTime: '5 min read',
    icon: '🎯',
    color: '#3D2B0A',
    content: `
      <p>The average cost of a bad hire is estimated at 30% of that employee's annual salary. But the real cost is rarely captured in spreadsheets: management time, team morale, and institutional knowledge lost.</p>
      <h3>Why Hiring Goes Wrong</h3>
      <p>Bad hires are rarely the candidate's fault. Common causes: job descriptions that don't reflect the role, no structured criteria, hiring for urgency rather than fit, weak onboarding.</p>
      <h3>What a Structured Hiring Process Looks Like</h3>
      <p>It starts with a clear success profile, uses consistent interview scorecards, and includes a real onboarding experience. The result: faster, better decisions and far less fallout.</p>
    `,
  },
  {
    slug: 'wellness-as-business-strategy',
    tag: 'Wellness',
    title: "Why Employee Wellness Is a Business Strategy, Not a Perk",
    excerpt: "Introducing a menstrual leave policy wasn't just the right thing to do — it was a signal that changed how people experienced the organisation.",
    date: 'December 2024',
    readTime: '4 min read',
    icon: '💡',
    color: '#1A2A3D',
    content: `
      <p>When I introduced a menstrual leave policy at Adanian Labs, the most common reaction was "is this really necessary?" But that question misses the point entirely.</p>
      <h3>It's About Signal, Not Just Policy</h3>
      <p>A policy like this sends a signal: we see you, we acknowledge your experience, and we've built a workplace that accommodates human reality.</p>
      <h3>The Business Case</h3>
      <p>Organisations that invest in genuine employee wellness see lower turnover, higher engagement, reduced presenteeism, and a stronger employer brand. Replacing an employee costs 50–200% of their annual salary.</p>
    `,
  },
  {
    slug: 'okrs-for-hr-teams',
    tag: 'OKRs',
    title: 'Making OKRs Work for HR Teams',
    excerpt: "HR OKRs often fail because they're output-focused rather than outcome-focused.",
    date: 'November 2024',
    readTime: '5 min read',
    icon: '📊',
    color: '#2D1A00',
    content: `
      <p>At Greenspoon, I inherited an HR function with no formal OKR framework. The first draft was full of activity metrics — number of trainings, policies updated. These are outputs, not outcomes.</p>
      <h3>What Good HR OKRs Look Like</h3>
      <p>Good HR OKRs are tied to business outcomes: reduce voluntary turnover from 22% to 15%, achieve 90% manager satisfaction, reduce time-to-hire to 25 days.</p>
      <h3>The 90% Completion Rate</h3>
      <p>At Greenspoon we achieved 90% OKR completion in our first formal cycle through quarterly reviews focused on outcomes, not activity.</p>
    `,
  },
];
