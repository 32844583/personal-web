import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    key: 'tsmc',
    title: 'TSMC Intelligent Manufacturing Center',
    subtitle: 'Summer Internship | Jul 2025 - Sep 2025',
    description: 'Developed QueryMaster, an intelligent Teams Chatbot powered by Langchain Agent to streamline daily operational workflows across multiple manufacturing fabs.',
    points: [
      'Integrated Kibana, Prometheus, and databases as dynamic tools for Agent-driven queries',
      'Deployed chatbot to multiple fabs with traffic splitting via Azure DevOps',
      'Estimated to save engineers significant manual operation time and boost efficiency'
    ],
    techs: ['FastAPI', 'Teams Bot', 'Langchain', 'Azure DevOps', 'k8s', 'ArgoCD']
  },
  {
    key: 'research',
    title: 'Intelligence Financial Analysis Lab',
    subtitle: 'Research Assistant | Sep 2024 - Jul 2025',
    description: 'Advanced financial forecasting using Spatio-Temporal Graph Neural Networks to predict stochastic dominance relationships between stock returns.',
    points: [
      'Integrated stock features and options market data into GNN architecture',
      'Optimized neural network performance for cross-sectional stock prediction',
      'Achieved superior accuracy compared to multivariate statistical models'
    ],
    techs: ['PyTorch', 'TensorFlow', 'Python']
  },
  {
    key: 'itri',
    title: 'ITRI Information and Communications Technologies',
    subtitle: 'Summer Internship | Jul 2023 - Sep 2023',
    description: 'Built an annotation platform for generating training data for AI sign language recognition systems.',
    points: [
      'Designed user-centric interface with search and frame control features',
      'Optimized rendering pipeline to solve frame synchronization issues',
      'Gained practical experience in industry development practices and code review'
    ],
    techs: ['Flask', 'JavaScript', 'Bootstrap', 'Git']
  }
];