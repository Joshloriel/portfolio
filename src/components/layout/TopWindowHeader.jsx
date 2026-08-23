import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  VscSearch, 
  VscLayoutSidebarLeft, 
  VscChromeMinimize, 
  VscChromeMaximize, 
  VscChromeClose,
  VscChevronRight,
  VscFileCode
} from 'react-icons/vsc';
import { WORKSPACE_FILES } from '../../constants';
import { FileIcon } from '../ui/FileIcon';

export const TopWindowHeader = ({ onToggleSidebar, onOpenCommandPalette }) => {
  const location = useLocation();
  const currentFile = WORKSPACE_FILES.find(f => f.path === location.pathname) || WORKSPACE_FILES[0];

  return (
    <header className="h-10 bg-[#161b22] border-b border-[#21262d] flex items-center justify-between px-3 select-none z-30">
      {/* Left: Traffic Lights + Toggle Sidebar */}
      <div className="flex items-center gap-3">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5 mr-2">
          <div className="w-3 h-3 rounded-full bg-[#f87171] hover:brightness-110 cursor-pointer shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-[#facc15] hover:brightness-110 cursor-pointer shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-[#34d399] hover:brightness-110 cursor-pointer shadow-sm"></div>
        </div>

        {/* Sidebar Toggle button */}
        <button
          onClick={onToggleSidebar}
          title="Toggle Primary Side Bar (Ctrl+B)"
          className="text-[#8b949e] hover:text-[#f0f6fc] p-1 rounded hover:bg-[#21262d] transition-colors"
        >
          <VscLayoutSidebarLeft className="w-4 h-4" />
        </button>

        {/* Workspace Title & Breadcrumbs */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[#8b949e]">
          <span className="text-[#f0f6fc] font-semibold">portfolio</span>
          <VscChevronRight className="w-3 h-3" />
          <span>src</span>
          <VscChevronRight className="w-3 h-3" />
          <span className="flex items-center gap-1 text-[#38bdf8]">
            <FileIcon type={currentFile?.icon} className="w-3.5 h-3.5" />
            {currentFile?.name}
          </span>
        </div>
      </div>

      {/* Center: Command Palette Trigger */}
      <div className="flex-1 max-w-md mx-4">
        <button
          onClick={onOpenCommandPalette}
          className="w-full h-6 px-3 bg-[#0d1117] hover:bg-[#21262d] border border-[#30363d] rounded flex items-center justify-between text-xs font-mono text-[#8b949e] transition-all group shadow-inner"
        >
          <div className="flex items-center gap-2">
            <VscSearch className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span className="group-hover:text-[#c9d1d9] truncate">josh-portfolio (Search files & actions)</span>
          </div>
          <kbd className="hidden md:inline text-[10px] bg-[#161b22] px-1.5 py-0.5 rounded border border-[#30363d] text-[#c9d1d9]">
            Ctrl + K
          </kbd>
        </button>
      </div>

      {/* Right: Window Controls */}
      <div className="flex items-center gap-2 text-[#8b949e]">
        <span className="text-[11px] font-mono bg-[#21262d] text-[#34d399] px-2 py-0.5 rounded hidden md:inline">
          ● Live Environment
        </span>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded">
            <VscChromeMinimize className="w-3 h-3" />
          </button>
          <button className="p-1 hover:text-[#f0f6fc] hover:bg-[#21262d] rounded">
            <VscChromeMaximize className="w-3 h-3" />
          </button>
          <button className="p-1 hover:text-[#f87171] hover:bg-[#21262d] rounded">
            <VscChromeClose className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export const EditorTabs = () => {
  const location = useLocation();

  return (
    <div className="h-9 bg-[#161b22] border-b border-[#21262d] flex items-center overflow-x-auto select-none no-scrollbar">
      {WORKSPACE_FILES.map((file) => {
        const isActive = location.pathname === file.path;
        return (
          <Link
            key={file.name}
            to={file.path}
            className={`ide-tab ${isActive ? 'active' : ''} shrink-0`}
          >
            <FileIcon type={file.icon} className="w-3.5 h-3.5" />
            <span className="font-mono text-xs">{file.name}</span>
            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] ml-1"></span>}
          </Link>
        );
      })}
    </div>
  );
};
