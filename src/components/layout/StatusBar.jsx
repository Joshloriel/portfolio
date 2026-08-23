import React from 'react';
import { 
  VscSourceControl, 
  VscError, 
  VscWarning, 
  VscRadioTower, 
  VscCheckAll, 
  VscTerminal,
  VscFeedback
} from 'react-icons/vsc';

export const StatusBar = ({ onToggleTerminal, isTerminalOpen }) => {
  return (
    <footer className="h-6 bg-[#1f242c] border-t border-[#21262d] flex items-center justify-between px-3 text-[11px] font-mono text-[#8b949e] select-none z-30">
      {/* Left side items */}
      <div className="flex items-center gap-4">
        {/* Remote Host */}
        <div className="bg-[#2563eb] text-white px-2 py-0.5 -ml-3 flex items-center gap-1 font-semibold text-[10px]">
          <VscRadioTower className="w-3 h-3" />
          <span>portfolio:5173</span>
        </div>

        {/* Git Branch */}
        <div className="flex items-center gap-1 hover:text-[#f0f6fc] cursor-pointer transition-colors">
          <VscSourceControl className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>main*</span>
        </div>

        {/* Errors & Warnings */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-0.5 text-[#34d399]">
            <VscCheckAll className="w-3.5 h-3.5" />
            <span>0 Problems</span>
          </span>
        </div>
      </div>

      {/* Right side items */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleTerminal}
          className={`flex items-center gap-1 px-1.5 py-0.5 rounded transition-colors ${
            isTerminalOpen ? 'text-[#38bdf8] bg-[#161b22]' : 'hover:text-[#f0f6fc]'
          }`}
        >
          <VscTerminal className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Terminal</span>
        </button>

        <span className="hidden md:inline">UTF-8</span>
        <span className="hidden md:inline text-[#38bdf8]">TypeScript JSX</span>
        <span className="hidden sm:inline text-[#34d399]">Prettier</span>
        <span className="flex items-center gap-1 text-[#f472b6]">
          <span>React 18</span>
        </span>
      </div>
    </footer>
  );
};
