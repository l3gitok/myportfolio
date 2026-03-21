'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 py-3 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="font-mono font-bold text-orange-500 tracking-tighter text-lg">NDT_DEV_OPS</span>
        </div>
        
        {/* Desktop Menu */}
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

        <div className="flex items-center gap-2 md:gap-4">
          <a href="https://github.com/l3gitok" target="_blank" rel="noopener noreferrer"
            className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-orange-400 hover:bg-slate-800/50 p-2 rounded transition-all active:scale-95 duration-100"
          >code</a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden material-symbols-outlined text-slate-400 p-2 hover:bg-slate-800/50 rounded transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-outline-variant/10 py-6 px-6 space-y-4 flex flex-col items-center animate-in slide-in-from-top duration-300">
          <a className="font-headline tracking-tight uppercase text-sm text-slate-200"
            href="#hero" onClick={() => setIsOpen(false)}>Home</a>
          <a className="font-headline tracking-tight uppercase text-sm text-slate-400"
            href="#stack" onClick={() => setIsOpen(false)}>Stack</a>
          <a className="font-headline tracking-tight uppercase text-sm text-slate-400"
            href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a className="font-headline tracking-tight uppercase text-sm text-slate-400"
            href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
