import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 max-w-7xl mx-auto relative overflow-hidden" id="hero">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="order-2 md:order-1">
          <div className="font-label text-primary mb-4 flex items-center gap-2">
            <span>[system.init] // ready</span>
            <div className="h-[1px] w-12 bg-outline-variant/30"></div>
          </div>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-on-surface mb-6">
            Hi, I&apos;m <span className="text-primary">Tuan</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface font-medium max-w-2xl mb-4 leading-tight">
            Aspiring <span className="text-primary">DevOps & Cloud Engineer</span>
          </p>
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
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
            <a href="https://www.linkedin.com/in/%C4%91%E1%BB%A9c-tu%E1%BA%A5n-6a14013b6/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer"
              className="font-label text-[10px] text-on-surface-variant hover:text-secondary transition-colors uppercase flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">person</span> LinkedIn
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 relative group">
          {/* Background Glow Effect */}
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div
            className="aspect-square bg-surface-container-low rounded-lg overflow-hidden relative border border-outline-variant/10 shadow-2xl hover-glow">
            <Image
              alt="Nguyễn Đức Tuấn - DevOps & Cloud Engineer"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              src="/avatar.png"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            <div
              className="absolute bottom-4 left-4 font-label text-[10px] text-primary/80 bg-background/40 backdrop-blur-md px-2 py-1 rounded border border-primary/20">
              STATUS: SEEKING_INTERNSHIP
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-primary/20 group-hover:border-primary/50 transition-colors"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-primary/20 group-hover:border-primary/50 transition-colors"></div>
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
