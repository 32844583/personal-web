'use client';

import { useState, useEffect } from 'react';
import { Github, X } from 'lucide-react';
import { projects } from '@/data/projects';
import { createPortal } from 'react-dom';

export default function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const currentProject = projects.find(p => p.id === selectedProject);

  const modalContent = selectedProject && currentProject && mounted ? (
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
        <div className={`bg-gradient-to-r ${currentProject.color} p-6 flex justify-between items-start sticky top-0`} style={{ zIndex: 10 }}>
          <div className="flex gap-4 items-start flex-1 min-w-0">
            <span className="text-5xl flex-shrink-0">{currentProject.emoji}</span>
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl font-bold text-white mb-2">
                {currentProject.title}
              </h2>
              <p className="text-blue-100 text-lg mb-1">
                {currentProject.description}
              </p>
              <p className="text-blue-50">📅 {currentProject.period}</p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="text-white hover:text-gray-300 transition-colors flex-shrink-0 ml-4"
          >
            <X size={28} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 space-y-6">
          {/* Image Placeholder */}
          <div className="bg-slate-700 rounded-lg border-2 border-dashed border-slate-600 h-64 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 mb-2 text-lg">🖼️ Project Screenshot</p>
              <p className="text-gray-500 text-sm">Image placeholder - upload your screenshot here</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Features</h3>
            <ul className="text-slate-300 space-y-2">
              {currentProject.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {currentProject.tech.map(tech => (
                <span 
                  key={tech} 
                  className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-lg text-sm font-medium border border-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Challenges & Solutions</h3>
            <div className="space-y-4">
              {currentProject.challenges.map((item, idx) => (
                <div key={idx} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">
                    🔥 Challenge: {item.challenge}
                  </h4>
                  <p className="text-slate-300">
                    <span className="text-green-300 font-semibold">✓ Solution:</span> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          <div className="pt-4 border-t border-slate-700">
            <a
              href={currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-blue-300 font-semibold transition-colors"
            >
              <Github size={20} />
              查看原始碼
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden flex flex-col"
          >
            <div
              className={`w-full bg-gradient-to-r ${project.color} p-4 min-h-[6rem] flex items-center`}
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
            </div>

            <div className="p-6 flex flex-col">
              <button
                onClick={() => openModal(project.id)}
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                View Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Render Modal using Portal */}
      {mounted && typeof document !== 'undefined' && modalContent && createPortal(
        modalContent,
        document.body
      )}
    </>
  );
}