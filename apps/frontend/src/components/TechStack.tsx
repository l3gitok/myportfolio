import React from 'react';

export default function TechStack() {
  return (
    <section className="py-24 px-8 bg-surface-container-low" id="stack">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <div className="font-label text-secondary mb-2">$ cat ~/.profile_manifest</div>
            <h2 className="font-headline text-4xl font-bold tracking-tight uppercase">Core_Stack</h2>
          </div>
          <div className="text-right font-label text-xs text-on-surface-variant opacity-60">
            MODE: LEARNING & BUILDING <br />
            STATUS: OPEN_TO_INTERN
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Infrastructure */}
          <div className="space-y-6">
            <div
              className="bg-surface-container-lowest p-6 rounded border border-outline-variant/10 hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">dns</span>
                <h3 className="font-headline font-bold uppercase tracking-tight">Infrastructure</h3>
              </div>
              <ul className="space-y-4 font-label text-sm text-on-surface-variant">
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>LINUX_SYSADMIN</span>
                  <span className="text-primary">PROFICIENT</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>DOCKER</span>
                  <span className="text-primary">PROFICIENT</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>KUBERNETES</span>
                  <span className="text-primary">LEARNING</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>AWS_CLOUD</span>
                  <span className="text-primary">LEARNING</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Column 2: CI/CD & Automation */}
          <div className="space-y-6">
            <div
              className="bg-surface-container-lowest p-6 rounded border border-outline-variant/10 hover:border-tertiary/30 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary">alt_route</span>
                <h3 className="font-headline font-bold uppercase tracking-tight">CI_CD & DevOps</h3>
              </div>
              <ul className="space-y-4 font-label text-sm text-on-surface-variant">
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>GITLAB_CI_CD</span>
                  <span className="text-tertiary">PROFICIENT</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>GITHUB_ACTIONS</span>
                  <span className="text-tertiary">PROFICIENT</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>SYSTEM_DESIGN</span>
                  <span className="text-tertiary">LEARNING</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>TERRAFORM_IAC</span>
                  <span className="text-tertiary">LEARNING</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Column 3: Data & Backend */}
          <div className="space-y-6">
            <div
              className="bg-surface-container-lowest p-6 rounded border border-outline-variant/10 hover:border-secondary/30 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary">database</span>
                <h3 className="font-headline font-bold uppercase tracking-tight">Data & Backend</h3>
              </div>
              <ul className="space-y-4 font-label text-sm text-on-surface-variant">
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>POSTGRESQL</span>
                  <span className="text-secondary">PROFICIENT</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>NESTJS</span>
                  <span className="text-secondary">LEARNING</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>NEXTJS_REACT</span>
                  <span className="text-secondary">LEARNING</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>SUPABASE</span>
                  <span className="text-secondary">LEARNING</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
