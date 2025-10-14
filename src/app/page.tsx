'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import ExperienceTab from '@/components/ExperienceTab';
import SkillsTab from '@/components/SkillsTab';
import ProjectsTab from '@/components/ProjectsTab';
import Footer from '@/components/Footer';

type TabType = 'experience' | 'skills' | 'projects';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  const tabs: { key: TabType; label: string }[] = [
    { key: 'experience', label: 'Professional Experience' },
    { key: 'skills', label: 'Core Competencies' },
    { key: 'projects', label: 'Featured Projects' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.5fr] gap-12 min-h-[80vh]">
          {/* Left Side - About */}
          <About />

          {/* Right Side - Tabs and Content */}
          <div className="flex flex-col">
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-md text-sm font-semibold transition-all ${
                    activeTab === tab.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-lg border border-slate-700 overflow-y-auto max-h-[65vh] flex-1">
              {activeTab === 'experience' && <ExperienceTab />}
              {activeTab === 'skills' && <SkillsTab />}
              {activeTab === 'projects' && <ProjectsTab />}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}