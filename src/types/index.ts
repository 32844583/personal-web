// 專案的類型定義

export interface Project {
  id: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  period: string;
  github: string;
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