import { skillCategories } from '@/data/skills';

export default function SkillsTab() {
  return (
    <div className="space-y-8">
      {skillCategories.map((category, idx) => (
        <div key={idx}>
          <h3 className="text-xl font-bold text-blue-300 mb-4">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-6">
            {category.tools.map(tool => (
              <div key={tool} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-lg bg-blue-950/30 border border-blue-900 flex items-center justify-center text-sm font-semibold text-blue-300">
                  {tool.substring(0, 3).toUpperCase()}
                </div>
                <p className="text-sm text-slate-300 text-center whitespace-nowrap">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}