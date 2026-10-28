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
      icon: <Search className="w-6 h-6 text-[#8B5CF6]" />
    },
    {
      stepNumber: 'Step 2',
      action: 'Apply Policies',
      plainHeading: 'Apply rules to AI actions before execution',
      description: 'Enforce deterministic guardrails, sensitive PII redaction, spend caps, and authorization bounds. Every action is intercepted in under 15ms.',
      benefits: ['Pre-execution interception', 'Dynamic PII & secret masking', 'Customizable threshold policies'],
      icon: <Sliders className="w-6 h-6 text-[#8B5CF6]" />
    },
    {
      stepNumber: 'Step 3',
      action: 'Monitor & Respond',
      plainHeading: 'Monitor AI activity continuously',
      description: 'Continuously track agent drift, catch anomalies, and automatically generate tamper-evident audit logs mapped to GDPR, DPDP, HIPAA, and NIST AI RMF.',
      benefits: ['Always-on anomaly detection', 'Automated compliance evidence', 'Single-click audit reporting'],
      icon: <Activity className="w-6 h-6 text-[#8B5CF6]" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#080B14] border-b border-[#263044] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>How the Platform Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
            Three simple steps to manage AI risk
          </h2>

          <p className="text-base text-[#A7B0C0] leading-relaxed max-w-2xl mx-auto">
            Sentra AI sits between your AI agents and your systems to enforce accountability and safety at every turn.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#111827] border border-[#263044] hover:border-[#8B5CF6]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full bg-[#0D1220] border border-[#263044] text-[#C4B5FD] font-mono text-xs font-bold">
                    {step.stepNumber}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#080B14] border border-[#263044]">
                    {step.icon}
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6] font-semibold mb-1">
                  {step.action}
                </div>
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 leading-snug">
                  {step.plainHeading}
                </h3>
                <p className="text-xs text-[#A7B0C0] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Bullet points */}
              <div className="pt-4 border-t border-[#263044] space-y-2">
                {step.benefits.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-xs text-[#F8FAFC]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
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
