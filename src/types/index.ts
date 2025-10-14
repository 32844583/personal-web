// 專案的類型定義

export interface Project {
  id: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  period: string;
  github: string;
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

export interface SkillCategory {
  title: string;
  tools: string[];
}