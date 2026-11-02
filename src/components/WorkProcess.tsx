import React from 'react';
import { 
  Search, 
  Sliders, 
  Activity, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const STEPS = [
    {
      stepNumber: 'Step 1',
      action: 'Discover AI Activity',
      plainHeading: 'Find the AI agents in your environment',
      description: 'Automatically scan cloud connectors, databases, API keys, and runtime traffic to establish a complete inventory of sanctioned and shadow AI tools.',
      benefits: ['Identifies unknown shadow agents', 'Maps data connectors & APIs', 'No disruption to current workflows'],
      icon: <Search className="w-6 h-6 text-[#6100FF]" />
    },
    {
      stepNumber: 'Step 2',
      action: 'Apply Policies',
      plainHeading: 'Apply rules to AI actions before execution',
      description: 'Enforce deterministic guardrails, sensitive PII redaction, spend caps, and authorization bounds. Every action is intercepted in under 15ms.',
      benefits: ['Pre-execution interception', 'Dynamic PII & secret masking', 'Customizable threshold policies'],
      icon: <Sliders className="w-6 h-6 text-[#6100FF]" />
    },
    {
      stepNumber: 'Step 3',
      action: 'Monitor & Respond',
      plainHeading: 'Monitor AI activity continuously',
      description: 'Continuously track agent drift, catch anomalies, and automatically generate tamper-evident audit logs mapped to GDPR, DPDP, HIPAA, and NIST AI RMF.',
      benefits: ['Always-on anomaly detection', 'Automated compliance evidence', 'Single-click audit reporting'],
      icon: <Activity className="w-6 h-6 text-[#6100FF]" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#07080E] border-b border-[#1E2338] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6100FF]/15 border border-[#6100FF]/30 text-[#DDD6FE] text-xs font-semibold mb-4 shadow-sm shadow-[#6100FF]/15">
            <Layers className="w-3.5 h-3.5 text-[#6100FF]" />
            <span>How the Platform Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-4">
            Three simple steps to manage AI risk
          </h2>

          <p className="text-base text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Sentraa AI sits between your AI agents and your systems to enforce accountability and safety at every turn.
          </p>
        </div>

        {/* 3 Steps Cards - 1 col on mobile, 2 on tablet portrait, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-[#10121F] border border-[#1E2338] hover:border-[#6100FF]/50 card-hover-lift flex flex-col justify-between ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full bg-[#0C0E17] border border-[#1E2338] text-[#DDD6FE] font-mono text-xs font-bold">
                    {step.stepNumber}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#07080E] border border-[#1E2338]">
                    {step.icon}
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-[#6100FF] font-semibold mb-1">
                  {step.action}
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 leading-snug">
                  {step.plainHeading}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Bullet points */}
              <div className="pt-4 border-t border-[#1E2338] space-y-2">
                {step.benefits.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#FFFFFF]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5A0] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
