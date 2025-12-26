// 專案的類型定義

export interface Challenge {
  challenge: string;
  solution: string;
}

export interface WorkItem {
  id: string;

  // 基本資訊
  title: string;           // 專案名稱
  organization?: string;   // 所屬組織（公司/學校/實驗室）
  role?: string;           // 角色
  period: string;          // 時間區間

  // 分類
  type: 'public' | 'private';

  // 內容
  summary: string;         // 簡短描述（卡片用）
  description: string;     // 詳細描述（Modal 用）
  highlights: string[];    // 重點/成果

  // 技術與挑戰
  tech: string[];
  challenges: Challenge[];

  // 連結與圖片
  screenshot?: string;
  github?: string;
  externalLink?: string;
}

// 保留舊的類型以防其他地方使用
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

export interface Experience {
  key: string;
  title: string;
  subtitle: string;
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