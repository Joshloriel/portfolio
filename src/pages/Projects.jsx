import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  VscCode, 
  VscEye, 
  VscCheck, 
  VscCopy, 
  VscGithubAlt, 
  VscLinkExternal, 
  VscFolder,
  VscLayers,
  VscInfo,
  VscSparkle
} from 'react-icons/vsc';
import { PROJECTS } from '../constants';

const RAW_PROJECTS_CODE = JSON.stringify(PROJECTS, null, 2);

const Projects = () => {
  const [viewMode, setViewMode] = useState('rendered');
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState('ALL');

  const copyCode = () => {
    navigator.clipboard.writeText(RAW_PROJECTS_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredProjects = filter === 'ALL' 
    ? PROJECTS 
    : filter === 'LIVE'
    ? PROJECTS.filter(p => p.link)
    : PROJECTS.filter(p => !p.link);

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
              <span>Source (JSON)</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          {/* Quick Filter */}
          <div className="flex bg-[#161b22] p-0.5 rounded-lg border border-[#30363d] text-[11px]">
            {['ALL', 'LIVE', 'PLACEHOLDERS'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  filter === f 
                    ? 'bg-[#21262d] text-[#38bdf8] font-semibold' 
                    : 'text-[#8b949e] hover:text-[#f0f6fc]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded text-[#8b949e] hover:text-[#f0f6fc] transition-colors"
          >
            {copied ? <VscCheck className="w-3.5 h-3.5 text-[#34d399]" /> : <VscCopy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy JSON'}</span>
          </button>
        </div>
      </div>

      {viewMode === 'code' ? (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 overflow-x-auto shadow-2xl">
          <pre className="text-xs md:text-sm text-[#c9d1d9] leading-relaxed font-mono">
            <code>
              {RAW_PROJECTS_CODE.split('\n').map((line, i) => (
                <div key={i} className="flex hover:bg-[#1c2128] py-0.5 rounded px-1">
                  <span className="w-8 text-right pr-4 text-[#484f58] select-none text-xs">{i + 1}</span>
                  <span className="flex-1">
                    {line.includes('"title":') || line.includes('"category":') || line.includes('"badge":') ? (
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
          {/* Header Title */}
          <div className="space-y-2">
            <div className="text-xs text-[#38bdf8] uppercase font-bold tracking-wider">
              // Production Repositories & Systems
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#f0f6fc]">
              Featured Applications & Repos
            </h1>
            <p className="text-xs md:text-sm text-[#8b949e] max-w-3xl leading-relaxed">
              Showcase of engineered web applications, live client storefronts, interactive entertainment platforms, and customizable slots for upcoming software builds.
            </p>
          </div>

          {/* Project List / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((proj, idx) => {
              const isPlaceholder = !proj.image;

              return (
                <div 
                  key={proj.id || idx}
                  className={`bg-[#161b22] border rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                    isPlaceholder
                      ? 'border-dashed border-[#30363d] hover:border-[#38bdf8]/60 bg-[#161b22]/70'
                      : 'border-[#21262d] hover:border-[#38bdf8]/60 shadow-2xl hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]'
                  }`}
                >
                  {/* Top Preview Image or Placeholder Banner */}
                  {proj.image ? (
                    <div className="h-52 w-full overflow-hidden bg-[#0d1117] relative group border-b border-[#21262d]">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-80"></div>
                      <span className="absolute top-3 right-3 bg-[#0d1117]/90 backdrop-blur-md text-[#34d399] border border-[#34d399]/40 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                        ● {proj.status}
                      </span>
                    </div>
                  ) : (
                    <div className="h-44 w-full bg-[#0d1117]/80 border-b border-dashed border-[#30363d] flex flex-col items-center justify-center p-6 text-center space-y-2 relative">
                      <div className="p-3 bg-[#161b22] rounded-full border border-[#30363d] text-[#38bdf8]">
                        <VscSparkle className="w-6 h-6 animate-pulse" />
                      </div>
                      <span className="text-xs text-[#c9d1d9] font-bold">
                        {proj.title}
                      </span>
                      <span className="text-[11px] text-[#8b949e]">
                        Ready to link your new repository or portfolio website
                      </span>
                      <span className="absolute top-3 right-3 bg-[#21262d] text-[#c084fc] text-[10px] font-bold px-2 py-0.5 rounded border border-[#30363d]">
                        {proj.badge}
                      </span>
                    </div>
                  )}

                  {/* Project Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-bold text-[#f0f6fc] hover:text-[#38bdf8] transition-colors">
                          {proj.title}
                        </h3>
                        {proj.image && (
                          <span className="text-[10px] font-mono bg-[#0d1117] text-[#38bdf8] px-2 py-0.5 rounded border border-[#21262d]">
                            {proj.badge}
                          </span>
                        )}
                      </div>

                      <div className="text-xs text-[#818cf8] font-semibold">
                        {proj.category}
                      </div>

                      <p className="text-xs text-[#8b949e] leading-relaxed">
                        {proj.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {proj.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 bg-[#0d1117] text-[#c9d1d9] border border-[#21262d] rounded text-[11px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      {proj.highlights && (
                        <div className="pt-2 border-t border-[#21262d]/60 space-y-1">
                          {proj.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="text-[11px] text-[#8b949e] flex items-start gap-1.5">
                              <span className="text-[#34d399] mt-0.5">✓</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-[#21262d] flex items-center justify-between">
                      {proj.link || proj.git ? (
                        <div className="flex items-center gap-3">
                          {proj.link && (
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noreferrer"
                              className="ide-btn-primary text-xs py-1.5 px-3"
                            >
                              <VscLinkExternal className="w-3.5 h-3.5" />
                              <span>Live Preview</span>
                            </a>
                          )}
                          {proj.git && (
                            <a
                              href={proj.git}
                              target="_blank"
                              rel="noreferrer"
                              className="ide-btn-secondary text-xs py-1.5 px-3"
                            >
                              <VscGithubAlt className="w-3.5 h-3.5" />
                              <span>Repository</span>
                            </a>
                          )}
                        </div>
                      ) : (
                        <div className="text-[11px] text-[#656c76] italic">
                          ℹ️ Edit constants/index.js to link your live demo & repo
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Note about Adding Projects */}
          <div className="p-4 bg-[#161b22] border border-[#21262d] rounded-xl flex items-center gap-3 text-xs text-[#8b949e]">
            <VscInfo className="w-5 h-5 text-[#38bdf8] shrink-0" />
            <div>
              Looking to add your other portfolios or projects? Simply update the <code className="text-[#38bdf8] bg-[#0d1117] px-1 py-0.5 rounded">PROJECTS</code> array in <code className="text-[#c084fc] bg-[#0d1117] px-1 py-0.5 rounded">src/constants/index.js</code> with your image, links, and details anytime!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
