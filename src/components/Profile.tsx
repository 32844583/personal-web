import { Github, Linkedin, Mail } from 'lucide-react';

export default function Profile() {
  return (
    <div>
      {/* Header with Avatar and Name */}
      <div className="flex items-center mb-8">
        <div className="relative w-48 h-48 mr-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-3xl opacity-30 animate-pulse" />
          <div className="relative w-48 h-48 bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl flex items-center justify-center text-6xl font-bold">
            ML
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Zie-Wei
          </h1>
          <p className="text-xl text-slate-300 mb-4">MLOps Engineer & Backend Developer</p>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-blue-950/20 backdrop-blur-xl p-8 rounded-lg border border-blue-500/30">
        <h3 className="text-xl font-bold text-blue-300 mb-6">Quick Facts</h3>
        <ul className="space-y-4">
          <li className="text-slate-300">📍 Based in Taiwan</li>
          <li className="text-slate-300">🌐 TOEIC: 830</li>
          <li className="text-slate-300">💼 Active MLOps Enthusiast</li>
        </ul>

        {/* Education Section */}
        <div className="mt-8 pt-6 border-t border-blue-500/20">
          <h4 className="text-lg font-semibold text-blue-300 mb-4">🎓 Education</h4>
          <div className="space-y-4">
            {/* Master's Degree */}
            <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-200 font-semibold mb-1">M.S. Information Management</p>
              <p className="text-slate-400 text-sm mb-2">National Central University | 2024 - Present</p>
              <div className="flex gap-4 text-sm">
                <span className="text-blue-300">GPA: 90.50/100</span>
                <span className="text-blue-300">Top 19%</span>
              </div>
            </div>
            
            {/* Bachelor's Degree */}
            <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-200 font-semibold mb-1">B.S. Information Management</p>
              <p className="text-slate-400 text-sm mb-2">National Central University | 2021 - 2024</p>
              <div className="flex gap-4 text-sm">
                <span className="text-blue-300">GPA: 89.64/100</span>
                <span className="text-blue-300">Rank: 20/109 (18%)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-6 mt-8 pt-6 border-t border-blue-500/20">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:youto201266@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}