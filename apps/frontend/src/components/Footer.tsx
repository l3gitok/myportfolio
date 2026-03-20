import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/30 bg-slate-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
        <div className="text-orange-500 font-bold font-mono text-[10px] uppercase tracking-widest mb-4 md:mb-0">
          © 2026 NGUYỄN ĐỨC TUẤN
        </div>
        <div className="flex gap-6">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 cursor-default">branch: main</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 cursor-default">env: production</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 cursor-default">role: devops_intern</span>
        </div>
      </div>
    </footer>
  );
}
