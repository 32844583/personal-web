import { Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
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

      {/* Bio Section */}
      <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-lg border border-slate-700 mb-8">
        <p className="text-lg text-slate-300 leading-relaxed mb-4">
          A second-year Master&apos;s student in Information Management at National Central University, specializing in backend development and cloud deployment. Passionate about building complete MLOps pipelines that bridge the gap between research and production.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          With hands-on experience at TSMC and ITRI, I&apos;ve developed expertise in deploying ML systems at scale, optimizing neural networks for financial forecasting, and streamlining operational workflows through intelligent automation.
        </p>
      </div>

      {/* Quick Facts */}
      <div className="bg-blue-950/20 backdrop-blur-xl p-8 rounded-lg border border-blue-500/30">
        <h3 className="text-xl font-bold text-blue-300 mb-6">Quick Facts</h3>
        <ul className="space-y-4">
          <li className="text-slate-300">📍 Based in Taiwan</li>
          <li className="text-slate-300">🎓 M.S. Information Management</li>
          <li className="text-slate-300">🔝 GPA: 90.50/100 (Top 19%)</li>
          <li className="text-slate-300">🌐 TOEIC: 830</li>
          <li className="text-slate-300">💼 Active MLOps Enthusiast</li>
        </ul>
        
        {/* Social Links */}
        <div className="flex gap-6 mt-8">
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