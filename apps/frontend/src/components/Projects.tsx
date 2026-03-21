import React from 'react';

export default function Projects() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto section-blend" id="projects">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="font-headline text-5xl font-bold tracking-tighter uppercase terminal-cursor">Featured_Projects
        </h2>
        <div className="flex-grow h-[1px] bg-gradient-to-r from-outline-variant/30 to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Project Card 1 - CKCNNT */}
        <div className="relative group">
          <div
            className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl">
          </div>
          <div className="relative bg-surface p-8 rounded border border-outline-variant/10 overflow-hidden hover-glow">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="font-label text-[10px] text-on-surface-variant/40 mb-1">PROJECT_01</div>
                <h3 className="font-headline text-2xl font-bold text-primary">CKCNNT</h3>
              </div>
              <span className="material-symbols-outlined text-primary/50">hub</span>
            </div>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              A full-featured web application built with modern tech stack. Deployed and containerized
              using Docker with a full CI/CD pipeline on GitLab, running live at ckcnnt.vercel.app.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">DOCKER</span>
              <span className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">CI/CD</span>
              <span className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">POSTGRESQL</span>
              <span className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">VERCEL</span>
            </div>
            <div className="flex items-center gap-4">
              <a className="font-label text-xs flex items-center gap-1 hover:text-primary transition-colors"
                href="https://github.com/l3gitok/CKCNNT" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-sm">code</span> SOURCE
              </a>
              <a className="font-label text-xs flex items-center gap-1 hover:text-primary transition-colors"
                href="https://ckcnnt.vercel.app/" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-sm">open_in_new</span> LIVE_DEMO
              </a>
            </div>
          </div>
        </div>
        {/* Project Card 2 - This Portfolio */}
        <div className="relative group">
          <div
            className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl">
          </div>
          <div className="relative bg-surface p-8 rounded border border-outline-variant/10 overflow-hidden hover-glow-secondary">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="font-label text-[10px] text-on-surface-variant/40 mb-1">PROJECT_02</div>
                <h3 className="font-headline text-2xl font-bold text-secondary">MY_PORTFOLIO</h3>
              </div>
              <span className="material-symbols-outlined text-secondary/50">terminal</span>
            </div>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              This DevOps-themed personal portfolio built with Next.js, NestJS, and Supabase.
              Featuring a full CI/CD pipeline on GitHub Actions, contact form wired to real email via Resend.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">NEXTJS</span>
              <span className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">NESTJS</span>
              <span className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">SUPABASE</span>
              <span className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">DOCKER</span>
            </div>
            <div className="flex items-center gap-4">
              <a className="font-label text-xs flex items-center gap-1 hover:text-secondary transition-colors"
                href="https://github.com/l3gitok/myportfolio" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-sm">code</span> SOURCE
              </a>
              <a className="font-label text-xs flex items-center gap-1 hover:text-secondary transition-colors"
                href="#" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-sm">open_in_new</span> LIVE_SOON
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
