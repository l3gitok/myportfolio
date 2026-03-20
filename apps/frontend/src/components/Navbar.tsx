import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 py-3 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="font-mono font-bold text-orange-500 tracking-tighter text-lg">NDT_DEV_OPS</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-headline tracking-tight uppercase text-xs text-orange-400 border-b-2 border-orange-500 pb-1"
            href="#hero">Home</a>
          <a className="font-headline tracking-tight uppercase text-xs text-slate-400 hover:text-slate-200 transition-colors"
            href="#stack">Stack</a>
          <a className="font-headline tracking-tight uppercase text-xs text-slate-400 hover:text-slate-200 transition-colors"
            href="#projects">Projects</a>
          <a className="font-headline tracking-tight uppercase text-xs text-slate-400 hover:text-slate-200 transition-colors"
            href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/l3gitok" target="_blank" rel="noopener noreferrer"
            className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-orange-400 hover:bg-slate-800/50 p-2 rounded transition-all active:scale-95 duration-100"
          >code</a>
          <span
            className="material-symbols-outlined text-slate-400 cursor-pointer hover:bg-slate-800/50 p-2 rounded transition-all active:scale-95 duration-100"
          >terminal</span>
        </div>
      </div>
    </nav>
  );
}
