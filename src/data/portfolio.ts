import type {
  Greeting,
  SocialLinks,
  SkillGroup,
  ToolEntry,
  ExperienceEntry,
  ProjectEntry,
  EducationEntry,
  FeedbackEntry,
} from "./types";

/**
 * ---------------------------------------------------------------
 * PORTFOLIO CONFIG
 * ---------------------------------------------------------------
 * This is the single file to edit when your details change.
 * Nothing in /components should need to change for a content update.
 * ---------------------------------------------------------------
 */

export const greeting: Greeting = {
  name: "Mark Joseph Cabuquit",
  displayName: "Mark",
  location: "Mandaue City, Cebu, Philippines",
  title: "Software Engineer",
  description:
    "10 years building Android apps in Kotlin and Java, with Flutter for cross-platform work and React / Next.js on the web. I care more about a codebase being correct than a resume sounding impressive — that's the whole design principle behind this site.",
  resumeLink: "https://mark-joseph-cabuquit-flowcv-resume-2026-05-23.tiiny.site/",
  yearsExperience: 10,
};

export const socialLinks: SocialLinks = {
  email: "mailto:cabuquit.markjoseph@gmail.com",
  github: "https://github.com/mjcabuquit",
  linkedin: "https://www.linkedin.com/in/mark-joseph-cabuquit-b7803098/",
};

export const skillGroups: SkillGroup[] = [
  {
    category: "mobile",
    items: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "MVVM / MVI", "Flutter"],
  },
  {
    category: "web",
    items: ["React", "TypeScript", "Next.js", "Node.js", "Ruby on Rails", "PHP / Laravel"],
  },
  {
    category: "data",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  },
];

export const tools: ToolEntry[] = [
  { name: "Claude Code", note: "day-to-day pair programming & refactors" },
  { name: "Git", note: "version control" },
  { name: "Android Studio", note: "mobile IDE" },
  { name: "VS Code", note: "web IDE" },
];

export const experience: ExperienceEntry[] = [
  {
    version: "v1.2.0",
    role: "Front-End Developer",
    company: "Pull-Up LLC",
    companyLink: "https://www.joinpullup.com/",
    companyLogo: "/img/icons/common/pullup.svg",
    date: "Jun 2026 — Jul 2026",
    status: "contract",
    statusLabel: "contract",
    summary:
      "Remote front-end contract work on the Niches feature and an admin panel, using React, TypeScript, and Supabase.",
    highlights: [
      "Shipped the Niches feature end-to-end alongside an internal admin panel",
      "Implemented Sign in with Apple through Supabase auth, including Apple Developer console setup",
      "Diagnosed and resolved a Supabase OAuth provider validation error",
    ],
  },
  {
    version: "v1.1.0",
    role: "Senior Android Developer",
    company: "FeiWin",
    companyLogo: "/img/icons/common/feiwin.jpg",
    date: "Mar 2026 — May 2026",
    status: "contract",
    statusLabel: "fixed-term",
    summary:
      "Fixed-term Android contract focused on feature delivery and stability ahead of release.",
    highlights: [
      "Built new features and resolved application bugs under release deadlines",
      "Worked closely with QA to verify fixes and prevent regressions",
    ],
  },
  {
    version: "v1.0.0",
    role: "Software Engineer",
    company: "Nerubia Web Solutions Inc.",
    companyLogo: "/img/icons/common/nerubia.png",
    date: "Mar 2016 — Mar 2026",
    status: "stable",
    statusLabel: "10 years, full-time",
    summary:
      "A decade at one company, split roughly into two chapters: ~6 years as an outsourced Android developer on the Home Credit Philippines account, then a transition into a broader Software Engineer role covering React and Next.js web work.",
    highlights: [
      "Owned Android development on the Home Credit Philippines lending app across its Native and Flutter versions",
      "Integrated REST APIs and Firebase, optimized performance, and maintained MVVM architecture",
      "Transitioned into web development, building responsive UI in React and Next.js",
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    build: "build 006",
    name: "Pull-Up — Niches",
    tag: "web · react · supabase",
    desc: "Niches feature and admin panel for Pull-Up, including Sign in with Apple via Supabase auth.",
    link: "https://www.joinpullup.com/",
  },
  {
    build: "build 005",
    name: "Home Credit Philippines",
    tag: "flutter · ios · android",
    desc: "Flutter rewrite of the Home Credit lending app, extending iPhone support and reach into India, Indonesia, and Vietnam.",
    link: "https://apps.apple.com/ph/app/home-credit-philippines/id1577894172",
  },
  {
    build: "build 004",
    name: "Home Credit Philippines (Native)",
    tag: "android · java · kotlin",
    desc: "The original native Android lending app: loans, e-wallet, shopping, card management, and virtual credit card payments for the Philippine market.",
  },
  {
    build: "build 003",
    name: "Finance App",
    tag: "android · java",
    desc: "Native Android finance app covering e-wallet services, remittances, and everyday digital transactions.",
  },
  {
    build: "build 002",
    name: "iAssess",
    tag: "web · android · ios",
    desc: "Online talent assessment platform for administering psychometric tests, managing candidates, and generating hiring analytics.",
    link: "https://candidate.iassessonline.com/user/login/candidate",
  },
  {
    build: "build 001",
    name: "KH360",
    tag: "web · hr tooling",
    desc: "360-degree performance review platform aggregating peer, manager, and HR feedback into scored reports with z-score visualizations, plus HR tools for timesheets and leave tracking.",
  },
];

export const education: EducationEntry[] = [
  {
    school: "University of San Carlos — Talamban",
    credential: "Certificate in Computer Technology, Major in Software Development",
    duration: "Apr 2013 — Apr 2016",
  },
];

export const feedback: FeedbackEntry[] = [
  {
    name: "Christine Marie Cornelio",
    role: "Scrum Master, Nerubia Web Solutions Inc.",
    feedback:
      "Mark was highly dependable, technically skilled, and consistently delivered on his commitments. He worked professionally, adapted well to feedback, and was always proactive in solving challenges.",
  },
];

export const seo = {
  title: "Mark Joseph Cabuquit — Software Engineer",
  description: greeting.description,
  url: "https://mjcabuquit-porfolio-flame-zeta.vercel.app/",
};
