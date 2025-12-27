'use client';

import { useState } from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { posts } from '@/data/posts';
import Link from 'next/link';

type SortOrder = 'newest' | 'oldest';

export default function BlogTab() {
    const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // 取得所有 tags
    const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

    // 篩選並排序文章
    const filteredPosts = posts
        .filter(post => !selectedTag || post.tags.includes(selectedTag))
        .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === 'newest'
                ? dateB.getTime() - dateA.getTime()
                : dateA.getTime() - dateB.getTime();
        });

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                {/* Tag Filter */}
                <div className="flex flex-wrap items-center gap-2">
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${!selectedTag
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                    >
                        All
                    </button>
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Sort Button */}
                <button
                    onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors text-sm font-medium"
                >
                    <Calendar size={18} />
                    {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
                </button>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
                {filteredPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block bg-slate-800 rounded-lg border border-slate-700 p-6 hover:border-blue-500 transition-all group"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-3 flex items-center gap-2">
                                    <Calendar size={14} />
                                    {formatDate(post.date)}
                                </p>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                    {post.summary}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1 px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                                        >
                                            <Tag size={10} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                                閱讀更多
                                <ArrowRight size={16} className="ml-1" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                    <p>沒有找到相關文章</p>
                </div>
            )}
        </>
    );
}