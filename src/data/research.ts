import { Research } from '@/types';

export const research: Research = {
    title: '您的碩士論文標題',
    author: '謝子尉',
    advisor: '指導教授姓名',
    department: '國立中央大學 資訊工程學系',
    date: '2025 年 7 月',
    sections: [
        {
            id: 'abstract',
            title: '摘要',
            content: `
請在此填寫您的論文摘要...

本研究旨在探討...

**關鍵字**：關鍵字1、關鍵字2、關鍵字3
      `.trim()
        },
        {
            id: 'motivation',
            title: '研究動機',
            content: `
### 研究背景

請在此描述研究背景...

### 問題陳述

請在此描述要解決的問題...

### 研究目標

請在此描述研究目標...
      `.trim()
        },
        {
            id: 'literature',
            title: '文獻回顧',
            content: `
### 相關研究

請在此回顧相關研究...

### 技術背景

請在此描述技術背景...

### 現有方法的限制

請在此描述現有方法的限制...
      `.trim()
        },
        {
            id: 'model',
            title: '研究方法與模型',
            content: `
### 系統架構

請在此描述系統架構...

### 模型設計

請在此描述模型設計...

### 實作細節

請在此描述實作細節...
      `.trim()
        },
        {
            id: 'results',
            title: '結果分析',
            content: `
### 實驗設置

請在此描述實驗設置...

### 評估指標

請在此描述評估指標...

### 實驗結果

請在此描述實驗結果...

### 討論

請在此進行討論...
      `.trim()
        },
        {
            id: 'conclusion',
            title: '結論',
            content: `
### 研究貢獻

請在此描述研究貢獻...

### 研究限制

請在此描述研究限制...

### 未來展望

請在此描述未來展望...
      `.trim()
        }
    ]
};