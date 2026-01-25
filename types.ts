export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
  category: 'AI' | 'Web' | 'Full Stack' | 'Python' | 'Other';
  featured: boolean;
  problemStatement?: string;
  challenges?: string;
  myRole?: string;
  date: string; // ISO 8601 format YYYY-MM-DD
  image?: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'Internship' | 'Full-time' | 'Contract' | 'Part-time' | 'Part-time / Community';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon?: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export enum GeminiMode {
  Chat = 'Chat',
  Search = 'Search',
  Maps = 'Maps',
  Video = 'Video'
}