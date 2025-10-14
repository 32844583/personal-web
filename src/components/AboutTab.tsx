'use client';

import { useState, useEffect } from 'react';
import { skillCategories } from '@/data/skills';

export default function AboutTab() {
  const [activeCategory, setActiveCategory] = useState<number>(-1); // -1 代表 All
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [versionIndex, setVersionIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  // 兩個版本的自我介紹
  const introVersions = [
    {
      paragraphs: [
        '我是謝子尉，目前就讀於中央大學資管所。我擅長系統架構設計與全端開發，技術棧涵蓋 Flask、Django、FastAPI 以及 DevOps 工具鏈（Kubernetes、Azure DevOps、ArgoCD）。在開發上，我重視可維護性與擴充性，習慣採用設計模式規劃系統架構。',
      ],
      highlights: ['謝子尉', '系統架構設計與全端開發', '可維護性與擴充性']
    },
    {
      paragraphs: [
        '同時我對 AI/ML 領域有濃厚興趣，特別是 Langchain、GNN、時間序列預測等技術的應用。未來我的職涯目標是朝 MLOps 發展，專注於 AI Agent 與時間序列模型的部署與優化，期許能將機器學習模型穩定地落地到生產環境，創造實際價值。'
      ],
      highlights: ['AI/ML 領域', 'MLOps']
    }
  ];

  const currentVersion = introVersions[versionIndex];
  const fullText = currentVersion.paragraphs.join('\n\n');

  // 處理 hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isDeleting) {
      // 刪除文字
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 15); // 刪除速度
        return () => clearTimeout(timeout);
      } else {
        // 刪除完成，切換到下一個版本
        setIsDeleting(false);
        setVersionIndex((prev) => (prev + 1) % introVersions.length);
      }
    } else {
      // 打字
      if (displayedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 30); // 打字速度
        return () => clearTimeout(timeout);
      } else {
        // 打字完成，等待後開始刪除
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // 停留1.5秒（縮短）
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, isDeleting, fullText, versionIndex, mounted]);

  // 精熟度等級對照 - 改為3個離散等級
  const getProficiencyLevel = (proficiency: number) => {
    if (proficiency >= 80) return { level: '熟練', bars: 3 };
    if (proficiency >= 60) return { level: '進階', bars: 2 };
    return { level: '基本', bars: 1 };
  };

  // 收集所有工具（用於 All 選項）
  const allTools = skillCategories.flatMap(category => category.tools);

  // 根據選擇的類別決定顯示的工具
  const displayTools = activeCategory === -1 ? allTools : skillCategories[activeCategory].tools;

  // 處理高亮文字
  const renderTextWithHighlights = (text: string) => {
    let result = text;
    
    currentVersion.highlights.forEach(highlight => {
      if (text.includes(highlight)) {
        const regex = new RegExp(highlight, 'g');
        result = result.replace(
          regex,
          `<span class="text-blue-400 font-semibold">${highlight}</span>`
        );
      }
    });
    
    return result;
  };

  // 將文字分成已顯示部分和游標
  const getDisplayTextWithCursor = () => {
    if (!mounted) {
      // SSR 時顯示空內容
      return <p className="h-7">&nbsp;</p>;
    }

    const paragraphs = displayedText.split('\n\n').filter(p => p.length > 0);
    
    if (paragraphs.length === 0) {
      return <p className="inline"><span className="inline-block w-2 h-5 bg-white animate-blink align-middle" /></p>;
    }

    return paragraphs.map((para, idx) => {
      const isLastParagraph = idx === paragraphs.length - 1;
      
      return (
        <p 
          key={idx} 
          className={idx > 0 ? 'mt-4' : ''}
        >
          <span dangerouslySetInnerHTML={{ __html: renderTextWithHighlights(para) }} />
          {isLastParagraph && (
            <span className="inline-block w-2 h-5 bg-white ml-1 animate-blink align-middle" />
          )}
        </p>
      );
    });
  };

  return (
    <div className="space-y-8">
      {/* Bio Section - 增大文字並標示重點，添加打字動畫 */}
      <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
        <div className="text-slate-200 text-lg leading-relaxed">
          {getDisplayTextWithCursor()}
        </div>
      </div>

      {/* 分隔線 */}
      <div className="border-t-2 border-slate-600/50"></div>

      {/* Skills Section Title */}
      <div>
        <h2 className="text-2xl font-bold text-blue-300 mb-6">Technical Skills</h2>
        
        {/* Category Buttons - 添加 All 選項 */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setActiveCategory(-1)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeCategory === -1
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            All
          </button>
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

        {/* Tools Display - 調整間距和寬度 */}
        <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600">
          <h3 className="text-xl font-bold text-blue-300 mb-6">
            {activeCategory === -1 ? 'All Skills' : skillCategories[activeCategory].title}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {displayTools.map((tool) => {
              const { level, bars } = getProficiencyLevel(tool.proficiency);
              return (
                <div key={tool.name} className="flex flex-col gap-2">
                  {/* Tool Icon and Name */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-lg bg-slate-600 border-2 border-slate-500 flex items-center justify-center overflow-hidden p-2">
                      {tool.icon ? (
                        <img 
                          src={tool.icon} 
                          alt={tool.name}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <span className="text-lg font-bold text-slate-300">
                          {tool.name.substring(0, 3).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-200 text-center font-medium">
                      {tool.name}
                    </p>
                  </div>

                  {/* Proficiency Bars - 改為3格式 */}
                  <div className="w-full">
                    <div className="flex gap-1 justify-center">
                      {[1, 2, 3].map((bar) => (
                        <div 
                          key={bar}
                          className={`w-5 h-1.5 rounded-full transition-all duration-300 ${
                            bar <= bars 
                              ? 'bg-blue-500' 
                              : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}