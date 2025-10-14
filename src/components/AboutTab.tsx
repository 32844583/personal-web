'use client';

import { useState } from 'react';
import { skillCategories } from '@/data/skills';

export default function AboutTab() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <div className="space-y-6">
      {/* Bio Section */}
      <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600 mb-6">
        <p className="text-slate-300 leading-relaxed mb-4">
          A second-year Master&apos;s student in Information Management at National Central University, specializing in backend development and cloud deployment. Passionate about building complete MLOps pipelines that bridge the gap between research and production.
        </p>
        <p className="text-slate-300 leading-relaxed">
          With hands-on experience at TSMC and ITRI, I&apos;ve developed expertise in deploying ML systems at scale, optimizing neural networks for financial forecasting, and streamlining operational workflows through intelligent automation.
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
              {/* Tool Icon and Name */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-lg bg-slate-800 border-2 border-slate-600 flex items-center justify-center overflow-hidden">
                  {tool.icon ? (
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <span className="text-lg font-bold text-blue-300">
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