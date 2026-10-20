import React from 'react';
import { 
  Search, 
  Sliders, 
  Zap, 
  Target, 
  FileCheck2, 
  TrendingUp, 
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const STEPS = [
    {
      num: 'Step 1',
      title: 'Discover & Assess Your AI Environment',
      tagline: 'Full Visibility Into Every Agent, Model, and Workflow — Sanctioned or Shadow',
      description: 'Automatically scan cloud connectors, databases, MCP keys, LLM API keys, and runtime traffic to establish an exhaustive inventory of all active agents.',
      icon: <Search className="w-5 h-5 text-indigo-400" />
    },
    {
      num: 'Step 2',
      title: 'Configure Policies & Governance Rules',
      tagline: 'Set the Rules Your AI Agents Must Operate Within — Enforced, Not Just Documented',
      description: 'Define deterministic rules, PII DLP thresholds, budget controls, and spending limits that agents cannot bypass, regardless of model hallucinations.',
      icon: <Sliders className="w-5 h-5 text-violet-400" />
    },
    {
      num: 'Step 3',
      title: 'Intercept & Govern AI Actions in Real Time',
      tagline: 'Every AI Action Is Scanned, Checked, and Governed Before It Executes',
      description: 'Inline gate checks tool calls, code execution, and database mutations in sub-15ms. Safe actions pass; dangerous ones are blocked or auto-redacted.',
      icon: <Zap className="w-5 h-5 text-amber-400" />
    },
    {
      num: 'Step 4',
      title: 'Map Risk & Contain the Blast Radius',
      tagline: 'Understand How Far a Single Compromised Agent Could Reach',
      description: 'Graph-based relationship analysis maps connected resources, dependencies, and credentials to contain and isolate vulnerabilities instantly.',
      icon: <Target className="w-5 h-5 text-rose-400" />
    },
    {
      num: 'Step 5',
      title: 'Prove Compliance With Continuously Updated Evidence',
      tagline: 'Audit-Ready Evidence, Generated Continuously — Not Assembled at the Last Minute',
      description: 'Every decision is logged, SHA-256 hashed, and mapped automatically to GDPR, DPDP, HIPAA, PCI-DSS, and NIST AI RMF frameworks.',
      icon: <FileCheck2 className="w-5 h-5 text-emerald-400" />
    },
    {
      num: 'Step 6',
      title: 'Continuously Monitor, Improve & Scale Governance',
      tagline: 'Governance That Continuously Adapts as Your AI Environment Evolves',
      description: '24/7 telemetry tracks drift, anomaly patterns, and performance metrics as your enterprise adopts more agents and complex multi-agent swarms.',
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section id="process" className="py-24 relative bg-[#070912] border-b border-white/[0.06] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Work Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            How we Secure your AI automation empire
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Every step is designed to minimize disruption while maximizing results, ensuring you see measurable improvements within 30 days.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/40 hover:bg-[#0C1022] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 font-mono text-xs font-bold uppercase">
                    {step.num}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-violet-300 mb-3 leading-relaxed">
                  {step.tagline}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Phase 0{idx + 1}</span>
                <span className="text-emerald-400">&bull; Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
