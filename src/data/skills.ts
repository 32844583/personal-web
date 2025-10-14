import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    tools: [
      { name: 'Python', icon: '/icons/python.svg', proficiency: 95 },
      { name: 'JavaScript', icon: '/icons/javascript.svg', proficiency: 82 },
      { name: 'TypeScript', icon: '/icons/typescript.svg', proficiency: 78 },
      { name: 'SQL', icon: '/icons/sql.svg', proficiency: 85 },
      { name: 'HTML/CSS', icon: '/icons/html.svg', proficiency: 83 }
    ]
  },
  {
    title: 'ML/AI',
    tools: [
      { name: 'PyTorch', icon: '/icons/pytorch.svg', proficiency: 90 },
      { name: 'TensorFlow', icon: '/icons/tensorflow.svg', proficiency: 85 },
      { name: 'Scikit-learn', icon: '/icons/sklearn.png', proficiency: 88 },
      { name: 'Langchain', icon: '/icons/langchain.png', proficiency: 80 },
      { name: 'NumPy', icon: '/icons/numpy.svg', proficiency: 92 },
      { name: 'Pandas', icon: '/icons/pandas.svg', proficiency: 90 }
    ]
  },
  {
    title: 'Backend',
    tools: [
      { name: 'FastAPI', icon: '/icons/fastapi.svg', proficiency: 90 },
      { name: 'Flask', icon: '/icons/flask.svg', proficiency: 85 },
      { name: 'Django', icon: '/icons/django.svg', proficiency: 75 },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', proficiency: 80 },
      { name: 'SQLite', icon: '/icons/sqlite.png', proficiency: 85 }
    ]
  },
  {
    title: 'DevOps',
    tools: [
      { name: 'Docker', icon: '/icons/docker.svg', proficiency: 85 },
      { name: 'Kubernetes', icon: '/icons/kubernetes.svg', proficiency: 80 },
      { name: 'Git', icon: '/icons/git.svg', proficiency: 90 },
      { name: 'ArgoCD', icon: '/icons/argocd.png', proficiency: 75 },
      { name: 'Harbor', icon: '/icons/harbor.svg', proficiency: 70 }
    ]
  },
  {
    title: 'Cloud',
    tools: [
      { name: 'Azure DevOps', icon: '/icons/azure-devops.png', proficiency: 85 },
      { name: 'GCP', icon: '/icons/gcp.svg', proficiency: 65 },
      { name: 'Kibana', icon: '/icons/kibana.svg', proficiency: 75 },
      { name: 'Prometheus', icon: '/icons/prometheus.svg', proficiency: 70 }
    ]
  },
  {
    title: 'Frontend',
    tools: [
      { name: 'Next.js', icon: '/icons/nextjs.svg', proficiency: 75 },
      { name: 'React', icon: '/icons/react.svg', proficiency: 78 },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg', proficiency: 75 },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', proficiency: 80 },
      { name: 'jQuery', icon: '/icons/jquery.svg', proficiency: 70 }
    ]
  }
];