import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    tools: [
      { name: 'Python', icon: '/icons/python.svg', proficiency: 95 },
      { name: 'JavaScript', icon: '/icons/javascript.svg', proficiency: 30 },
      { name: 'TypeScript', icon: '/icons/typescript.png', proficiency: 30 },
      { name: 'HTML/CSS', icon: '/icons/html.svg', proficiency: 30 }
    ]
  },
  {
    title: 'ML/AI',
    tools: [
      { name: 'PyTorch', icon: '/icons/pytorch.svg', proficiency: 90 },
      { name: 'TensorFlow', icon: '/icons/tensorflow.svg', proficiency: 60 },
      { name: 'Scikit-learn', icon: '/icons/sklearn.png', proficiency: 90 },
      { name: 'Langchain', icon: '/icons/langchain.png', proficiency: 90 },
      { name: 'neo4j', icon: '/icons/neo4j.png', proficiency: 30 }
      { name: 'NumPy', icon: '/icons/numpy.svg', proficiency: 90 },
      { name: 'Pandas', icon: '/icons/pandas.svg', proficiency: 90 }
    ]
  },
  {
    title: 'Backend',
    tools: [
      { name: 'FastAPI', icon: '/icons/fastapi.svg', proficiency: 90 },
      { name: 'Flask', icon: '/icons/flask.svg', proficiency: 90 },
      { name: 'Django', icon: '/icons/django.svg', proficiency: 30 },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', proficiency: 30 },
      { name: 'SQLite', icon: '/icons/sqlite.png', proficiency: 30 }
    ]
  },
  {
    title: 'DevOps',
    tools: [
      { name: 'Docker', icon: '/icons/docker.svg', proficiency: 90 },
      { name: 'Kubernetes', icon: '/icons/kubernetes.svg', proficiency: 90 },
      { name: 'Git', icon: '/icons/git.svg', proficiency: 90 },
      { name: 'ArgoCD', icon: '/icons/argocd.png', proficiency: 30 },
      { name: 'Harbor', icon: '/icons/harbor.svg', proficiency: 30 },
      { name: 'nginx', icon: '/icons/harbor.svg', proficiency: 30 }
    ]
  },
  {
    title: 'Cloud',
    tools: [
      { name: 'Azure DevOps', icon: '/icons/azure-devops.png', proficiency: 60 },
      { name: 'GCP', icon: '/icons/gcp.svg', proficiency: 65 },
      { name: 'Kibana', icon: '/icons/kibana.svg', proficiency: 30 },
      { name: 'Prometheus', icon: '/icons/prometheus.svg', proficiency: 30 }
    ]
  },
  {
    title: 'Frontend',
    tools: [
      { name: 'Next.js', icon: '/icons/nextjs.svg', proficiency: 30 },
      { name: 'React', icon: '/icons/react.png', proficiency: 30 },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg', proficiency: 30 },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.png', proficiency: 30 },
      { name: 'jQuery', icon: '/icons/jquery.png', proficiency: 30 }
    ]
  }
];