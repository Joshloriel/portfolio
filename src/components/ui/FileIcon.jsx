import React from 'react';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiPhp, 
  SiLaravel, 
  SiMysql, 
  SiFlutter, 
  SiBootstrap, 
  SiGit, 
  SiGitlab,
  SiVite,
  SiJson,
  SiGnubash,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiNodedotjs,
  SiJquery,
  SiFigma,
  SiTrello,
  SiAsana,
  SiOpenai
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscFileCode, VscJson, VscTerminalBash, VscHistory, VscDatabase } from 'react-icons/vsc';

export const FileIcon = ({ type, className = "w-4 h-4" }) => {
  switch (type?.toLowerCase()) {
    case 'react':
    case 'tsx':
    case 'jsx':
      return <SiReact className={`${className} text-[#38bdf8]`} />;
    case 'nextjs':
      return <SiNextdotjs className={`${className} text-[#ffffff]`} />;
    case 'ts':
    case 'typescript':
      return <SiTypescript className={`${className} text-[#3b82f6]`} />;
    case 'js':
    case 'javascript':
      return <SiJavascript className={`${className} text-[#facc15]`} />;
    case 'java':
      return <FaJava className={`${className} text-[#f87171]`} />;
    case 'spring':
      return <SiReact className={`${className} text-[#34d399]`} />;
    case 'json':
      return <SiJson className={`${className} text-[#fbbf24]`} />;
    case 'bash':
    case 'sh':
      return <SiGnubash className={`${className} text-[#34d399]`} />;
    case 'log':
      return <VscHistory className={`${className} text-[#c084fc]`} />;
    case 'php':
      return <SiPhp className={`${className} text-[#818cf8]`} />;
    case 'laravel':
      return <SiLaravel className={`${className} text-[#f87171]`} />;
    case 'mysql':
      return <SiMysql className={`${className} text-[#38bdf8]`} />;
    case 'postgres':
    case 'postgresql':
      return <SiPostgresql className={`${className} text-[#60a5fa]`} />;
    case 'mssql':
      return <VscDatabase className={`${className} text-[#f87171]`} />;
    case 'supabase':
      return <SiSupabase className={`${className} text-[#34d399]`} />;
    case 'firebase':
      return <SiFirebase className={`${className} text-[#facc15]`} />;
    case 'nodejs':
      return <SiNodedotjs className={`${className} text-[#34d399]`} />;
    case 'jquery':
      return <SiJquery className={`${className} text-[#38bdf8]`} />;
    case 'flutter':
      return <SiFlutter className={`${className} text-[#60a5fa]`} />;
    case 'tailwind':
      return <SiTailwindcss className={`${className} text-[#38bdf8]`} />;
    case 'html':
      return <SiHtml5 className={`${className} text-[#fb923c]`} />;
    case 'css':
      return <SiCss3 className={`${className} text-[#60a5fa]`} />;
    case 'bootstrap':
      return <SiBootstrap className={`${className} text-[#c084fc]`} />;
    case 'git':
      return <SiGit className={`${className} text-[#f87171]`} />;
    case 'gitlab':
      return <SiGitlab className={`${className} text-[#fb923c]`} />;
    case 'figma':
      return <SiFigma className={`${className} text-[#c084fc]`} />;
    case 'kanban':
      return <SiTrello className={`${className} text-[#38bdf8]`} />;
    case 'ai':
      return <SiOpenai className={`${className} text-[#34d399]`} />;
    case 'vite':
      return <SiVite className={`${className} text-[#c084fc]`} />;
    default:
      return <VscFileCode className={`${className} text-[#9ca3af]`} />;
  }
};
