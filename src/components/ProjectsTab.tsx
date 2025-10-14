'use client';

import { useState } from 'react';
import { Github } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden flex flex-col"
        >
          <button
            onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            className={`w-full text-left bg-gradient-to-r ${project.color} p-4 hover:opacity-90 transition-opacity min-h-[6rem] flex items-center`}
          >
            <div className="flex gap-3 items-start w-full">
              <span className="text-3xl flex-shrink-0">{project.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-blue-100 text-sm mb-2 leading-snug">
                  {project.description}
                </p>
                <p className="text-blue-50 text-xs">📅 {project.period}</p>
              </div>
            </div>
          </button>

          {selectedProject === project.id && (
            <div className="p-6 border-t border-slate-700 flex flex-col overflow-y-auto">
              {/* Image Placeholder */}
              <div className="bg-slate-600 rounded-lg border-2 border-dashed border-slate-500 h-40 flex items-center justify-center mb-4 flex-shrink-0">
                <div className="text-center">
                  <p className="text-gray-400 mb-1 text-sm">🖼️ Image/Screenshot</p>
                  <p className="text-gray-500 text-xs">Upload here</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-base font-bold text-blue-300 mb-2">Features</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>→ {feature}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-base font-bold text-blue-300 mb-2">Tech</h4>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 bg-blue-900 text-blue-300 rounded text-xs border border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <div className="mt-auto pt-4 border-t border-slate-700 flex-shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 rounded text-blue-300 text-sm font-semibold hover:bg-slate-500 transition-colors"
                >
                  <Github size={16} />
                  查看原始碼
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}