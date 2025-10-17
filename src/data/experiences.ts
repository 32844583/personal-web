import { Experience } from '@/types';

export const experiences: Experience[] = [
{
    key: 'research',
    title: '智慧金融分析實驗室',
    subtitle: '計劃助理 | Sep 2024 - Now',
    points: [
      '探索不同時空卷積神經網路應用於股票預測的準確度作為基線模型',
      '引入由不同面相組成的股票關係網絡，讓模型能動態學習不同公司之間影響力的強弱。',
      '透過論文了解不同模型的運作原理，加深對實驗設計以及模型特點的認識'
    ],
    techs: ['PyTorch', 'TensorFlow', 'Python']
  },
  {
    key: 'tsmc',
    title: '台灣積體電路製造有限股份公司 基礎平台工程部',
    subtitle: '暑期實習 | Jul 2025 - Sep 2025',
    points: [
      '開發 Teams Chatbot 以簡化日常維運流程，後端採用 Langchain Agent 驅動。',
      '串接 Kibana、Prometheus 及資料庫作為 Agent 的工具，並透過 Azure DevOps 部署至各廠分流。',
      '此 Chatbot 應用預估能為工程師節省90%手動操作時間，顯著提升工作效率。'
    ],
    techs: ['FastAPI', 'Teams Bot', 'Langchain', 'Azure DevOps', 'k8s', 'ArgoCD']
  },
  {
    key: 'itri',
    title: '財團法人工業技術研究院 資訊與通訊所',
    subtitle: '暑期實習 | Jul 2023 - Sep 2023',
    points: [
      '開發人工標註手語平台，以協助 AI 演算法工程師生成訓練資料。',
      '平台同時整合了搜尋及影格控制等輔助功能，以提升標註流程的效率與順暢度。',
    ],
    techs: ['Flask', 'JavaScript', 'Bootstrap', 'Git']
  }
];