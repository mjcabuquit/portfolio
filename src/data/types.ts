export type EmploymentStatus = "stable" | "contract";

export interface Greeting {
  name: string;
  displayName: string;
  location: string;
  title: string;
  description: string;
  resumeLink: string;
  yearsExperience: number;
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ToolEntry {
  name: string;
  note: string;
}

export interface ExperienceEntry {
  version: string;
  role: string;
  company: string;
  companyLink?: string;
  companyLogo?: string;
  date: string;
  status: EmploymentStatus;
  statusLabel: string;
  summary: string;
  highlights: string[];
}

export interface ProjectEntry {
  build: string;
  name: string;
  tag: string;
  desc: string;
  link?: string;
  github?: string;
}

export interface EducationEntry {
  school: string;
  credential: string;
  duration: string;
}

export interface FeedbackEntry {
  name: string;
  role: string;
  feedback: string;
}
