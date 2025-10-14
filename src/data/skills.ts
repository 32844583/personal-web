import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'MLOps & Deployment',
    tools: ['Azure DevOps', 'Kubernetes', 'ArgoCD', 'Harbor', 'GCP']
  },
  {
    title: 'Machine Learning',
    tools: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'PyCaret', 'NumPy']
  },
  {
    title: 'Backend Development',
    tools: ['FastAPI', 'Django', 'Flask', 'Langchain']
  },
  {
    title: 'Data & Monitoring',
    tools: ['Kibana', 'Prometheus', 'Python', 'Pandas']
  },
  {
    title: 'DevOps & Infrastructure',
    tools: ['Docker', 'Git', 'PostgreSQL', 'SQLite']
  },
  {
    title: 'Frontend & Tools',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
  }
];