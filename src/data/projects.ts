import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'querymaster',
    title: 'QueryMaster Chatbot',
    emoji: '🤖',
    color: 'from-blue-600 to-cyan-600',
    description: 'Intelligent Teams bot powered by Langchain Agent to streamline daily operational workflows at TSMC manufacturing fabs.',
    period: 'Jul 2025 - Sep 2025',
    github: 'https://github.com/yourusername/querymaster',
    screenshot: '/screenshots/querymaster.png', // 添加截圖路徑
    features: [
      'Integrated Kibana, Prometheus, and databases as dynamic tools for Agent-driven queries',
      'Deployed to multiple fabs with traffic splitting via Azure DevOps',
      'Real-time operational data retrieval for production environments'
    ],
    tech: ['FastAPI', 'Langchain', 'Teams Bot', 'Kibana', 'Prometheus', 'k8s', 'ArgoCD', 'Azure DevOps', 'Harbor'],
    challenges: [
      {
        challenge: 'Multi-fab Deployment',
        solution: 'Implemented traffic splitting through Azure DevOps pipelines to safely roll out updates across different manufacturing facilities'
      },
      {
        challenge: 'Real-time Data Integration',
        solution: 'Designed Agent tools to efficiently query multiple data sources (Kibana, Prometheus, databases) with proper caching and rate limiting'
      }
    ]
  },
  {
    id: 'gnn-predictor',
    title: 'Financial GNN Predictor',
    emoji: '📈',
    color: 'from-purple-600 to-blue-600',
    description: 'Spatio-Temporal Graph Neural Network for predicting stock return dominance using market features and options data.',
    period: 'Sep 2024 - Jul 2025',
    github: 'https://github.com/yourusername/financial-gnn',
    screenshot: '/screenshots/gnn-predictor.png',
    features: [
      'Integrated stock features and options market data into GNN architecture',
      'Achieved superior accuracy compared to multivariate statistical models',
      'Optimized neural network performance for cross-sectional stock prediction'
    ],
    tech: ['PyTorch', 'TensorFlow', 'Python', 'NumPy', 'Pandas'],
    challenges: [
      {
        challenge: 'Model Transfer to Finance Domain',
        solution: 'Adapted traffic prediction models to financial data by creating quantifiable correlation metrics between companies (stock correlations, board member overlaps) as edge weights'
      },
      {
        challenge: 'Feature Representation',
        solution: 'Designed node features to capture both structured stock characteristics and options market signals, enabling better predictions than traditional statistical methods'
      }
    ]
  },
  {
    id: 'stockmate',
    title: 'Stockmate Trading Platform',
    emoji: '💰',
    color: 'from-green-600 to-emerald-600',
    description: 'Comprehensive stock backtesting platform with strategy management and performance analysis tools for traders.',
    period: 'Jun 2023 - Dec 2023',
    github: 'https://github.com/yourusername/stockmate',
    screenshot: '/screenshots/stockmate.png',
    features: [
      'Backtesting engine for technical indicators and trading strategies',
      'Trade analysis and detection with objective performance evaluation',
      'Strategy management and real-time tracking modules for monitoring trading goals'
    ],
    tech: ['Flask', 'SQLite', 'Python', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Git'],
    challenges: [
      {
        challenge: 'Team Coordination with Mixed Availability',
        solution: 'Established factory pattern architecture as a reference for team members, ensuring consistent code style and development efficiency despite schedule conflicts'
      },
      {
        challenge: 'Framework Selection for Rapid Development',
        solution: 'Chose Flask with modular design, providing scaffolding and templates that enabled team members to quickly understand and contribute to different features'
      }
    ]
  },
  {
    id: 'annotation-platform',
    title: 'Sign Language Annotation Platform',
    emoji: '🏷️',
    color: 'from-orange-600 to-red-600',
    description: 'User-friendly platform for annotating sign language video data to support AI training at ITRI.',
    period: 'Jul 2023 - Sep 2023',
    github: 'https://github.com/yourusername/annotation-platform',
    screenshot: '/screenshots/annotation-platform.png',
    features: [
      'Video annotation interface with frame-level control',
      'Search functionality for efficient data navigation',
      'Database integration for training data management'
    ],
    tech: ['Flask', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Git', 'Bitbucket'],
    challenges: [
      {
        challenge: 'Frame Synchronization Issues',
        solution: 'Debugged JavaScript rendering pipeline and added pre-render state validation to fix frame display lag, balancing playback smoothness with annotation accuracy'
      },
      {
        challenge: 'User-Centric Design',
        solution: 'Incorporated auxiliary features like search and frame control, with user operation warnings to prevent data errors'
      }
    ]
  }
];