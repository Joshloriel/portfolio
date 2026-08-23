import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { TopWindowHeader, EditorTabs } from './TopWindowHeader';
import { ActivityBar, SidebarExplorer } from './ActivityBar';
import { TerminalDrawer } from './TerminalDrawer';
import { StatusBar } from './StatusBar';
import { CommandPalette } from './CommandPalette';

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePanel, setActivePanel] = useState('explorer');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      // Ctrl+K or Cmd+K to toggle Command Palette
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      // Ctrl+B to toggle Sidebar
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsSidebarOpen((prev) => !prev);
      }
      // `~` or Ctrl+` to toggle Terminal
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleSelectPanel = (panel) => {
    if (!panel) {
      setIsSidebarOpen(false);
      setActivePanel(null);
    } else {
      setIsSidebarOpen(true);
      setActivePanel(panel);
    }
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const handleToggleTerminal = () => {
    setIsTerminalOpen(prev => !prev);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#0d1117] text-[#f0f6fc] overflow-hidden font-mono">
      {/* Top Application Window Bar */}
      <TopWindowHeader 
        onToggleSidebar={handleToggleSidebar}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main IDE Workspace (Activity Bar + Sidebar + Editor) */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Activity Bar */}
        <ActivityBar 
          activePanel={isSidebarOpen ? activePanel : null}
          onSelectPanel={handleSelectPanel}
          onToggleTerminal={handleToggleTerminal}
          isTerminalOpen={isTerminalOpen}
        />

        {/* Sidebar Explorer */}
        <SidebarExplorer 
          isOpen={isSidebarOpen}
          activePanel={activePanel}
          onCloseMobile={() => {
            if (window.innerWidth < 768) setIsSidebarOpen(false);
          }}
        />

        {/* Center Editor Container */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#0d1117] overflow-hidden">
          {/* Editor Tabs */}
          <EditorTabs />

          {/* Code/View Canvas */}
          <main className="flex-1 overflow-y-auto relative bg-[#0d1117]">
            <Outlet />
          </main>

          {/* Interactive Bottom Terminal */}
          <TerminalDrawer 
            isOpen={isTerminalOpen}
            onToggle={handleToggleTerminal}
          />
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar 
        onToggleTerminal={handleToggleTerminal}
        isTerminalOpen={isTerminalOpen}
      />

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
};

export default Layout;
