import React from 'react';

export default function TechStack() {
  return (
    <section className="py-24 px-8 bg-surface-container-low" id="stack">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <div className="font-label text-secondary mb-2">$ cat /etc/infrastructure_manifest</div>
            <h2 className="font-headline text-4xl font-bold tracking-tight uppercase">Core_Orchestration</h2>
          </div>
          <div className="text-right font-label text-xs text-on-surface-variant opacity-60">
            LATENCY: 12ms <br />
            UPTIME: 99.99%
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Compute */}
          <div className="space-y-6">
            <div
              className="bg-surface-container-lowest p-6 rounded border border-outline-variant/10 hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">cloud</span>
                <h3 className="font-headline font-bold uppercase tracking-tight">Compute_Layer</h3>
              </div>
              <ul className="space-y-4 font-label text-sm text-on-surface-variant">
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>AWS_EC2 / LAMBDA</span>
                  <span className="text-primary">DEPLOYED</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>KUBERNETES_EKS</span>
                  <span className="text-primary">DEPLOYED</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>DOCKER_RUNTIME</span>
                  <span className="text-primary">DEPLOYED</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Column 2: Data */}
          <div className="space-y-6">
            <div
              className="bg-surface-container-lowest p-6 rounded border border-outline-variant/10 hover:border-secondary/30 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary">database</span>
                <h3 className="font-headline font-bold uppercase tracking-tight">Storage_Persistence</h3>
              </div>
              <ul className="space-y-4 font-label text-sm text-on-surface-variant">
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>POSTGRES_RDS</span>
                  <span className="text-secondary">SYNCED</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>REDIS_CACHE</span>
                  <span className="text-secondary">SYNCED</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>AWS_S3_GLACIER</span>
                  <span className="text-secondary">SYNCED</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Column 3: CI/CD */}
          <div className="space-y-6">
            <div
              className="bg-surface-container-lowest p-6 rounded border border-outline-variant/10 hover:border-tertiary/30 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary">alt_route</span>
                <h3 className="font-headline font-bold uppercase tracking-tight">CI_CD_Automation</h3>
              </div>
              <ul className="space-y-4 font-label text-sm text-on-surface-variant">
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>TERRAFORM_IAC</span>
                  <span className="text-tertiary">STABLE</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>GITHUB_ACTIONS</span>
                  <span className="text-tertiary">STABLE</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                  <span>ARGOCD_GIT_OPS</span>
                  <span className="text-tertiary">STABLE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
