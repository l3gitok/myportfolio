import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 max-w-7xl mx-auto relative overflow-hidden" id="hero">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="order-2 md:order-1">
          <div className="font-label text-primary mb-4 flex items-center gap-2">
            <span>[system.init] // ready</span>
            <div className="h-[1px] w-12 bg-outline-variant/30"></div>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface leading-none mb-6">
            NGUYEN <br /> <span className="text-primary-fixed-dim">DUC</span> <br /> TUAN
          </h1>
          <p className="text-base text-on-surface-variant max-w-md mb-3 leading-relaxed">
            Aspiring <span className="text-primary font-semibold">DevOps & Cloud Engineer</span> | Student
          </p>
          <p className="text-sm text-on-surface-variant max-w-md mb-8 leading-relaxed">
            Experienced in Linux, Docker, and CI/CD, with a solid foundation in Kubernetes and system design.
            Actively seeking internship opportunities to drive innovation and scale infrastructure.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#projects"
              className="bg-primary-container text-on-primary-container px-6 py-3 rounded font-medium hover:bg-primary transition-colors flex items-center gap-2">
              VIEW_PROJECTS <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a href="#contact"
              className="border border-outline-variant/20 text-primary px-6 py-3 rounded font-medium hover:bg-surface-container-low transition-colors">
              CONTACT_ME
            </a>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://github.com/l3gitok" target="_blank" rel="noopener noreferrer"
              className="font-label text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">code</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/tuan-nguyen-duc/" target="_blank" rel="noopener noreferrer"
              className="font-label text-[10px] text-on-surface-variant hover:text-secondary transition-colors uppercase flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">person</span> LinkedIn
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div
            className="aspect-square bg-surface-container-low rounded-lg overflow-hidden relative border border-outline-variant/10 shadow-2xl">
            <img alt="Nguyễn Đức Tuấn - DevOps & Cloud Engineer"
              className="w-full h-full object-cover"
              src="/avatar.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div
              className="absolute bottom-4 left-4 font-label text-[10px] text-primary/60 bg-background/60 backdrop-blur px-2 py-1 rounded">
              STATUS: SEEKING_INTERNSHIP
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-primary/20"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-primary/20"></div>
        </div>
      </div>
      {/* Bottom Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-label text-[10px] tracking-widest uppercase">Scroll_to_Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
}
