'use client';

import { useState } from 'react';
import { ArrowUpDown, GraduationCap, Award } from 'lucide-react';
import { subjectCategories } from '@/data/subjects';
import { Subject } from '@/types';

export default function SubjectTab() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'grade' | 'score'>('grade');

  // 根據選擇的類別決定顯示的科目
  const currentSubjects = subjectCategories[activeCategory].subjects;

  // 年級排序順序
  const gradeOrder = { '大一': 6, '大二': 5, '大三': 4, '大四': 3, '碩一': 2, '碩二': 1 };

  // 排序科目
  const sortedSubjects = [...currentSubjects].sort((a, b) => {
    if (sortBy === 'grade') {
      return gradeOrder[a.grade] - gradeOrder[b.grade];
    } else {
      return b.score - a.score; // 成績由高到低
    }
  });

  // 計算成績填滿的格數 (0-20, 20-40, 40-60, 60-80, 80-100)
  const getFilledBars = (score: number) => {
    if (score >= 80) return 5;
    if (score >= 60) return 4;
    if (score >= 40) return 3;
    if (score >= 20) return 2;
    if (score > 0) return 1;
    return 0;
  };

  const toggleSort = () => {
    setSortBy(prev => prev === 'grade' ? 'score' : 'grade');
  };

  return (
    <div className="space-y-6">
      {/* Category Buttons and Sort Button */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          {subjectCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeCategory === idx
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Sort Button */}
        <button
          onClick={toggleSort}
          className="flex items-center gap-2 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors text-sm font-medium"
        >
          {sortBy === 'grade' ? <GraduationCap size={18} /> : <Award size={18} />}
          {sortBy === 'grade' ? '按年級排序' : '按成績排序'}
          <ArrowUpDown size={16} />
        </button>
      </div>

      {/* Subjects Display */}
      <div className="space-y-4">
        {sortedSubjects.map((subject) => {
          const filledBars = getFilledBars(subject.score);
          return (
            <div key={subject.name} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              {/* Subject Name, Grade and Type */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-slate-200">
                  {subject.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/50">
                    {subject.grade}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    subject.type === '必修'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50'
                      : 'bg-green-500/20 text-green-300 border border-green-500/50'
                  }`}>
                    {subject.type}
                  </span>
                </div>
              </div>

              {/* Score Bar and Number */}
              <div className="flex items-center gap-4">
                {/* Progress Bar */}
                <div className="flex-1 flex gap-1">
                  {[1, 2, 3, 4, 5].map((bar) => (
                    <div 
                      key={bar}
                      className={`flex-1 h-3 rounded-sm transition-all duration-300 ${
                        bar <= filledBars 
                          ? 'bg-blue-500' 
                          : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Score Number */}
                <span className="text-2xl font-bold text-blue-400 min-w-[3rem] text-right">
                  {subject.score}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}