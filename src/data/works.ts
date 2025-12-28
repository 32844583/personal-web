import { WorkItem } from '@/types';

export const works: WorkItem[] = [
    {
        id: 'tsmc-querymaster',
        title: 'QueryMaster Chatbot',
        organization: '台灣積體電路製造股份有限公司',
        role: '暑期實習 - 基礎平台工程部',
        period: 'Jul 2025 - Sep 2025',
        category: 'internship',
        type: 'private',
        summary: '開發 Teams Chatbot 簡化日常維運流程，預估節省 60% 手動操作案例的時間',
        description: '在使用者提出問題後，由 Agent 調用 Tool 來調用各廠 Kibana、Prometheus、Database 的資訊，幫助工程師節省資料庫配置與流量盤點的時間，並透過 Azure DevOps 部署到各廠以分流。',
        highlights: [
            '開發 Teams Chatbot 以簡化日常維運流程，後端採用 Langchain Agent 驅動',
            '串接 Kibana、Prometheus 及資料庫作為 Agent 的工具',
            '透過 Azure DevOps 部署至各廠分流',
            '此 Chatbot 應用預估能為工程師節省 60% 手動操作案例的時間，顯著提升工作效率'
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
        ],
        screenshot: '/screenshots/querymaster.png'
    },
    {
        id: 'stockmate',
        title: 'Stockmate',
        organization: '中央大學',
        role: '課程專案 - 軟體工程',
        period: 'Jun 2023 - Dec 2023',
        category: 'course',
        type: 'public',
        github: 'https://github.com/32844583/NCU_1122_Project_Stockmate',
        summary: '股票回測與交易分析平台，協助新手理解技術指標與績效關聯',
        description: '此平台擁有回測功能協助新手理解技術指標、參數與績效的關聯，並提供交易分析與檢測功能讓使用者上傳交易記錄進行評估。此外，系統亦包含策略管理及即時追蹤模組，以支持使用者建立及監控其金融目標的交易策略表現。',
        highlights: [
            '使用者可以自由調整技術指標與參數，並立即看到策略在歷史數據上的表現，加速學習與驗證過程',
            '使用者可上傳自己的交易紀錄，系統將進行分析與評估',
            '提供儀表板或監控模組，即時追蹤已部署策略的表現'
        ],
        tech: ['Flask', 'SQLite', 'Python', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Git'],
        challenges: [
            {
                challenge: '非典型的團隊合作與目標凝聚',
                solution: '解決此問題的關鍵在於策略性地轉變領導目標。我將首要任務從追求技術創新調整為確保團隊良好合作，並導入了工廠模式，從源頭設計了一個易於擴充與分工的模組化架構。'
            }
        ],
        screenshot: '/screenshots/stockmate.png'
    },
    {
        id: 'itri-annotation',
        title: 'Annotation Platform',
        organization: '財團法人工業技術研究院',
        role: '暑期實習 - 資訊與通訊所',
        period: 'Jul 2023 - Sep 2023',
        category: 'internship',
        type: 'private',
        summary: '開發手語標註平台，協助 AI 演算法工程師生成訓練資料',
        description: '此專案旨在開發一個為 AI 演算法工程師量身打造的手語訓練資料標註平台。平台的核心功能是讓使用者能夠高效地處理影片資料，透過選定影片中的特定區間、標註其對應的手語含義，並將這些標註好的資料片段新增至資料庫中。此系統不僅簡化了資料生成的流程，更透過精準的輔助工具，旨在提升手語辨識模型訓練資料的品質與一致性。',
        highlights: [
            '開發人工標註手語平台，以協助 AI 演算法工程師生成訓練資料',
            '平台同時整合了搜尋及影格控制等輔助功能，以提升標註流程的效率與順暢度',
            '提供逐幀 (Frame-by-frame) 播放與控制功能，讓標註者能進行更細緻、更準確的操作',
            '根據實務需求，系統加入了必要的操作警示與提醒，確保使用者操作的正確性'
        ],
        tech: ['Flask', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Git', 'Bitbucket'],
        challenges: [
            {
                challenge: '畫面顯示與即時幀率的非同步問題',
                solution: '在每一次渲染操作前，加入了準備狀態的判斷程序，這個程序會確保當前畫格已完全渲染完成後，才允許使用者進行下一步操作。雖然這個機制稍微犧牲了播放的流暢度，但它成功確保了畫面的精準度，為高品質的數據標註提供了可靠的技術保障。'
            }
        ],
        screenshot: '/screenshots/annotation-platform.png'
    },
    {
        id: 'diary-linebot',
        title: 'Diary Line Bot',
        organization: '中央大學',
        role: '課程專案 - 網頁程式設計',
        period: 'Feb 2022 - Jun 2022',
        category: 'course',
        type: 'public',
        github: 'https://github.com/32844583/NCU_1112_Course_DiaryBot',
        summary: '整合 ChatGPT 的日記 Line Bot，提供情緒分析與 AI 回覆功能',
        description: '一個整合 ChatGPT 的智慧日記機器人，使用者可以透過 Line 輕鬆記錄生活，並獲得 AI 小天使的溫暖回覆。系統還會分析日記中的情緒變化，以視覺化圖表呈現。',
        highlights: [
            '使用者可以在 Line Bot 新增、修改、刪除日記',
            '新增、修改日記可以得到 ChatGPT 小天使的回覆',
            'AI 會分析日記蘊含的情緒並繪成圖表'
        ],
        tech: ['Django', 'PostgreSQL', 'Nginx', 'Line Developer', 'OpenAI API', 'Matplotlib'],
        challenges: [
            {
                challenge: '缺乏繁體中文的情感分析模型',
                solution: '除了串接 Google 翻譯 API，也可以透過提示詞引導模型直接判斷分析情感。'
            },
            {
                challenge: 'AI 回覆模式缺乏一致性',
                solution: '透過精心設計固定的提示詞模板 (Prompt Template)，可以更有效地引導和約束大型語言模型的輸出，能讓 AI 小天使的回覆風格、語氣和內容結構都標準化，從而提供更優質、更穩定的使用者體驗。'
            }
        ],
        screenshot: '/screenshots/diary-linebot.png'
    }
];