'use client';

import { useState, useEffect } from 'react';
import { Github, X, Calendar, Building2, LayoutGrid, GitBranch } from 'lucide-react';
import { works } from '@/data/works';
import { WorkItem } from '@/types';
import { createPortal } from 'react-dom';

type ViewMode = 'grid' | 'timeline';
type SortOrder = 'newest' | 'oldest';

export default function WorksTab() {
    const [selectedWork, setSelectedWork] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');

    useEffect(() => {
        setMounted(true);
    }, []);

    const openModal = (workId: string) => {
        setSelectedWork(workId);
    };

    const closeModal = () => {
        setSelectedWork(null);
    };

    // 解析日期並排序
    const parseDate = (period: string): Date => {
        const endDate = period.split(' - ')[1] || period.split(' - ')[0];
        const [month, year] = endDate.split(' ');
        const monthMap: Record<string, number> = {
            'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
            'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
        };
        return new Date(parseInt(year), monthMap[month] || 0);
    };

    const sortedWorks = [...works].sort((a, b) => {
        const dateA = parseDate(a.period);
        const dateB = parseDate(b.period);
        return sortOrder === 'newest'
            ? dateB.getTime() - dateA.getTime()
            : dateA.getTime() - dateB.getTime();
    });

    const currentWork = works.find(w => w.id === selectedWork);

    // Modal 內容
    const modalContent = selectedWork && currentWork && mounted ? (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            style={{ zIndex: 9999 }}
            onClick={closeModal}
        >
            <div
                className="bg-slate-800 rounded-xl border-2 border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 flex justify-between items-start sticky top-0 border-b border-slate-600" style={{ zIndex: 10 }}>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                {currentWork.title}
                            </h2>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${currentWork.type === 'public'
                                    ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                                    : 'bg-orange-500/20 text-orange-300 border border-orange-500/50'
                                }`}>
                                {currentWork.type === 'public' ? 'Public' : 'Private'}
                            </span>
                        </div>
                        {currentWork.organization && (
                            <p className="text-blue-300 font-medium mb-1 flex items-center gap-2">
                                <Building2 size={16} />
                                {currentWork.organization}
                            </p>
                        )}
                        {currentWork.role && (
                            <p className="text-slate-400 text-sm mb-2">{currentWork.role}</p>
                        )}
                        <p className="text-slate-400 flex items-center gap-2">
                            <Calendar size={16} />
                            {currentWork.period}
                        </p>
                    </div>
                    <button
                        onClick={closeModal}
                        className="text-white hover:text-gray-300 transition-colors flex-shrink-0 ml-4"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8 space-y-6">
                    {/* Screenshot */}
                    <div className="bg-slate-700 rounded-lg border-2 border-slate-600 overflow-hidden">
                        {currentWork.screenshot ? (
                            <img
                                src={currentWork.screenshot}
                                alt={`${currentWork.title} screenshot`}
                                className="w-full h-auto object-cover"
                            />
                        ) : (
                            <div className="h-48 md:h-64 flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-gray-400 mb-2 text-lg">🖼️ Project Screenshot</p>
                                    <p className="text-gray-500 text-sm">No screenshot available</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-3">Overview</h3>
                        <p className="text-slate-300 leading-relaxed">{currentWork.description}</p>
                    </div>

                    {/* Highlights */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-4">Highlights</h3>
                        <ul className="text-slate-300 space-y-2">
                            {currentWork.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {currentWork.tech.map(tech => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-900/50 text-blue-300 rounded-lg text-sm font-medium border border-blue-800"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Challenges */}
                    {currentWork.challenges.length > 0 && (
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-4">Challenges & Solutions</h3>
                            <div className="space-y-4">
                                {currentWork.challenges.map((item, idx) => (
                                    <div key={idx} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                                        <h4 className="text-base md:text-lg font-semibold text-orange-300 mb-2">
                                            🔥 Challenge: {item.challenge}
                                        </h4>
                                        <p className="text-slate-300 text-sm md:text-base">
                                            <span className="text-green-300 font-semibold">✓ Solution:</span> {item.solution}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* GitHub Link - Only for Public Projects */}
                    {currentWork.type === 'public' && currentWork.github && (
                        <div className="pt-4 border-t border-slate-700">
                            <a
                                href={currentWork.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-blue-300 font-semibold transition-colors"
                            >
                                <Github size={20} />
                                查看原始碼
                            </a>
                        </div>
                    )}

                    {/* Private Project Notice */}
                    {currentWork.type === 'private' && (
                        <div className="pt-4 border-t border-slate-700">
                            <div className="flex items-center gap-2 text-orange-300 bg-orange-500/10 border border-orange-500/30 rounded-lg px-4 py-3">
                                <span className="text-lg">🔒</span>
                                <span className="text-sm font-medium">This is a private project. Source code is not publicly available.</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : null;

    return (
        <>
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 bg-slate-700 rounded-lg p-1">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm font-medium ${viewMode === 'grid'
                                ? 'bg-blue-600 text-white'
                                : 'text-slate-300 hover:text-white'
                            }`}
                    >
                        <LayoutGrid size={16} />
                        Grid
                    </button>
                    <button
                        onClick={() => setViewMode('timeline')}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm font-medium ${viewMode === 'timeline'
                                ? 'bg-blue-600 text-white'
                                : 'text-slate-300 hover:text-white'
                            }`}
                    >
                        <GitBranch size={16} />
                        Timeline
                    </button>
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

            {/* Grid View */}
            {viewMode === 'grid' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sortedWorks.map((work) => (
                        <WorkCard key={work.id} work={work} onClick={() => openModal(work.id)} />
                    ))}
                </div>
            )}

            {/* Timeline View */}
            {viewMode === 'timeline' && (
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-slate-600" />

                    <div className="space-y-6">
                        {sortedWorks.map((work, index) => (
                            <div key={work.id} className="relative flex gap-4 md:gap-8">
                                {/* Timeline Dot */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className={`w-8 h-8 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center ${work.type === 'public'
                                            ? 'border-green-500 bg-green-500/20'
                                            : 'border-orange-500 bg-orange-500/20'
                                        }`}>
                                        <span className="text-xs md:text-sm font-bold text-white hidden md:block">
                                            {work.period.split(' ')[1]?.slice(2) || work.period.split(' ')[0]?.slice(2)}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div
                                    className="flex-1 bg-slate-800 rounded-lg border border-slate-700 p-4 md:p-6 hover:border-blue-500 transition-all cursor-pointer group"
                                    onClick={() => openModal(work.id)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                                        <div>
                                            {work.organization && (
                                                <p className="text-blue-300 font-medium text-sm flex items-center gap-1.5 mb-1">
                                                    <Building2 size={14} />
                                                    {work.organization}
                                                </p>
                                            )}
                                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                {work.title}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${work.type === 'public'
                                                    ? 'bg-green-500/20 text-green-300'
                                                    : 'bg-orange-500/20 text-orange-300'
                                                }`}>
                                                {work.type === 'public' ? 'Public' : 'Private'}
                                            </span>
                                        </div>
                                    </div>

                                    {work.role && (
                                        <p className="text-slate-400 text-sm mb-2">{work.role}</p>
                                    )}

                                    <p className="text-slate-400 text-xs flex items-center gap-1.5 mb-3">
                                        <Calendar size={12} />
                                        {work.period}
                                    </p>

                                    <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {work.summary}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {work.tech.slice(0, 4).map(tech => (
                                            <span
                                                key={tech}
                                                className="px-2 py-0.5 bg-slate-700 text-slate-300 rounded text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {work.tech.length > 4 && (
                                            <span className="px-2 py-0.5 bg-slate-700 text-slate-400 rounded text-xs">
                                                +{work.tech.length - 4}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Render Modal using Portal */}
            {mounted && typeof document !== 'undefined' && modalContent && createPortal(
                modalContent,
                document.body
            )}
        </>
    );
}

// 卡片元件
function WorkCard({ work, onClick }: { work: WorkItem; onClick: () => void }) {
    return (
        <div
            className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 cursor-pointer group"
            onClick={onClick}
        >
            {/* Image */}
            <div className="relative h-40 md:h-48 bg-slate-700 overflow-hidden">
                {work.screenshot ? (
                    <img
                        src={work.screenshot}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-gray-400 text-lg">🖼️</p>
                            <p className="text-gray-500 text-sm">No Image</p>
                        </div>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Project Type Badge */}
                <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${work.type === 'public'
                            ? 'bg-green-500/80 text-white'
                            : 'bg-orange-500/80 text-white'
                        }`}>
                        {work.type === 'public' ? 'Public' : 'Private'}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
                {work.organization && (
                    <p className="text-blue-300 font-medium text-sm flex items-center gap-1.5 mb-1">
                        <Building2 size={14} />
                        {work.organization}
                    </p>
                )}
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {work.title}
                </h3>
                {work.role && (
                    <p className="text-slate-500 text-xs mb-2">{work.role}</p>
                )}
                <p className="text-slate-400 text-sm mb-3 flex items-center gap-2">
                    <Calendar size={14} />
                    {work.period}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 mb-4">
                    {work.summary}
                </p>
                <div className="flex items-center text-blue-400 text-sm font-medium">
                    View Details →
                </div>
            </div>
        </div>
    );
}