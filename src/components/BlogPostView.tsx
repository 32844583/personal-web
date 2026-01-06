// src/components/BlogPostView.tsx
'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Post } from '@/types';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface Props {
    post: Post;
    onBack: () => void;
}

export default function BlogPostView({ post, onBack }: Props) {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 從 public 目錄 fetch markdown 檔案
        fetch(post.file)
            .then(res => res.text())
            .then(text => {
                setContent(text);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load post:', err);
                setLoading(false);
            });
    }, [post.file]);

    return (
        <div>
            {/* 返回按鈕 */}
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
            >
                <ArrowLeft size={18} />
                返回文章列表
            </button>

            {/* 文章標題 */}
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-slate-400 mb-8">{post.date}</p>

            {/* 文章內容 */}
            {loading ? (
                <p className="text-slate-400">載入中...</p>
            ) : (
                <div className="prose prose-invert prose-lg max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            )}
        </div>
    );
}