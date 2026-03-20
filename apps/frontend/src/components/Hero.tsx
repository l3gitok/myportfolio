import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 max-w-7xl mx-auto relative overflow-hidden" id="hero">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="order-2 md:order-1">
          <div className="font-label text-primary mb-4 flex items-center gap-2">
            <span>[system.init]</span>
            <div className="h-[1px] w-12 bg-outline-variant/30"></div>
          </div>
          <h1
            className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface leading-none mb-6">
            BUILDING <br /> <span className="text-primary-fixed-dim">RESILIENT</span> <br /> CLOUD_INFRA
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md mb-8 leading-relaxed">
            DevOps Architect specializing in high-availability AWS ecosystems and automated deployment
            pipelines. Optimizing latency, securing nodes, and scaling the future.
          </p>
          <div className="flex gap-4">
            <button
              className="bg-primary-container text-on-primary-container px-6 py-3 rounded font-medium hover:bg-primary transition-colors flex items-center gap-2">
              VIEW_MANIFEST <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button
              className="border border-outline-variant/20 text-primary px-6 py-3 rounded font-medium hover:bg-surface-container-low transition-colors">
              DOWNLOAD_LOGS
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div
            className="aspect-square bg-surface-container-low rounded-lg overflow-hidden relative border border-outline-variant/10 shadow-2xl">
            <img alt="Lead Cloud Engineer Portrait"
              className="w-full h-full object-cover grayscale contrast-125 opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM93Hd0gC27bMz04GKdNYDx4LLhBFiCoSz2UQrHxB2bflMqRRdDIxRvpHi55O9oXFw1treqsR1RC3kABKaLh3_tDkc-xKxiHhv_fROqCbuzKUEuSdDkramKl-GsjgfoArpj_YJMk2lB01P8w4DOoavXwqEhXr6wvGiMbl5bg_nnQ-V3FG292LnY-xwE-4LP6y5PCaxl06GCOjotyU_1Mw5RHmrWU7tQSpDDoohKIce5hZeaJWK7HJRPAoFjampuWaHO_c0jxKuppw" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent">
            </div>
            <div
              className="absolute bottom-4 left-4 font-label text-[10px] text-primary/60 bg-background/60 backdrop-blur px-2 py-1 rounded">
              UUID: 8f2b-44e1-9c1a-0e92
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
