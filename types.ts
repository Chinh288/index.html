
export enum Tag {
  LAB = 'LAB',
  CTF = 'CTF',
  PROJECT = 'PROJECT',
  CERT = 'CERT',
  READING = 'READING',
  NOTE = 'NOTE'
}

export enum SkillLevel {
  BASIC = 'basic',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced'
}

export interface Activity {
  id: string;
  date: string;
  title: string;
  tags: Tag[];
  level: SkillLevel;
  content: string;
  images?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  content: string;
  images?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verificationUrl?: string;
  content: string;
  images?: string[];
}
