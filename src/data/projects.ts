import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'querymaster',
    title: 'QueryMaster Chatbot',
    description: '在使用者提出問題後，由 Agent 調用 Tool 來調用各廠 Kibana、Prometheus、Database的資訊，幫助工程師節省資料庫配置與流量盤點的時間，並透過 Azure DevOps 部署到各廠以分流。',
    period: 'Jul 2025 - Sep 2025',
    type: 'private',
    screenshot: '/screenshots/querymaster.png',
    features: [
      '開發 Teams Chatbot 以簡化日常維運流程，後端採用 Langchain Agent 驅動。',
      '串接 Kibana、Prometheus 及資料庫作為 Agent 的工具，並透過 Azure DevOps 部署至各廠分流。',
      '此 Chatbot 應用預估能為工程師節省 90% 手動操作時間，顯著提升工作效率。'
    ],
    tech: ['FastAPI', 'Langchain', 'Teams Bot', 'Kibana', 'Prometheus', 'k8s', 'ArgoCD', 'Azure DevOps', 'Harbor'],
    challenges: [
      {
        challenge: '工具導向不夠精確',
        solution: '在有限的模型資源下，我認為可以在定義每個 Tool 時，為其撰寫極其清晰、具體的描述，暫時性解決這個問題。'
      },
      {
        challenge: 'Agent 無法同時串接多個工具',
        solution: '在有限的模型資源下，我認為可以將常見的多步驟流程先封裝成一個新的、更強大的 Tool，暫時性解決這個問題。'
      }
    ]
  },
  // {
  //   id: 'fin-stgcn',
  //   title: 'Financial STGCN',
  //   description: '本研究旨在探討不同時空卷積神經網路（Spatio-Temporal Graph Convolutional Networks, STGCN）在股票價格預測上的應用與準確度。研究核心在於利用股票的歷史價格資料來訓練與評估多個基線模型。為了提升預測效能，本專案不僅比較了現有模型的表現，更進一步針對金融領域的特性進行改良，引入注意力機制與量化指標來定義公司間的關聯性，成功驗證了結合產業知識圖譜的先進模型能有效提升預測的準確度。',
  //   period: 'Sep 2024 - Jul 2025',
  //   type: 'private',
  //   screenshot: '/screenshots/fin-stgcn.png',
  //   features: [
  //     '系統性地研究並比較了多種時空卷積神經網路模型在股票預測領域的表現。',
  //     '引入注意力機制（Attention Mechanism），讓模型能動態學習不同時間點下，公司之間影響力的強弱。',
  //     'ASTGCN 模型在整合上下游知識圖譜後，於四項關鍵評估指標上全面超越其他基線模型'
  //   ],
  //   tech: ['PyTorch', 'TensorFlow', 'Python', 'NumPy', 'Pandas'],
  //   challenges: [
  //     {
  //       challenge: '金融知識圖譜的量化困難',
  //       solution: '引入注意力機制 (Attention Mechanism)動態地學習在不同時間點，上下游公司之間相互影響的關係強度。採用了股票技術面的相似度作為圖譜中的邊權重 (edge weights)'
  //     }
  //   ]
  // },
  {
    id: 'stockmate',
    title: 'Stockmate',
    description: '此平台擁有回測功能協助新手理解技術指標、參數與績效的關聯，並提供交易分析與檢測功能讓使用者上傳交易記錄進行評估。此外，系統亦包含策略管理及即時追蹤模組，以支持使用者建立及監控其金融目標的交易策略表現。',
    period: 'Jun 2023 - Dec 2023',
    type: 'public',
    github: 'https://github.com/32844583/NCU_1122_Project_Stockmate',
    screenshot: '/screenshots/stockmate.png',
    features: [
      '使用者可以自由調整技術指標與參數，並立即看到策略在歷史數據上的表現，加速學習與驗證過程。',
      '使用者可上傳自己的交易紀錄，系統將進行分析與評估',
      '提供儀表板或監控模組，即時追蹤已部署策略的表現'
    ],
    tech: ['Flask', 'SQLite', 'Python', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Git'],
    challenges: [
      {
        challenge: '非典型的團隊合作與目標凝聚',
        solution: ' 解決此問題的關鍵在於策略性地轉變領導目標。我將首要任務從追求技術創新調整為確保團隊良好合作，並導入了工廠模式，從源頭設計了一個易於擴充與分工的模組化架構。'
      }
    ]
  },
  {
    id: 'annotation-platform',
    title: 'Annotation Platform',
    description: '此專案旨在開發一個為 AI 演算法工程師量身打造的手語訓練資料標註平台。平台的核心功能是讓使用者能夠高效地處理影片資料，透過選定影片中的特定區間、標註其對應的手語含義，並將這些標註好的資料片段新增至資料庫中。此系統不僅簡化了資料生成的流程，更透過精準的輔助工具，旨在提升手語辨識模型訓練資料的品質與一致性。',
    period: 'Jul 2023 - Sep 2023',
    type: 'private',
    screenshot: '/screenshots/annotation-platform.png',
    features: [
      '提供直觀的介面，讓使用者可以精確選取影片的起始與結束時間點，以擷取特定的手語動作片段。',
      '提供逐幀 (Frame-by-frame) 播放與控制功能，讓標註者能進行更細緻、更準確的操作。',
      '根據實務需求，系統加入了必要的操作警示與提醒，確保使用者操作的正確性，提升整體使用體驗。'
    ],
    tech: ['Flask', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Git', 'Bitbucket'],
    challenges: [
      {
        challenge: '畫面顯示與即時幀率的非同步問題',
        solution: '在每一次渲染操作前，加入了準備狀態的判斷程序，這個程序會確保當前畫格已完全渲染完成後，才允許使用者進行下一步操作。雖然這個機制稍微犧牲了播放的流暢度，但它成功確保了畫面的精準度，為高品質的數據標註提供了可靠的技術保障。'
      },
    ]
  },
  {
    id: 'advanced-rag',
    title: 'Enterprise Q&A System',
    description: '這份專案記錄了我探索檢索增強生成（Retrieval-Augmented Generation, RAG）技術的過程。專案從基礎的 Naive RAG 開始，逐步加入了能處理圖文資料的 Multimodal RAG，並嘗試透過 Graph RAG 來理解與查詢實體間的複雜關係，藉此了解不同 RAG 方法在問答系統中的效果。',
    period: 'Feb 2025 - Jun 2025',
    type: 'public',
    github: 'https://github.com/32844583/NCU_1132_Course_FinancialManagement',
    screenshot: '/screenshots/advanced-rag.png',
    features: [
      '根據上傳的公司文件，以自然語言回答關於公司營運、技術等基本問題。',
      '支援處理包含圖文的財報，能從表格圖片中準確提取關鍵財務數據並進行問答。',
      '自動從文本中提取公司實體與其關係並建構知識圖譜，實現對供應鏈、合作夥伴等複雜關聯的深度查詢。'
    ],
    tech: ['LlamaIndex', 'FAISS', 'LangChain', 'Gemini', 'GPT', 'Vector Database', 'Knowledge Graph'],
    challenges: [
      {
        challenge: '如何處理財報中的表格圖片資訊？',
        solution: '利用多模態模型 Gemini 將每張表格圖片生成一段精確的文字摘要，接著再將這份摘要與使用者的查詢文字，分別轉換為文字嵌入向量。最終，系統只需比對這兩種同質性的文字向量，即可快速找出與問題最相關的表格圖片。'
      },
      {
        challenge: '如何回答關於實體間複雜關係的問題？',
        solution: '設計並實作 Graph RAG。在資料處理階段，我們不僅將文件做切割與向量化，還額外進行了「實體與關係提取」。系統會自動識別出文件中的公司、人物等實體，以及它們之間的關係（如：供應、合作、投資），並將這些資訊存入一個知識圖譜。當使用者提問時，系統會先在圖譜中查詢相關的實體與路徑，再結合檢索到的文本，讓 LLM 能生成更貼近問題脈絡、更具參考價值的答案。'
      }
    ]
  },
  {
    id: 'diary-linebot',
    title: 'Diary Line Bot',
    description: '這份專案記錄了我探索檢索增強生成（Retrieval-Augmented Generation, RAG）技術的過程。專案從基礎的 Naive RAG 開始，逐步加入了能處理圖文資料的 Multimodal RAG，並嘗試透過 Graph RAG 來理解與查詢實體間的複雜關係，藉此了解不同 RAG 方法在問答系統中的效果。',
    period: 'Feb 2022 - Jun 2022',
    type: 'public',
    github: 'https://github.com/32844583/NCU_1112_Course_DiaryBot',
    screenshot: '/screenshots/diary-linebot.png',
    features: [
      '使用者可以在 Line Bot 新增、修改、刪除日記。',
      '新增、修改日記可以得到 ChatGPT 小天使的回覆。',
      'AI 會分析日記蘊含的情緒並繪成圖表。'
    ],
    tech: ['Django', 'PostgreSQL', 'Nginx', 'Line Developer', 'Openai API', 'Matplotlib'],
    challenges: [
      {
        challenge: '缺乏繁體中文的情感分析模型',
        solution: '除了串接 Google 翻譯 API，也可以透過提示詞引導模型直接判斷分析情感。'
      },
      {
        challenge: 'AI 回覆模式缺乏一致性',
        solution: '透過精心設計固定的提示詞模板 (Prompt Template)，可以更有效地引導和約束大型語言模型的輸出，能讓 AI 小天使的回覆風格、語氣和內容結構都標準化，從而提供更優質、更穩定的使用者體驗。'
      }
    ]
  }
];