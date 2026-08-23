import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  VscSearch, 
  VscFileCode, 
  VscSymbolInterface, 
  VscBriefcase, 
  VscMail, 
  VscGithubAlt, 
  VscArrowRight,
  VscClose
} from 'react-icons/vsc';
import { SOCIAL_LINKS } from '../../constants';

export const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Keyboard shortcut listener for Ctrl+K and ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset query on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const commands = [
    {
      id: 'profile',
      title: 'Profile.tsx',
      subtitle: 'Developer Overview, Bio & Highlights',
      category: 'Files',
      action: () => navigate('/')
    },
    {
      id: 'experience',
      title: 'Experience.log',
      subtitle: 'EasyGeo (Smart Factory), KaChick (AI/Startups), Iloilo Gov',
      category: 'Files',
      action: () => navigate('/experience')
    },
    {
      id: 'skills',
      title: 'Skills.ts',
      subtitle: 'React, Next.js, Java Spring, PostgreSQL, AI APIs',
      category: 'Files',
      action: () => navigate('/skills')
    },
    {
      id: 'projects',
      title: 'Projects.json',
      subtitle: 'WorkStudio, slom.ai, Jianzin Capstone, CoffeeSo, MovieLor',
      category: 'Files',
      action: () => navigate('/projects')
    },
    {
      id: 'contact',
      title: 'Contact.sh',
      subtitle: 'joshlorielsoo@gmail.com | +63 936 903 2114',
      category: 'Files',
      action: () => navigate('/contact')
    },
    {
      id: 'resume',
      title: 'View Resume (PDF)',
      subtitle: 'Open developer resume in a new tab',
      category: 'Actions',
      action: () => window.open('/resume.pdf', '_blank')
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/Joshloriel',
      category: 'External',
      action: () => window.open(SOCIAL_LINKS.github, '_blank')
    },
    {
      id: 'email',
      title: 'Send Direct Email',
      subtitle: 'joshlorielsoo@gmail.com',
      category: 'External',
      action: () => window.open(SOCIAL_LINKS.email, '_blank')
    }
  ];

  const filtered = commands.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 md:pt-24 px-4 select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="w-full max-w-xl bg-[#161b22] border border-[#30363d] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-[#21262d] gap-3 bg-[#161b22]">
          <VscSearch className="w-5 h-5 text-[#38bdf8] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search workspace files..."
            className="flex-1 bg-transparent border-none outline-none text-[#f0f6fc] text-xs md:text-sm font-mono placeholder:text-[#6e7681]"
            autoFocus
          />
          <button 
            type="button"
            onClick={onClose}
            title="Close (Esc)"
            className="text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d] p-1.5 rounded-md transition-colors cursor-pointer"
          >
            <VscClose className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#8b949e] font-mono">
              No matching files or commands found.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  item.action();
                  onClose();
                }}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#21262d] hover:border-l-2 hover:border-[#38bdf8] cursor-pointer transition-all group text-xs font-mono"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="text-[#38bdf8] shrink-0">
                    {item.category === 'Files' && <VscFileCode className="w-4 h-4" />}
                    {item.category === 'Actions' && <VscSymbolInterface className="w-4 h-4 text-[#34d399]" />}
                    {item.category === 'External' && <VscArrowRight className="w-4 h-4 text-[#c084fc]" />}
                  </span>
                  <div className="overflow-hidden">
                    <div className="text-[#f0f6fc] font-semibold group-hover:text-[#38bdf8] transition-colors truncate">
                      {item.title}
                    </div>
                    <div className="text-[#8b949e] text-[11px] truncate">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] uppercase text-[#6e7681] bg-[#0d1117] px-2 py-0.5 rounded border border-[#21262d] shrink-0 ml-2">
                  {item.category}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#0d1117] border-t border-[#21262d] flex items-center justify-between text-[11px] text-[#8b949e]">
          <span>Navigation: <kbd className="bg-[#21262d] px-1.5 py-0.5 rounded text-[#f0f6fc]">↑</kbd> <kbd className="bg-[#21262d] px-1.5 py-0.5 rounded text-[#f0f6fc]">↓</kbd></span>
          <span>Close: <kbd className="bg-[#21262d] px-1.5 py-0.5 rounded text-[#f0f6fc] cursor-pointer" onClick={onClose}>ESC</kbd></span>
        </div>
      </div>
    </div>
  );
};
