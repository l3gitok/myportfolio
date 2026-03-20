import React from 'react';

export default function Projects() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="projects">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="font-headline text-5xl font-bold tracking-tighter uppercase terminal-cursor">System_Nodes
        </h2>
        <div className="flex-grow h-[1px] bg-gradient-to-r from-outline-variant/30 to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Project Card 1 */}
        <div className="relative group">
          <div
            className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
          <div className="relative bg-surface p-8 rounded border border-outline-variant/10 overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="font-label text-[10px] text-on-surface-variant/40 mb-1">NODE_01</div>
                <h3 className="font-headline text-2xl font-bold text-primary">SKYNET_V3</h3>
              </div>
              <span className="material-symbols-outlined text-primary/50">hub</span>
            </div>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Auto-scaling serverless architecture for processing 1M+ websocket connections per second
              with sub-50ms latency using AWS Lambda and Kinesis.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span
                className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">GO</span>
              <span
                className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">GRPC</span>
              <span
                className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">TERRAFORM</span>
            </div>
            <div className="flex items-center gap-4">
              <a className="font-label text-xs flex items-center gap-1 hover:text-primary transition-colors"
                href="#">
                <span className="material-symbols-outlined text-sm">code</span> SOURCE
              </a>
              <a className="font-label text-xs flex items-center gap-1 hover:text-primary transition-colors"
                href="#">
                <span className="material-symbols-outlined text-sm">open_in_new</span> DEPLOY
              </a>
            </div>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="relative group">
          <div
            className="absolute -inset-2 bg-gradient-to-r from-secondary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
          <div className="relative bg-surface p-8 rounded border border-outline-variant/10 overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="font-label text-[10px] text-on-surface-variant/40 mb-1">NODE_02</div>
                <h3 className="font-headline text-2xl font-bold text-secondary">SENTINEL_SHIELD</h3>
              </div>
              <span className="material-symbols-outlined text-secondary/50">security</span>
            </div>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Real-time threat detection engine utilizing eBPF and Falco to monitor container syscalls and
              automatically isolate compromised pods.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span
                className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">EBPF</span>
              <span
                className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">PYTHON</span>
              <span
                className="font-label text-[10px] px-2 py-1 bg-surface-container-high border border-outline-variant/20 rounded">KUBERNETES</span>
            </div>
            <div className="flex items-center gap-4">
              <a className="font-label text-xs flex items-center gap-1 hover:text-secondary transition-colors"
                href="#">
                <span className="material-symbols-outlined text-sm">code</span> SOURCE
              </a>
              <a className="font-label text-xs flex items-center gap-1 hover:text-secondary transition-colors"
                href="#">
                <span className="material-symbols-outlined text-sm">open_in_new</span> DOCUMENTATION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
