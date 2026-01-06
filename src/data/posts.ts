import { Post } from '@/types';

export const posts: Post[] = [
    {
        slug: 'getting-started-with-nextjs',
        title: '初探 Next.js：從零開始建立個人網站',
        date: '2025-01-15',
        summary: '記錄我學習 Next.js 的過程，從環境設置到部署上線的完整心得。',
        tags: ['Next.js', 'React', 'Frontend'],
        file: '/posts/getting-started-with-nextjs.md'
    },
    {
        slug: 'understanding-rag',
        title: '深入理解 RAG：檢索增強生成技術',
        date: '2025-01-10',
        summary: '探討 RAG 的核心概念、架構設計，以及在實務專案中的應用經驗。',
        tags: ['AI', 'RAG', 'LLM', 'NLP'],
        file: '/posts/understanding-rag.md'
    },
    {
        slug: 'python-async-programming',
        title: 'Python 非同步程式設計入門',
        date: '2025-01-05',
        summary: '從 callback 到 async/await，理解 Python 非同步程式設計的演進。',
        tags: ['Python', 'Async', 'Backend'],
        file: '/posts/python-async-programming.md'
    },
    {
        slug: 'Stock Selection via Spatiotemporal Hypergraph Attention Network A Learning to Rank Approach',
        title: 'Stock Selection via Spatiotemporal Hypergraph Attention Network A Learning to Rank Approach',
        date: '2025-01-05',
        summary: '從 callback 到 async/await，理解 Python 非同步程式設計的演進。',
        tags: ['Python', 'Async', 'Backend'],
        file: '/posts/Stock Selection via Spatiotemporal Hypergraph Attention Network A Learning to Rank Approach.md'
    }
];

// 取得所有文章 slugs（用於靜態生成）
export function getAllPostSlugs(): string[] {
    return posts.map(post => post.slug);
}

// 根據 slug 取得文章 metadata
export function getPostBySlug(slug: string): Post | undefined {
    return posts.find(post => post.slug === slug);
}