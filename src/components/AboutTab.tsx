'use client';

import { useState } from 'react';
import { skillCategories } from '@/data/skills';

export default function AboutTab() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <div className="space-y-6">
      {/* Bio Section - 增大文字並標示重點 */}
      <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600 mb-6">
        <p className="text-slate-200 text-lg leading-relaxed mb-4">
          我是<span className="text-blue-400 font-semibold">謝子尉</span>，目前就讀於中央大學資管所。我擅長<span className="text-blue-400 font-semibold">系統架構設計與全端開發</span>，技術棧涵蓋 Flask、Django、FastAPI 以及 DevOps 工具鏈（Kubernetes、Azure DevOps、ArgoCD）。在開發上，我重視<span className="text-blue-400 font-semibold">可維護性與擴充性</span>，習慣採用設計模式規劃系統架構。
        </p>
        <p className="text-slate-200 text-lg leading-relaxed">
          同時我對 <span className="text-blue-400 font-semibold">AI/ML 領域</span>有濃厚興趣，特別是 Langchain、GNN、時間序列預測等技術的應用。未來我的職涯目標是朝 <span className="text-blue-400 font-semibold">MLOps</span> 發展，專注於 AI Agent 系統維護與時間序列模型的部署與優化，期許能將機器學習模型穩定地落地到生產環境，創造實際價值。
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3">
        {skillCategories.map((category, idx) => (
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

      {/* Tools Display */}
      <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
        <h3 className="text-xl font-bold text-blue-300 mb-6">
          {skillCategories[activeCategory].title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillCategories[activeCategory].tools.map((tool) => (
            <div key={tool.name} className="flex flex-col gap-3">
              {/* Tool Icon and Name - 背景改為較深的灰色 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-lg bg-slate-600 border-2 border-slate-500 flex items-center justify-center overflow-hidden p-2">
                  {tool.icon ? (
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <span className="text-lg font-bold text-slate-700">
                      {tool.name.substring(0, 3).toUpperCase()}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-200 text-center font-medium">
                  {tool.name}
                </p>
              </div>

              {/* Proficiency Bar */}
              <div className="w-full">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-400">Proficiency</span>
                  <span className="text-xs text-blue-400 font-semibold">{tool.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${tool.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}