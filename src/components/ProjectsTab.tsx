'use client';

import { useState, useEffect } from 'react';
import { Github, X, Calendar } from 'lucide-react';
import { projects } from '@/data/projects';
import { createPortal } from 'react-dom';

export default function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [sortByDate, setSortByDate] = useState<'newest' | 'oldest'>('newest');

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const toggleSort = () => {
    setSortByDate(prev => prev === 'newest' ? 'oldest' : 'newest');
  };

  // 按日期排序專案
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.period.split(' - ')[1] || a.period.split(' - ')[0]);
    const dateB = new Date(b.period.split(' - ')[1] || b.period.split(' - ')[0]);
    return sortByDate === 'newest' 
      ? dateB.getTime() - dateA.getTime() 
      : dateA.getTime() - dateB.getTime();
  });

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
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 flex justify-between items-start sticky top-0 border-b border-slate-600" style={{ zIndex: 10 }}>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-white">
                {currentProject.title}
              </h2>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                currentProject.type === 'public' 
                  ? 'bg-green-500/20 text-green-300 border border-green-500/50' 
                  : 'bg-orange-500/20 text-orange-300 border border-orange-500/50'
              }`}>
                {currentProject.type === 'public' ? 'Public' : 'Private'}
              </span>
            </div>
            <p className="text-slate-300 text-lg mb-1">
              {currentProject.description}
            </p>
            <p className="text-slate-400 flex items-center gap-2">
              <Calendar size={16} />
              {currentProject.period}
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
        <div className="p-8 space-y-6">
          {/* Screenshot */}
          <div className="bg-slate-700 rounded-lg border-2 border-slate-600 overflow-hidden">
            {currentProject.screenshot ? (
              <img 
                src={currentProject.screenshot} 
                alt={`${currentProject.title} screenshot`}
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-400 mb-2 text-lg">🖼️ Project Screenshot</p>
                  <p className="text-gray-500 text-sm">No screenshot available</p>
                </div>
              </div>
            )}
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
      {/* Sort Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={toggleSort}
          className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors text-sm font-medium"
        >
          <Calendar size={18} />
          {sortByDate === 'newest' ? 'Newest First' : 'Oldest First'}
        </button>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 cursor-pointer group"
            onClick={() => openModal(project.id)}
          >
            {/* Image */}
            <div className="relative h-48 bg-slate-700 overflow-hidden">
              {project.screenshot ? (
                <img 
                  src={project.screenshot} 
                  alt={project.title}
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
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-3 flex items-center gap-2">
                <Calendar size={14} />
                {project.period}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="mt-4 flex items-center text-blue-400 text-sm font-medium">
                View Details →
              </div>
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