import { Research } from '@/types';

export const research: Research = {
  title: '動態因果網絡於股票報酬預測之建構與應用',
  author: '謝子尉',
  advisor: '邱信瑜',
  department: '國立中央大學 資訊工程學系',
  date: '2025 年 12 月',
  sections: [
    {
      id: 'abstract',
      title: '摘要(暫定)',
      content: `


**關鍵字**：(暫定)
      `.trim()
    },
    {
      id: 'motivation',
      title: '研究動機(暫定)',
      content: `
### 研究背景
傳統的股票圖結構多侷限於同行業或上下游關係，且基於行業或股權等靜態屬性建構，無法捕捉股票報酬間的時序傳導效應，可能僅反映同期相關性而非因果聯繫。


      `.trim()
    },
    {
      id: 'literature',
      title: '文獻回顧(暫定)',
      content: `
### 相關研究

Xiang, S., Cheng, D., Shang, C., Zhang, Y., & Liang, Y. (2022). Temporal and Heterogeneous Graph Neural Network for Financial Time Series Prediction. *Proceedings of the 31st ACM International Conference on Information and Knowledge Management (CIKM'22)*

Kim, R., So, C. H., Jeong, M., Lee, S., Kim, J., & Kang, J. (2019). HATS: A Hierarchical Graph Attention Network for Stock Movement Prediction. *arXiv preprint arXiv:1908.07999*.

Feng, F., He, X., Wang, X., Luo, C., Liu, Y., & Chua, T. S. (2019). Temporal Relational Ranking for Stock Prediction. *ACM Transactions on Information Systems (TOIS)*, 37(2), 1-30. 


      `.trim()
    },
    {
      id: 'model',
      title: '研究方法與模型(暫定)',
      content: `
### 實作細節
運用統計因果分析方法，結合市場風險因子識別股票間的先後影響關係，以此結果作為圖神經網絡的輸入，並與其他替代結構進行預測與交易績效比較。

      `.trim()
    },
    {
      id: 'results',
      title: '結果分析',
      content: `
### 預期成果
* 分析高出度與高入度股票的特性，檢視後者是否具較高可預測性
* 比較因果圖與其他圖結構在預測準確率及策略績效上的表現
* 檢驗牛熊市期間圖結構密度與連接數的差異
      `.trim()
    }
  ]
};