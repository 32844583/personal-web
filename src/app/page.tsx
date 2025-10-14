'use client';

import { useState } from 'react';
import About from '@/components/Profile';
import ExperienceTab from '@/components/ExperienceTab';
import AboutTab from '@/components/AboutTab';
import ProjectsTab from '@/components/ProjectsTab';
import Footer from '@/components/Footer';

type TabType = 'experience' | 'skills' | 'projects';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  const tabs: { key: TabType; label: string }[] = [
    { key: 'experience', label: 'Experience' },
    { key: 'skills', label: 'About' },
    { key: 'projects', label: 'Projects' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* Main Content */}
      <section className="max-w-[95%] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_2fr] gap-8 min-h-[85vh]">
          {/* Left Side - About */}
          <About />

          {/* Right Side - Tabs and Content */}
          <div className="flex flex-col">
            {/* Tabs - 增大按鈕尺寸和間距 */}
            <div className="flex flex-wrap gap-6 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-8 py-4 rounded-lg text-base font-semibold transition-all ${
                    activeTab === tab.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-lg border border-slate-700 flex-1">
              {activeTab === 'experience' && <ExperienceTab />}
              {activeTab === 'skills' && <AboutTab />}
              {activeTab === 'projects' && <ProjectsTab />}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}