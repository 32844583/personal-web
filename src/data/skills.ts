import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'MLOps & Deployment',
    tools: [
      { name: 'Azure DevOps', icon: '/icons/azure-devops.png', proficiency: 85 },
      { name: 'Kubernetes', icon: '/icons/kubernetes.svg', proficiency: 80 },
      { name: 'ArgoCD', icon: '/icons/argocd.png', proficiency: 75 },
      { name: 'Harbor', icon: '/icons/harbor.svg', proficiency: 70 },
      { name: 'GCP', icon: '/icons/gcp.svg', proficiency: 65 }
    ]
  },
  {
    title: 'Machine Learning',
    tools: [
      { name: 'PyTorch', icon: '/icons/pytorch.svg', proficiency: 90 },
      { name: 'TensorFlow', icon: '/icons/tensorflow.svg', proficiency: 85 },
      { name: 'Scikit-learn', icon: '/icons/sklearn.png', proficiency: 88 },
      { name: 'PyCaret', icon: '/icons/pycaret.png', proficiency: 70 },
      { name: 'NumPy', icon: '/icons/numpy.svg', proficiency: 92 }
    ]
  },
  {
    title: 'Backend Development',
    tools: [
      { name: 'FastAPI', icon: '/icons/fastapi.svg', proficiency: 90 },
      { name: 'Django', icon: '/icons/django.svg', proficiency: 75 },
      { name: 'Flask', icon: '/icons/flask.svg', proficiency: 85 },
      { name: 'Langchain', icon: '/icons/langchain.png', proficiency: 80 }
    ]
  },
  {
    title: 'Data & Monitoring',
    tools: [
      { name: 'Kibana', icon: '/icons/kibana.svg', proficiency: 75 },
      { name: 'Prometheus', icon: '/icons/prometheus.svg', proficiency: 70 },
      { name: 'Python', icon: '/icons/python.svg', proficiency: 95 },
      { name: 'Pandas', icon: '/icons/pandas.svg', proficiency: 90 }
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    tools: [
      { name: 'Docker', icon: '/icons/docker.svg', proficiency: 85 },
      { name: 'Git', icon: '/icons/git.svg', proficiency: 90 },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', proficiency: 80 },
      { name: 'SQLite', icon: '/icons/sqlite.png', proficiency: 85 }
    ]
  },
  {
    title: 'Frontend & Tools',
    tools: [
      { name: 'HTML', icon: '/icons/html.svg', proficiency: 85 },
      { name: 'CSS', icon: '/icons/css.svg', proficiency: 80 },
      { name: 'JavaScript', icon: '/icons/javascript.svg', proficiency: 82 },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg', proficiency: 75 },
      { name: 'Next.js', icon: '/icons/nextjs.svg', proficiency: 75 }
    ]
  }
];