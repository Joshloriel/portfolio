import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  VscCode, 
  VscEye, 
  VscCheck, 
  VscCopy, 
  VscTools, 
  VscServer, 
  VscDeviceMobile, 
  VscSymbolClass,
  VscDatabase,
  VscSparkle
} from 'react-icons/vsc';
import { SKILL_CATEGORIES } from '../constants';
import { FileIcon } from '../components/ui/FileIcon';

const RAW_SKILLS_CODE = `/**
 * @file Skills.ts
 * @description Technical capabilities & architecture competencies
 * @source Resume: Josh Loriel L. So (Full-Stack Developer)
 */

export interface SkillCategory {
  category: string;
  skills: { name: string; level: 'Advanced' | 'Proficient'; tag: string }[];
}

export const TECHNICAL_COMPETENCIES: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Core" },
      { name: "TypeScript", level: "Advanced", tag: "Typed" },
      { name: "Java", level: "Advanced", tag: "Backend/OOP" },
      { name: "PHP", level: "Advanced", tag: "Backend" },
      { name: "HTML5", level: "Advanced", tag: "Markup" },
      { name: "CSS3", level: "Advanced", tag: "Styling" }
    ]
  },
  {
    category: "Frontend Frameworks & UI",
    skills: [
      { name: "React.js", level: "Advanced", tag: "Framework" },
      { name: "Next.js", level: "Advanced", tag: "Full-Stack" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Styling" },
      { name: "Bootstrap", level: "Advanced", tag: "UI" },
      { name: "jQuery", level: "Proficient", tag: "DOM" }
    ]
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Java Spring", level: "Advanced", tag: "Enterprise" },
      { name: "Node.js", level: "Advanced", tag: "Runtime" },
      { name: "RESTful APIs", level: "Advanced", tag: "Architecture" },
      { name: "Laravel", level: "Advanced", tag: "Framework" }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", level: "Advanced", tag: "Relational" },
      { name: "MySQL", level: "Advanced", tag: "Relational" },
      { name: "MSSQL", level: "Proficient", tag: "Enterprise" },
      { name: "Supabase", level: "Proficient", tag: "BaaS" },
      { name: "Firebase", level: "Proficient", tag: "Realtime" }
    ]
  },
  {
    category: "AI & Integration",
    skills: [
      { name: "AI API Integration", level: "Advanced", tag: "LLM" },
      { name: "AI Chatbot Development", level: "Advanced", tag: "Agents" }
    ]
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git", level: "Advanced", tag: "VCS" },
      { name: "GitHub / GitLab", level: "Advanced", tag: "Remote/CI" },
      { name: "Figma", level: "Proficient", tag: "Design" },
      { name: "Trello / Asana (Kanban)", level: "Advanced", tag: "Agile" }
    ]
  }
];`;

const Skills = () => {
  const [viewMode, setViewMode] = useState('rendered');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(RAW_SKILLS_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8 font-mono">
      {/* Editor Sub-Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#21262d]">
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#8b949e]">VIEW MODE:</span>
          <div className="flex bg-[#161b22] p-0.5 rounded-lg border border-[#30363d] text-xs">
            <button
              onClick={() => setViewMode('rendered')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                viewMode === 'rendered'
                  ? 'bg-[#21262d] text-[#38bdf8] font-bold shadow-sm'
                  : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              <VscEye className="w-3.5 h-3.5" />
              <span>Interactive GUI</span>
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                viewMode === 'code'
                  ? 'bg-[#21262d] text-[#38bdf8] font-bold shadow-sm'
                  : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              <VscCode className="w-3.5 h-3.5" />
              <span>Source (TS)</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded text-[#8b949e] hover:text-[#f0f6fc] transition-colors"
          >
            {copied ? <VscCheck className="w-3.5 h-3.5 text-[#34d399]" /> : <VscCopy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Code'}</span>
          </button>
        </div>
      </div>

      {viewMode === 'code' ? (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 overflow-x-auto shadow-2xl">
          <pre className="text-xs md:text-sm text-[#c9d1d9] leading-relaxed font-mono">
            <code>
              {RAW_SKILLS_CODE.split('\n').map((line, i) => (
                <div key={i} className="flex hover:bg-[#1c2128] py-0.5 rounded px-1">
                  <span className="w-8 text-right pr-4 text-[#484f58] select-none text-xs">{i + 1}</span>
                  <span className="flex-1">
                    {line.startsWith('/**') || line.startsWith(' *') || line.startsWith(' */') ? (
                      <span className="text-[#8b949e] italic">{line}</span>
                    ) : line.includes('export interface') || line.includes('export const') ? (
                      <span className="token-keyword">{line}</span>
                    ) : line.includes(':') ? (
                      <span>
                        <span className="token-property">{line.split(':')[0]}</span>:
                        <span className="token-string">{line.split(':')[1]}</span>
                      </span>
                    ) : (
                      <span>{line}</span>
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      ) : (
        /* Rendered Mode */
        <div className="space-y-8">
          {/* Header Description */}
          <div className="space-y-2">
            <div className="text-xs text-[#38bdf8] uppercase font-bold tracking-wider">
              // Technical Capabilities & Resume Stack
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#f0f6fc]">
              Technical Skills & Proficiencies
            </h1>
            <p className="text-xs md:text-sm text-[#8b949e] max-w-3xl leading-relaxed">
              Full-stack skillset encompassing modern frontend ecosystems (React, Next.js, Tailwind), enterprise backends (Java Spring, Node.js), relational & cloud databases, and AI API integrations.
            </p>
          </div>

          {/* Skill Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div 
                key={idx}
                className="bg-[#161b22] border border-[#21262d] rounded-xl p-5 hover:border-[#38bdf8]/40 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 border-b border-[#21262d] pb-3">
                  <span className="p-2 bg-[#0d1117] rounded-lg border border-[#30363d] text-[#38bdf8]">
                    {cat.category.includes('Languages') && <VscCode className="w-4 h-4 text-[#facc15]" />}
                    {cat.category.includes('Frontend') && <VscCode className="w-4 h-4 text-[#38bdf8]" />}
                    {cat.category.includes('Backend') && <VscServer className="w-4 h-4 text-[#818cf8]" />}
                    {cat.category.includes('Databases') && <VscDatabase className="w-4 h-4 text-[#60a5fa]" />}
                    {cat.category.includes('AI') && <VscSparkle className="w-4 h-4 text-[#34d399]" />}
                    {cat.category.includes('Tools') && <VscTools className="w-4 h-4 text-[#c084fc]" />}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#f0f6fc]">{cat.category}</h3>
                    <p className="text-[10px] text-[#8b949e] line-clamp-1">{cat.description}</p>
                  </div>
                </div>

                {/* Skills Badges Grid */}
                <div className="grid grid-cols-1 gap-2 pt-1 flex-1">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="flex items-center justify-between p-2 bg-[#0d1117] border border-[#21262d] hover:border-[#30363d] rounded-lg group transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <FileIcon type={skill.icon} className="w-4 h-4" />
                        <span className="text-xs font-semibold text-[#c9d1d9] group-hover:text-[#38bdf8] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        skill.level === 'Advanced' 
                          ? 'bg-[#0f2d1e] text-[#34d399] border border-[#34d399]/30' 
                          : 'bg-[#21262d] text-[#8b949e]'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture & Engineering Standards */}
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl p-6 space-y-4">
            <div className="text-xs text-[#38bdf8] font-bold uppercase tracking-wider flex items-center gap-2">
              <VscSymbolClass className="w-4 h-4" />
              <span>Engineering Competencies & Practices</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-[#0d1117] rounded-lg border border-[#21262d] space-y-1">
                <div className="font-bold text-[#38bdf8]">Smart Factory & SaaS Frameworks</div>
                <div className="text-[#8b949e] leading-relaxed">
                  Experience supporting ERP, MES, SPC, POP, PLM, and SCM data flows and factory floor interfaces.
                </div>
              </div>
              <div className="p-3 bg-[#0d1117] rounded-lg border border-[#21262d] space-y-1">
                <div className="font-bold text-[#34d399]">AI API Integration & Chatbots</div>
                <div className="text-[#8b949e] leading-relaxed">
                  Building intelligent conversational agents, prompt integration, and responsive AI frontend interfaces.
                </div>
              </div>
              <div className="p-3 bg-[#0d1117] rounded-lg border border-[#21262d] space-y-1">
                <div className="font-bold text-[#c084fc]">Municipal Systems Transformation</div>
                <div className="text-[#8b949e] leading-relaxed">
                  Architecting high-reliability Document Tracking and Emergency Patient Dispatch portals.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
