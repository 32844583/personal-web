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
  category: 'internship' | 'course';
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

// Research 相關類型
export interface ResearchSection {
  id: string;
  title: string;
  content: string;  // 直接寫內容
}

export interface Research {
  title: string;
  author: string;
  advisor: string;
  department: string;
  date: string;
  sections: ResearchSection[];
}

// Blog 相關類型
export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  file: string;  // markdown 檔案路徑
}

// Blog 文章索引（不含 content）
export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
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