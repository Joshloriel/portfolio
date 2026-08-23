import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  VscTerminal, 
  VscClose, 
  VscTrash,
  VscCheck
} from 'react-icons/vsc';
import { PROFILE, SKILL_CATEGORIES, PROJECTS, EXPERIENCES, SOCIAL_LINKS } from '../../constants';

export const TerminalDrawer = ({ isOpen, onToggle }) => {
  const [activeTab, setActiveTab] = useState('terminal');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Josh Loriel L. So - Full-Stack Developer Environment [v2.4.0-enterprise]`
    },
    {
      type: 'system',
      text: 'Type "help" to view commands, "experience" to see career history, or "npm run hire" to start.'
    }
  ]);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    const newHistory = [...history, { type: 'input', text: `$ ${cmd}` }];

    if (!trimmed) {
      setHistory(newHistory);
      return;
    }

    switch (mainCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  about           - Summary, contact info & location
  experience      - View work history (EasyGeo, KaChick, Iloilo Gov)
  skills          - Technical competencies (React, Next.js, Java Spring, etc.)
  projects        - Featured projects & enterprise applications
  education       - University & capstone details
  contact         - Email, phone, GitHub & socials
  cat <file>      - Read file (e.g. "cat resume", "cat experience.log")
  open <page>     - Navigate to page (profile, experience, skills, projects, contact)
  clear / cls     - Clear terminal screen
  npm run hire    - Trigger candidate match celebration & initiate contact
  whoami          - Current visitor role`
        });
        break;

      case 'about':
      case 'bio':
        newHistory.push({
          type: 'output',
          text: `${PROFILE.name} - ${PROFILE.role}
Location: ${PROFILE.location} | Phone: ${PROFILE.phone}
Email: ${PROFILE.email}
Summary: ${PROFILE.summary}`
        });
        break;

      case 'experience':
      case 'history':
        const expText = EXPERIENCES.map(
          e => `▶ ${e.company} (${e.companyType}) - ${e.role} [${e.period}]\n  Stack: ${e.techStack.join(', ')}\n${e.highlights.map(h => `  * ${h}`).join('\n')}`
        ).join('\n\n');
        newHistory.push({ type: 'output', text: expText });
        break;

      case 'skills':
        const skillsText = SKILL_CATEGORIES.map(
          c => `▶ ${c.category}:\n  ${c.skills.map(s => s.name).join(', ')}`
        ).join('\n\n');
        newHistory.push({ type: 'output', text: skillsText });
        break;

      case 'projects':
        const projText = PROJECTS.map(
          (p, i) => `[${i + 1}] ${p.title} (${p.category})\n    Tech: ${p.techStack.join(', ')}\n    Status: ${p.status}`
        ).join('\n\n');
        newHistory.push({ type: 'output', text: projText });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `Institution: ${PROFILE.education.institution}
Degree: ${PROFILE.education.degree} (Graduated: ${PROFILE.education.graduated})
Capstone: ${PROFILE.education.capstone}
Certifications: ${PROFILE.education.certifications.join(', ')}`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email:    ${PROFILE.email}
Phone:    ${PROFILE.phone}
Location: ${PROFILE.location}
GitHub:   ${SOCIAL_LINKS.github}`
        });
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        return;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `guest@josh-portfolio ~ Access Level: Recruiter / Tech Lead (Read-Write-Hire)`
        });
        break;

      case 'open':
      case 'cd':
        const target = args.toLowerCase();
        if (target.includes('exp')) {
          navigate('/experience');
          newHistory.push({ type: 'success', text: `Navigating to /experience...` });
        } else if (target.includes('skill')) {
          navigate('/skills');
          newHistory.push({ type: 'success', text: `Navigating to /skills...` });
        } else if (target.includes('project')) {
          navigate('/projects');
          newHistory.push({ type: 'success', text: `Navigating to /projects...` });
        } else if (target.includes('contact')) {
          navigate('/contact');
          newHistory.push({ type: 'success', text: `Navigating to /contact...` });
        } else if (target.includes('profile') || target === '~' || target === '/') {
          navigate('/');
          newHistory.push({ type: 'success', text: `Navigating to /profile...` });
        } else {
          newHistory.push({ type: 'error', text: `Destination "${args}" not found. Try: open profile | experience | skills | projects | contact` });
        }
        break;

      case 'cat':
        if (args.toLowerCase().includes('resume') || args.toLowerCase().includes('cv')) {
          window.open('/resume.pdf', '_blank');
          newHistory.push({ type: 'success', text: `Opening resume.pdf in new tab...` });
        } else if (args.toLowerCase().includes('experience') || args.toLowerCase().includes('log')) {
          newHistory.push({ type: 'output', text: JSON.stringify(EXPERIENCES, null, 2) });
        } else if (args.toLowerCase().includes('profile')) {
          newHistory.push({ type: 'output', text: JSON.stringify(PROFILE, null, 2) });
        } else {
          newHistory.push({ type: 'output', text: `Reading ${args}...\nFile status: Verified clean.` });
        }
        break;

      case 'npm':
        if (args.includes('run hire') || args.includes('hire') || args.includes('install candidate')) {
          newHistory.push({
            type: 'celebrate',
            text: `🎉 EXCELLENT CHOICE! Candidate match confirmed (100%).
Redirecting to contact dispatcher... Let's build extraordinary software together!`
          });
          setTimeout(() => {
            navigate('/contact');
          }, 1500);
        } else {
          newHistory.push({ type: 'output', text: `npm: script "${args}" executed.` });
        }
        break;

      case 'hire':
        newHistory.push({
          type: 'celebrate',
          text: `🎉 Candidate match confirmed! Redirecting to contact module...`
        });
        setTimeout(() => {
          navigate('/contact');
        }, 1200);
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `zsh: command not found: ${mainCmd}. Type "help" for a list of commands.`
        });
        break;
    }

    setHistory(newHistory);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputVal) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div className="border-t border-[#21262d] bg-[#0a0d12] flex flex-col h-56 transition-all duration-200 select-text">
      {/* Terminal Header Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#161b22] border-b border-[#21262d] text-xs">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 font-medium transition-colors ${
              activeTab === 'terminal' ? 'text-[#38bdf8] border-b border-[#38bdf8] pb-0.5' : 'text-[#8b949e] hover:text-[#c9d1d9]'
            }`}
          >
            <VscTerminal className="w-3.5 h-3.5" />
            <span>TERMINAL</span>
          </button>
          <button 
            onClick={() => setActiveTab('output')}
            className={`flex items-center gap-1.5 font-medium transition-colors ${
              activeTab === 'output' ? 'text-[#38bdf8] border-b border-[#38bdf8] pb-0.5' : 'text-[#8b949e] hover:text-[#c9d1d9]'
            }`}
          >
            <span>OUTPUT</span>
          </button>
          <button 
            onClick={() => setActiveTab('problems')}
            className={`flex items-center gap-1.5 font-medium transition-colors ${
              activeTab === 'problems' ? 'text-[#38bdf8] border-b border-[#38bdf8] pb-0.5' : 'text-[#8b949e] hover:text-[#c9d1d9]'
            }`}
          >
            <span>PROBLEMS</span>
            <span className="bg-[#21262d] text-[#34d399] px-1 rounded-full text-[10px]">0</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-[#8b949e]">
          <button 
            onClick={() => setHistory([])}
            title="Clear Terminal"
            className="p-1 hover:text-[#c9d1d9] hover:bg-[#21262d] rounded transition-colors"
          >
            <VscTrash className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={onToggle}
            title="Close Terminal Panel"
            className="p-1 hover:text-[#c9d1d9] hover:bg-[#21262d] rounded transition-colors"
          >
            <VscClose className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 overflow-y-auto p-3 font-mono text-xs text-[#c9d1d9] space-y-1.5 leading-relaxed">
        {activeTab === 'terminal' && (
          <>
            {history.map((line, idx) => (
              <div key={idx} className="whitespace-pre-wrap">
                {line.type === 'input' && (
                  <span className="text-[#38bdf8] font-semibold">{line.text}</span>
                )}
                {line.type === 'system' && (
                  <span className="text-[#8b949e]">{line.text}</span>
                )}
                {line.type === 'output' && (
                  <span className="text-[#e6edf3]">{line.text}</span>
                )}
                {line.type === 'success' && (
                  <span className="text-[#34d399]">{line.text}</span>
                )}
                {line.type === 'error' && (
                  <span className="text-[#f87171]">{line.text}</span>
                )}
                {line.type === 'celebrate' && (
                  <div className="p-2 my-1 bg-[#1c2e24] border border-[#34d399]/40 rounded text-[#34d399] font-bold">
                    {line.text}
                  </div>
                )}
              </div>
            ))}

            <form onSubmit={onSubmit} className="flex items-center gap-2 pt-1">
              <span className="text-[#34d399] font-bold">josh-portfolio</span>
              <span className="text-[#c084fc] font-semibold">git:(main)</span>
              <span className="text-[#38bdf8]">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'experience', 'npm run hire'..."
                className="flex-1 bg-transparent border-none outline-none text-[#f0f6fc] text-xs font-mono caret-[#38bdf8]"
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </>
        )}

        {activeTab === 'output' && (
          <div className="text-[#8b949e] space-y-1">
            <p>[Vite DevServer] Ready in 261ms. Local: http://localhost:5173/</p>
            <p>[HMR] Hot module replacement active.</p>
            <p className="text-[#34d399]">[Build Status] 0 errors, 0 warnings. Code quality verified.</p>
          </div>
        )}

        {activeTab === 'problems' && (
          <div className="flex items-center gap-2 text-[#34d399] pt-2">
            <VscCheck className="w-4 h-4" />
            <span>No problems have been detected in the workspace.</span>
          </div>
        )}
      </div>
    </div>
  );
};
