import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  VscCode, 
  VscEye, 
  VscCheck, 
  VscCopy, 
  VscBriefcase, 
  VscOrganization, 
  VscCalendar, 
  VscMortarBoard,
  VscVerified,
  VscLayers
} from 'react-icons/vsc';
import { EXPERIENCES, PROFILE } from '../constants';

const RAW_EXPERIENCE_LOG = `// -------------------------------------------------------------
// SYSTEM EVENT LOG: CAREER_HISTORY & ENTERPRISE_ENGAGEMENTS
// Target: ${PROFILE.name} <${PROFILE.email}>
// -------------------------------------------------------------

${EXPERIENCES.map((exp, i) => `[LOG_${i + 1}] PERIOD: ${exp.period} | ENTITY: ${exp.company} (${exp.companyType})
ROLE: ${exp.role} | BADGE: ${exp.badge}
STACK: ${exp.techStack.join(', ')}
KEY CONTRIBUTIONS:
${exp.highlights.map(h => `  * ${h}`).join('\n')}
`).join('\n')}

[ACADEMIC_RECORD]
INSTITUTION: ${PROFILE.education.institution}
DEGREE: ${PROFILE.education.degree} (Graduated: ${PROFILE.education.graduated})
CAPSTONE: ${PROFILE.education.capstone}
CERTIFICATIONS:
${PROFILE.education.certifications.map(c => `  * ${c}`).join('\n')}
`;

const Experience = () => {
  const [viewMode, setViewMode] = useState('rendered');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(RAW_EXPERIENCE_LOG);
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
              <span>Interactive Timeline</span>
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
              <span>Raw (LOG)</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded text-[#8b949e] hover:text-[#f0f6fc] transition-colors"
          >
            {copied ? <VscCheck className="w-3.5 h-3.5 text-[#34d399]" /> : <VscCopy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Log'}</span>
          </button>
        </div>
      </div>

      {viewMode === 'code' ? (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 overflow-x-auto shadow-2xl">
          <pre className="text-xs md:text-sm text-[#c9d1d9] leading-relaxed font-mono">
            <code>
              {RAW_EXPERIENCE_LOG.split('\n').map((line, i) => (
                <div key={i} className="flex hover:bg-[#1c2128] py-0.5 rounded px-1">
                  <span className="w-8 text-right pr-4 text-[#484f58] select-none text-xs">{i + 1}</span>
                  <span className="flex-1">
                    {line.startsWith('//') ? (
                      <span className="text-[#8b949e] italic">{line}</span>
                    ) : line.startsWith('[LOG_') || line.startsWith('[ACADEMIC_RECORD]') ? (
                      <span className="text-[#38bdf8] font-bold">{line}</span>
                    ) : line.startsWith('ROLE:') || line.startsWith('PERIOD:') || line.startsWith('INSTITUTION:') ? (
                      <span className="text-[#facc15]">{line}</span>
                    ) : line.startsWith('STACK:') ? (
                      <span className="text-[#34d399]">{line}</span>
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
              // Professional Career History & Engagements
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#f0f6fc]">
              Work Experience & Impact
            </h1>
            <p className="text-xs md:text-sm text-[#8b949e] max-w-3xl leading-relaxed">
              Proven experience delivering high-impact solutions for international tech companies, AI startups, smart factory enterprise frameworks, and municipal digital transformation projects.
            </p>
          </div>

          {/* Timeline of Professional Experience */}
          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div 
                key={exp.id || idx}
                className="bg-[#161b22] border border-[#21262d] rounded-2xl p-6 md:p-8 hover:border-[#38bdf8]/40 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#21262d] pb-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-bold text-[#f0f6fc] group-hover:text-[#38bdf8] transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-[10px] font-mono bg-[#0d1117] text-[#c084fc] px-2 py-0.5 rounded border border-[#30363d]">
                        {exp.badge}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-[#818cf8] mt-0.5">
                      {exp.role} • <span className="text-[#8b949e] font-normal">{exp.companyType}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#8b949e] bg-[#0d1117] px-3 py-1.5 rounded-lg border border-[#21262d] shrink-0">
                    <VscCalendar className="text-[#38bdf8]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-4 space-y-2.5">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs md:text-sm text-[#c9d1d9] flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#34d399] font-bold mt-0.5">▹</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-5 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] text-[#656c76] uppercase font-semibold mr-1">Stack:</span>
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-[#0d1117] text-[#c9d1d9] border border-[#21262d] rounded-md text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Academic Record Card */}
          <div className="bg-[#161b22] border border-[#21262d] rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-3 border-b border-[#21262d] pb-4">
              <div className="p-2.5 bg-[#0d1117] rounded-xl border border-[#30363d] text-[#38bdf8]">
                <VscMortarBoard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#f0f6fc]">
                  {PROFILE.education.institution}
                </h3>
                <p className="text-xs text-[#818cf8]">
                  {PROFILE.education.degree} • <span className="text-[#8b949e]">Graduated {PROFILE.education.graduated}</span>
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs md:text-sm">
              <div className="p-3.5 bg-[#0d1117] rounded-xl border border-[#21262d] space-y-1">
                <div className="font-bold text-[#38bdf8] flex items-center gap-1.5">
                  <VscVerified className="text-[#34d399]" />
                  <span>Capstone Project — Jianzin E-Commerce Platform</span>
                </div>
                <p className="text-xs text-[#8b949e] leading-relaxed">
                  {PROFILE.education.capstone}
                </p>
              </div>

              <div className="pt-2">
                <div className="text-xs text-[#8b949e] font-semibold mb-2 uppercase">Technical Certifications:</div>
                <div className="flex flex-wrap gap-2">
                  {PROFILE.education.certifications.map((cert, cIdx) => (
                    <span 
                      key={cIdx}
                      className="px-3 py-1.5 bg-[#0d1117] border border-[#30363d] rounded-lg text-xs text-[#c9d1d9] flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]"></span>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
