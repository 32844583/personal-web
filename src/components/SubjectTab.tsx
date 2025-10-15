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

  // 計算成績填滿的格數 (0-10, 10-20, 20-30, ... 90-100)
  const getFilledBars = (score: number) => {
    return Math.floor(score / 10);
  };

  // 計算各領域的平均分數
  const calculateAbilityScores = () => {
    const abilities = {
      '資料庫設計': ['資料庫管理'],
      '人工智慧': ['機器學習概論', '人工智慧與機器學習', 'AI人工智慧導論', '自然語言處理', '圖像辨識的企業應用', '資料科學與機器學習'],
      '系統設計': ['系統分析與設計', '軟體工程I', '網頁設計', '資訊系統發展專題I', '資訊系統發展專題II'],
      '邏輯能力': ['資料與檔案結構', '演算法', '程式設計概念與方法(C)', '程式設計(Java)', '程式設計(JavaScript)', 'Java程式設計進階', '程式設計-Python'],
      '作業系統': ['作業系統(Unix)', '作業系統操作與管理(Linux)', 'Linux與邊緣運算'],
      '資安網路': ['企業資料通訊', '進階區塊鏈應用與隱私防護']
    };

    const allSubjects = subjectCategories.flatMap(cat => cat.subjects);
    
    return Object.entries(abilities).map(([ability, subjectNames]) => {
      const relatedSubjects = allSubjects.filter(s => subjectNames.includes(s.name));
      const avgScore = relatedSubjects.length > 0
        ? relatedSubjects.reduce((sum, s) => sum + s.score, 0) / relatedSubjects.length
        : 0;
      return { ability, score: avgScore };
    });
  };

  const abilityScores = calculateAbilityScores();

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

      {/* Hexagon Ability Chart */}
      <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-6">
        <h3 className="text-xl font-bold text-blue-300 mb-6 text-center">能力六角圖</h3>
        <div className="flex justify-center">
          <svg width="400" height="400" viewBox="0 0 400 400" className="overflow-visible">
            {/* 繪製背景網格 (10個層級) */}
            {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((level) => {
              const points = Array.from({ length: 6 }, (_, i) => {
                const angle = (Math.PI / 3) * i - Math.PI / 2;
                const radius = (level / 100) * 150;
                const x = 200 + radius * Math.cos(angle);
                const y = 200 + radius * Math.sin(angle);
                return `${x},${y}`;
              }).join(' ');
              
              return (
                <polygon
                  key={level}
                  points={points}
                  fill="none"
                  stroke={level === 100 ? '#475569' : '#334155'}
                  strokeWidth={level === 100 ? '2' : '1'}
                  opacity={level === 100 ? '0.5' : '0.3'}
                />
              );
            })}

            {/* 繪製從中心到各頂點的線 */}
            {abilityScores.map((item, i) => {
              const angle = (Math.PI / 3) * i - Math.PI / 2;
              const x = 200 + 150 * Math.cos(angle);
              const y = 200 + 150 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1="200"
                  y1="200"
                  x2={x}
                  y2={y}
                  stroke="#334155"
                  strokeWidth="1"
                  opacity="0.3"
                />
              );
            })}

            {/* 繪製能力數據多邊形 */}
            <polygon
              points={abilityScores.map((item, i) => {
                const angle = (Math.PI / 3) * i - Math.PI / 2;
                const radius = (item.score / 100) * 150;
                const x = 200 + radius * Math.cos(angle);
                const y = 200 + radius * Math.sin(angle);
                return `${x},${y}`;
              }).join(' ')}
              fill="rgba(59, 130, 246, 0.3)"
              stroke="#3b82f6"
              strokeWidth="2"
            />

            {/* 繪製數據點 */}
            {abilityScores.map((item, i) => {
              const angle = (Math.PI / 3) * i - Math.PI / 2;
              const radius = (item.score / 100) * 150;
              const x = 200 + radius * Math.cos(angle);
              const y = 200 + radius * Math.sin(angle);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="#3b82f6"
                  stroke="#fff"
                  strokeWidth="2"
                />
              );
            })}

            {/* 標籤文字 */}
            {abilityScores.map((item, i) => {
              const angle = (Math.PI / 3) * i - Math.PI / 2;
              const labelRadius = 175;
              const x = 200 + labelRadius * Math.cos(angle);
              const y = 200 + labelRadius * Math.sin(angle);
              
              return (
                <g key={i}>
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-slate-200 font-semibold text-sm"
                  >
                    {item.ability}
                  </text>
                  <text
                    x={x}
                    y={y + 18}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-blue-400 font-bold text-base"
                  >
                    {item.score.toFixed(1)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
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
                {/* Progress Bar - 改為10格 */}
                <div className="flex-1 flex gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((bar) => (
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