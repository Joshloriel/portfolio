import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  VscCode, 
  VscEye, 
  VscGithub, 
  VscMail, 
  VscFilePdf, 
  VscTerminal,
  VscCheck,
  VscCopy,
  VscFolderOpened,
  VscHistory,
  VscBriefcase,
  VscCallIncoming,
  VscLocation
} from 'react-icons/vsc';
import { SiReact, SiNextdotjs, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { PROFILE, SOCIAL_LINKS, EXPERIENCES } from '../constants';
import JoshImg from '../assets/josh.jpg';

const RAW_PROFILE_CODE = `/**
 * @file Profile.tsx
 * @author ${PROFILE.name}
 * @contact ${PROFILE.email} | ${PROFILE.phone}
 * @location ${PROFILE.location}
 */

export interface ResumeProfile {
  name: string;
  title: string;
  location: string;
  contacts: { email: string; phone: string; github: string };
  summary: string;
  enterpriseRoles: string[];
  coreTech: string[];
  education: { school: string; degree: string; year: string };
}

export const engineer: ResumeProfile = {
  name: "${PROFILE.name}",
  title: "${PROFILE.role}",
  location: "${PROFILE.location}",
  contacts: {
    email: "${PROFILE.email}",
    phone: "${PROFILE.phone}",
    github: "${SOCIAL_LINKS.github}"
  },
  summary: "${PROFILE.summary}",
  enterpriseRoles: [
    "EasyGeo Co. Ltd. (Korean Tech) - Full-Stack Engineer [WorkStudio Smart Factory ERP/MES]",
    "KaChick (Hong Kong Startup) - Software Engineering Intern [slom.ai, trackbill.io]",
    "Iloilo City Government - Junior Programmer [Document Tracking & Emergency Dispatch]"
  ],
  coreTech: [
    "React.js", "Next.js", "Java Spring", "TypeScript",
    "PostgreSQL", "MySQL", "Tailwind CSS", "REST APIs"
  ],
  education: {
    school: "${PROFILE.education.institution}",
    degree: "${PROFILE.education.degree}",
    year: "${PROFILE.education.graduated}"
  }
};`;

const Home = () => {
  const [viewMode, setViewMode] = useState('rendered');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(RAW_PROFILE_CODE);
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
              <span>Source (TSX)</span>
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
          <span className="text-[#34d399] bg-[#161b22] px-2.5 py-1 rounded border border-[#21262d] flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse"></span>
            Open to Hire
          </span>
        </div>
      </div>

      {viewMode === 'code' ? (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 overflow-x-auto shadow-2xl">
          <pre className="text-xs md:text-sm text-[#c9d1d9] leading-relaxed font-mono">
            <code>
              {RAW_PROFILE_CODE.split('\n').map((line, i) => (
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
          {/* Main Hero Card */}
          <div className="bg-[#161b22] border border-[#21262d] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#38bdf8]/10 via-[#818cf8]/5 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

            <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
              {/* Photo / Avatar */}
              <div className="md:col-span-4 flex flex-col items-center">
                <div className="relative group">
                  <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-[#38bdf8]/50 shadow-2xl p-1 bg-[#0d1117] transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={JoshImg}
                      alt={PROFILE.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0d1117] border border-[#30363d] px-3 py-1 rounded-full text-[11px] font-semibold text-[#38bdf8] flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-[#34d399]"></span>
                    Full-Stack Engineer
                  </div>
                </div>

                {/* Location & Quick Contact */}
                <div className="mt-6 text-center space-y-1.5">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-[#8b949e]">
                    <VscLocation className="text-[#38bdf8]" />
                    <span>{PROFILE.location}</span>
                  </div>
                  <div className="text-xs text-[#c9d1d9] font-mono">
                    {PROFILE.phone}
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex gap-3 mt-3">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-[#0d1117] hover:bg-[#21262d] border border-[#30363d] rounded-lg text-[#8b949e] hover:text-[#38bdf8] hover:border-[#38bdf8] transition-all"
                    title="GitHub Profile"
                  >
                    <VscGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.email}
                    className="p-2.5 bg-[#0d1117] hover:bg-[#21262d] border border-[#30363d] rounded-lg text-[#8b949e] hover:text-[#38bdf8] hover:border-[#38bdf8] transition-all"
                    title="Direct Email"
                  >
                    <VscMail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="md:col-span-8 space-y-4">
                <div className="space-y-1">
                  <div className="text-xs text-[#38bdf8] uppercase tracking-wider font-bold">
                    // Software Engineer Portfolio
                  </div>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-[#f0f6fc] tracking-tight">
                    {PROFILE.name}
                  </h1>
                  <p className="text-base md:text-lg text-[#818cf8] font-semibold">
                    {PROFILE.role}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-[#8b949e] leading-relaxed">
                  {PROFILE.summary}
                </p>

                {/* Verified Core Tech Stack */}
                <div className="pt-2">
                  <div className="text-xs text-[#656c76] mb-2 font-semibold uppercase">Core Production Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#0d1117] border border-[#30363d] rounded-md text-xs text-[#c9d1d9] flex items-center gap-1.5">
                      <SiReact className="text-[#38bdf8]" /> React & Next.js
                    </span>
                    <span className="px-3 py-1 bg-[#0d1117] border border-[#30363d] rounded-md text-xs text-[#c9d1d9] flex items-center gap-1.5">
                      <FaJava className="text-[#f87171]" /> Java Spring
                    </span>
                    <span className="px-3 py-1 bg-[#0d1117] border border-[#30363d] rounded-md text-xs text-[#c9d1d9] flex items-center gap-1.5">
                      <SiPostgresql className="text-[#60a5fa]" /> PostgreSQL / MySQL
                    </span>
                    <span className="px-3 py-1 bg-[#0d1117] border border-[#30363d] rounded-md text-xs text-[#c9d1d9] flex items-center gap-1.5">
                      <SiTailwindcss className="text-[#38bdf8]" /> Tailwind CSS
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link to="/experience" className="ide-btn-primary">
                    <VscBriefcase className="w-4 h-4" />
                    <span>View Career Experience</span>
                  </Link>
                  <Link to="/projects" className="ide-btn-secondary">
                    <VscFolderOpened className="w-4 h-4" />
                    <span>Explore Repos</span>
                  </Link>
                  <Link to="/contact" className="ide-btn-secondary">
                    <VscMail className="w-4 h-4" />
                    <span>Contact Me</span>
                  </Link>
                  <button
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    className="ide-btn-secondary"
                  >
                    <VscFilePdf className="w-4 h-4 text-[#f87171]" />
                    <span>Resume (PDF)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Experience Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="ide-card p-5 space-y-2">
              <div className="text-xs text-[#38bdf8] font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="text-base">🏢</span> EasyGeo Co. Ltd.
              </div>
              <div className="text-[11px] text-[#818cf8] font-semibold">Full-Stack Engineer (Korean Tech)</div>
              <p className="text-xs text-[#8b949e] leading-relaxed">
                Smart factory platform WorkStudio (ERP, MES, SPC, POP, PLM, SCM) real-time data flows.
              </p>
            </div>

            <div className="ide-card p-5 space-y-2">
              <div className="text-xs text-[#34d399] font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="text-base">🚀</span> KaChick (Hong Kong)
              </div>
              <div className="text-[11px] text-[#818cf8] font-semibold">Software Engineering Intern</div>
              <p className="text-xs text-[#8b949e] leading-relaxed">
                Client-side development for slom.ai (Solomon AI), trackbill.io, and photospots.
              </p>
            </div>

            <div className="ide-card p-5 space-y-2">
              <div className="text-xs text-[#c084fc] font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="text-base">🏛️</span> Iloilo City Government
              </div>
              <div className="text-[11px] text-[#818cf8] font-semibold">Junior Programmer</div>
              <p className="text-xs text-[#8b949e] leading-relaxed">
                Centralized Document Tracking, Emergency Patient Reporting & Dispatch, and demographics DB.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
