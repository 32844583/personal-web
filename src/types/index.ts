// 專案的類型定義

export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  type: 'public' | 'private';
  github?: string;
  screenshot?: string;
  features: string[];
  tech: string[];
  challenges: Challenge[];
}

export interface Challenge {
  challenge: string;
  solution: string;
}

export interface Experience {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  techs: string[];
}

export interface Tool {
  name: string;
  icon?: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  tools: Tool[];
}

export interface SkillCategory {
  title: string;
  tools: Tool[];
}

export interface Subject {
  name: string;
  type: '必修' | '選修';
  score: number;
  grade: '大一' | '大二' | '大三' | '大四' | '碩一' | '碩二';
}

export interface SubjectCategory {
  title: string;
  subjects: Subject[];
}