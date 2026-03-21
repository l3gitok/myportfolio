import React from 'react';

export default function TechStack() {
  return (
    <section className="py-24 px-8 bg-surface-container-low section-blend" id="stack">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <div className="font-label text-secondary mb-2">$ cat ~/.profile_manifest</div>
            <h2 className="font-headline text-4xl font-bold tracking-tight uppercase">Core_Stack</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Infrastructure */}
          <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/10 hover-glow group">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">dns</span>
              <h3 className="font-headline font-bold uppercase tracking-tight">Infrastructure</h3>
            </div>
            <ul className="space-y-4 font-label text-sm text-on-surface-variant">
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/linux/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>LINUX_SYSADMIN</span>
                </div>
                <span className="text-primary">PROFICIENT</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/docker/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>DOCKER</span>
                </div>
                <span className="text-primary">PROFICIENT</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/kubernetes/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>KUBERNETES</span>
                </div>
                <span className="text-primary">LEARNING</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/amazonwebservices/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>AWS_CLOUD</span>
                </div>
                <span className="text-primary">LEARNING</span>
              </li>
            </ul>
          </div>

          {/* Monitoring */}
          <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/10 hover-glow group">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">monitoring</span>
              <h3 className="font-headline font-bold uppercase tracking-tight">Monitoring</h3>
            </div>
            <ul className="space-y-4 font-label text-sm text-on-surface-variant">
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/prometheus/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>PROMETHEUS</span>
                </div>
                <span className="text-primary">LEARNING</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/grafana/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>GRAFANA</span>
                </div>
                <span className="text-primary">LEARNING</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/elasticstack/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>LOGGING_ELK</span>
                </div>
                <span className="text-primary">LEARNING</span>
              </li>
            </ul>
          </div>

          {/* Networks */}
          <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/10 hover-glow group">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">lan</span>
              <h3 className="font-headline font-bold uppercase tracking-tight">Networks</h3>
            </div>
            <ul className="space-y-4 font-label text-sm text-on-surface-variant">
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/amazonvpc/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>VPC_SUBNETS</span>
                </div>
                <span className="text-primary">LEARNING</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/cloudflare/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>DNS_LB</span>
                </div>
                <span className="text-primary">LEARNING</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/wireguard/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>FIREWALL_VPN</span>
                </div>
                <span className="text-primary">LEARNING</span>
              </li>
            </ul>
          </div>

          {/* CI/CD & Automation */}
          <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/10 hover-glow-tertiary group">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-tertiary">alt_route</span>
              <h3 className="font-headline font-bold uppercase tracking-tight">CI_CD & DevOps</h3>
            </div>
            <ul className="space-y-4 font-label text-sm text-on-surface-variant">
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/gitlab/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>GITLAB_CI_CD</span>
                </div>
                <span className="text-tertiary">PROFICIENT</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/githubactions/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>GITHUB_ACTIONS</span>
                </div>
                <span className="text-tertiary">PROFICIENT</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] opacity-70">account_tree</span>
                  <span>SYSTEM_DESIGN</span>
                </div>
                <span className="text-tertiary">LEARNING</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/terraform/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>TERRAFORM_IAC</span>
                </div>
                <span className="text-tertiary">LEARNING</span>
              </li>
            </ul>
          </div>

          {/* Data & Backend */}
          <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/10 hover-glow-secondary group">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-secondary">database</span>
              <h3 className="font-headline font-bold uppercase tracking-tight">Data & Backend</h3>
            </div>
            <ul className="space-y-4 font-label text-sm text-on-surface-variant">
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/postgresql/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>POSTGRESQL</span>
                </div>
                <span className="text-secondary">PROFICIENT</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/nestjs/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>NESTJS</span>
                </div>
                <span className="text-secondary">LEARNING</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/nextdotjs/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>NEXTJS_REACT</span>
                </div>
                <span className="text-secondary">LEARNING</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/5 pb-2">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/supabase/white" width="16" height="16" alt="" className="opacity-70" />
                  <span>SUPABASE</span>
                </div>
                <span className="text-secondary">LEARNING</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
