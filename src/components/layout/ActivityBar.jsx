import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  VscFiles, 
  VscSourceControl, 
  VscDebugAlt, 
  VscExtensions, 
  VscTerminal, 
  VscSettingsGear,
  VscChevronDown,
  VscChevronRight,
  VscFolder,
  VscFolderOpened
} from 'react-icons/vsc';
import { FileIcon } from '../ui/FileIcon';
import { WORKSPACE_FILES } from '../../constants';

export const ActivityBar = ({ activePanel, onSelectPanel, onToggleTerminal, isTerminalOpen }) => {
  return (
    <aside className="w-12 bg-[#0a0d12] border-r border-[#21262d] flex flex-col justify-between items-center py-2 z-20 select-none">
      <div className="flex flex-col gap-3 items-center">
        <button
          title="Explorer (Ctrl+Shift+E)"
          onClick={() => onSelectPanel(activePanel === 'explorer' ? null : 'explorer')}
          className={`p-2.5 rounded-lg transition-colors relative ${
            activePanel === 'explorer'
              ? 'text-[#f0f6fc] border-l-2 border-[#38bdf8] bg-[#161b22]'
              : 'text-[#8b949e] hover:text-[#f0f6fc]'
          }`}
        >
          <VscFiles className="w-5 h-5" />
        </button>

        <button
          title="Source Control"
          onClick={() => onSelectPanel(activePanel === 'git' ? null : 'git')}
          className={`p-2.5 rounded-lg transition-colors relative ${
            activePanel === 'git'
              ? 'text-[#f0f6fc] border-l-2 border-[#38bdf8] bg-[#161b22]'
              : 'text-[#8b949e] hover:text-[#f0f6fc]'
          }`}
        >
          <VscSourceControl className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#38bdf8] rounded-full"></span>
        </button>

        <button
          title="Run & Debug / Tech Matrix"
          onClick={() => onSelectPanel(activePanel === 'debug' ? null : 'debug')}
          className={`p-2.5 rounded-lg transition-colors ${
            activePanel === 'debug'
              ? 'text-[#f0f6fc] border-l-2 border-[#38bdf8] bg-[#161b22]'
              : 'text-[#8b949e] hover:text-[#f0f6fc]'
          }`}
        >
          <VscDebugAlt className="w-5 h-5" />
        </button>

        <button
          title="Toggle Integrated Terminal (`)"
          onClick={onToggleTerminal}
          className={`p-2.5 rounded-lg transition-colors ${
            isTerminalOpen
              ? 'text-[#38bdf8] bg-[#161b22]'
              : 'text-[#8b949e] hover:text-[#f0f6fc]'
          }`}
        >
          <VscTerminal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col gap-2 items-center text-[#8b949e]">
        <button 
          title="IDE Config / Settings"
          className="p-2.5 hover:text-[#f0f6fc] transition-colors"
        >
          <VscSettingsGear className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
};

export const SidebarExplorer = ({ isOpen, activePanel, onCloseMobile }) => {
  const location = useLocation();
  const [isSrcOpen, setIsSrcOpen] = React.useState(true);

  if (!isOpen) return null;

  return (
    <aside className="w-60 bg-[#161b22] border-r border-[#21262d] flex flex-col h-full select-none text-xs font-mono">
      {/* Sidebar Header */}
      <div className="px-4 py-2.5 border-b border-[#21262d] flex items-center justify-between text-[#8b949e] uppercase font-bold text-[11px] tracking-wider">
        <span>{activePanel === 'git' ? 'Source Control: Git' : activePanel === 'debug' ? 'Debug Matrix' : 'Explorer'}</span>
      </div>

      {activePanel === 'explorer' && (
        <div className="p-2 space-y-1 overflow-y-auto flex-1">
          {/* Workspace Root Item */}
          <div 
            onClick={() => setIsSrcOpen(!isSrcOpen)}
            className="flex items-center gap-1.5 px-2 py-1 text-[#c9d1d9] font-bold cursor-pointer hover:bg-[#21262d] rounded transition-colors"
          >
            {isSrcOpen ? <VscChevronDown className="w-3.5 h-3.5 text-[#8b949e]" /> : <VscChevronRight className="w-3.5 h-3.5 text-[#8b949e]" />}
            {isSrcOpen ? <VscFolderOpened className="w-4 h-4 text-[#38bdf8]" /> : <VscFolder className="w-4 h-4 text-[#38bdf8]" />}
            <span>portfolio-workspace</span>
          </div>

          {/* Files List */}
          {isSrcOpen && (
            <div className="pl-4 space-y-0.5 border-l border-[#21262d] ml-3 mt-1">
              {WORKSPACE_FILES.map((file) => {
                const isActive = location.pathname === file.path;
                return (
                  <Link
                    key={file.name}
                    to={file.path}
                    onClick={onCloseMobile}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded transition-all group ${
                      isActive
                        ? 'bg-[#21262d] text-[#38bdf8] font-semibold border-l-2 border-[#38bdf8]'
                        : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#1c2128]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <FileIcon type={file.icon} className="w-4 h-4" />
                      <span>{file.name}</span>
                    </div>
                    <span className="text-[10px] text-[#656c76] group-hover:text-[#8b949e]">
                      {file.size}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Outline / Meta section */}
          <div className="pt-6 px-2">
            <div className="text-[10px] text-[#656c76] uppercase tracking-wider font-semibold mb-2">
              Workspace Info
            </div>
            <div className="bg-[#0d1117] p-2.5 rounded border border-[#21262d] text-[11px] text-[#8b949e] space-y-1">
              <p className="text-[#34d399] flex items-center gap-1">● Vite 4.5.3 (Production)</p>
              <p>Branch: <span className="text-[#c084fc]">main</span></p>
              <p>Host: <span className="text-[#38bdf8]">josh-portfolio</span></p>
            </div>
          </div>
        </div>
      )}

      {activePanel === 'git' && (
        <div className="p-3 text-xs text-[#8b949e] space-y-2">
          <div className="text-[11px] font-semibold text-[#f0f6fc]">CHANGES (0)</div>
          <div className="p-2 bg-[#0d1117] rounded border border-[#21262d] text-[11px]">
            <p className="text-[#34d399]">✓ Working tree clean.</p>
            <p className="mt-1">All engineering modules up to date.</p>
          </div>
        </div>
      )}

      {activePanel === 'debug' && (
        <div className="p-3 text-xs text-[#8b949e] space-y-2">
          <div className="text-[11px] font-semibold text-[#f0f6fc]">ENVIRONMENT STATUS</div>
          <div className="p-2 bg-[#0d1117] rounded border border-[#21262d] text-[11px] space-y-1">
            <p className="text-[#38bdf8]">TypeScript Engine: Strict</p>
            <p className="text-[#facc15]">Tailwind Engine: JIT Active</p>
            <p className="text-[#34d399]">HMR Engine: Connected</p>
          </div>
        </div>
      )}
    </aside>
  );
};
