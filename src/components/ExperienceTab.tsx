'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { experiences } from '@/data/experiences';

export default function ExperienceTab() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (key: string) => {
    setExpandedSection(expandedSection === key ? null : key);
  };

  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <div 
          key={exp.key} 
          className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden"
        >
          <button
            onClick={() => toggleSection(exp.key)}
            className="w-full p-6 flex justify-between items-center hover:bg-slate-700 transition-colors"
          >
            <div className="text-left">
              <h3 className="text-xl font-bold text-blue-300 mb-1">
                {exp.title}
              </h3>
              <p className="text-gray-400 text-sm">{exp.subtitle}</p>
            </div>
            <ChevronDown 
              className={`transition-transform ${expandedSection === exp.key ? 'rotate-180' : ''}`}
            />
          </button>
          
          {expandedSection === exp.key && (
            <div className="p-6 border-t border-slate-700 text-slate-300">
              <ul className="mb-4 space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="ml-6">• {point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.techs.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm border border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}