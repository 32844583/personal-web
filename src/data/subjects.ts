import { Subject, SubjectCategory } from '@/types';

export const subjectCategories: SubjectCategory[] = [
  {
    title: '資訊理論',
    subjects: [
      { name: '資料與檔案結構', type: '必修', score: 85, grade: '大二' },
      { name: '演算法', type: '必修', score: 88, grade: '大四' },
      { name: '計算機概論', type: '必修', score: 91, grade: '大一' },
      { name: '資訊管理導論', type: '必修', score: 90, grade: '大一' },
      { name: '作業系統(Unix)', type: '必修', score: 73, grade: '大二' },
      { name: '作業系統操作與管理(Linux)', type: '選修', score: 92, grade: '大一' },
      { name: '資料庫管理', type: '必修', score: 98, grade: '大一' },
      { name: '程式設計(Java)', type: '必修', score: 91, grade: '大二' },
      { name: '程式設計(JavaScript)', type: '必修', score: 98, grade: '大一' },
      { name: '程式設計概念與方法(C)', type: '必修', score: 94, grade: '大一' },
      { name: '企業資料通訊', type: '必修', score: 80, grade: '大一' },
      { name: '資訊系統發展專題I', type: '必修', score: 92, grade: '大三' },
      { name: '資訊系統發展專題II', type: '必修', score: 91, grade: '大四' }
    ]
  },
  {
    title: '人工智慧',
    subjects: [
      { name: '機器學習概論', type: '選修', score: 100, grade: '大二' },
      { name: '人工智慧與機器學習', type: '必修', score: 92, grade: '大四' },
      { name: 'AI人工智慧導論', type: '選修', score: 99, grade: '大三' },
      { name: '自然語言處理', type: '選修', score: 96, grade: '大三' },
      { name: '圖像辨識的企業應用', type: '選修', score: 95, grade: '大三' },
      { name: '資料科學與機器學習', type: '選修', score: 90, grade: '碩一' }
    ]
  },
  {
    title: '系統分析設計',
    subjects: [
      { name: '系統分析與設計', type: '必修', score: 94, grade: '大三' },
      { name: '軟體工程I', type: '必修', score: 88, grade: '碩一' },
      { name: '網頁設計', type: '選修', score: 89, grade: '大一' },
    ]
  },
  {
    title: '其他',
    subjects: [
      { name: 'Linux與邊緣運算', type: '選修', score: 100, grade: '大三' },
      { name: '程式設計-Python', type: '選修', score: 89, grade: '大三' },
      { name: 'Java程式設計進階', type: '選修', score: 93, grade: '大四' },
      { name: '進階區塊鏈應用與隱私防護', type: '選修', score: 88, grade: '碩一' }
    ]
  }
];