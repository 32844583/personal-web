import { Post } from '@/types';

export const posts: Post[] = [
    {
        slug: '論文 Graph Neural Networks: A Review of Methods and Applications',
        title: '論文 Graph Neural Networks: A Review of Methods and Applications',
        date: '2024-07-23',
        summary: 'Graph Neural Network 的起源與原理',
        tags: ['GNN'],
        file: '/posts/graph-neural-network/index.md'
    },
    {
        slug: '論文 Stock Selection via Spatiotemporal Hypergraph Attention Network A Learning to Rank Approach',
        title: 'Stock Selection via Spatiotemporal Hypergraph Attention Network A Learning to Rank Approach',
        date: '2025-01-05',
        summary: '使用超圖卷積將行業維度應用於股票關聯預測',
        tags: ['STHAN-SR', 'Industry', 'Time step attention', 'Relationship attention'],
        file: '/posts/stock-selection-hypergraph/index.md'
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