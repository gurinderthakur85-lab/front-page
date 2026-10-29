import React, { useState } from 'react';
import { 
  Eye, 
  Sliders, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Layers
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const CAPABILITIES = [
    {
      id: 'discovery',
      number: '01',
      badge: 'Discovery & Inventory',
      title: 'AI Discovery',
      headline: 'Find and catalog every AI agent in your organization',
      summary: 'Get a centralized, real-time inventory of every AI model, framework, and tool your teams use — including shadow AI operating without approval.',
      points: [
        'Automatic discovery across cloud connectors, APIs, and runtime logs',
        'Detects hidden LangChain bots, Slack integrations, and MCP agents',
        'Maps agent dependencies and permission blast-radius'
      ],
      icon: <Eye className="w-5 h-5 text-[#8B5CF6]" />,
      image: '/screenshots/dashboard/agents.png',
      imageAlt: 'AI Discovery & Agent Inventory Dashboard'
    },
    {
      id: 'enforcement',
      number: '02',
      badge: 'Pre-Execution Controls',
      title: 'Policy Enforcement',
      headline: 'Apply rules to AI actions before they execute',
      summary: 'Sentraa AI operates as an inline bouncer. Actions are evaluated against security policies in real time: safe actions pass, dangerous ones are blocked.',
      points: [
        'Pre-execution gate checks every tool call and database mutation',
        'Automatic PII & credential redaction before data reaches the model',
        'Custom spending limits and human-in-the-loop escalation'
      ],
      icon: <Sliders className="w-5 h-5 text-[#8B5CF6]" />,
      image: '/screenshots/dashboard/policies-guardrails.png',
      imageAlt: 'Policy Controls and Guardrail Configuration'
    },
    {
      id: 'monitoring',
      number: '03',
      badge: 'Compliance & Telemetry',
      title: 'Continuous Monitoring',
      headline: 'Monitor AI activity continuously and automate compliance',
      summary: 'Maintain 24/7 oversight over agent behavior, detect anomalies as models drift, and turn execution logs into audit-ready evidence automatically.',
      points: [
        '24/7 telemetry tracks execution anomalies and prompt injections',
        'Direct compliance mapping to GDPR, DPDP, HIPAA, and NIST AI RMF',
        'Cryptographically signed, tamper-proof audit trails for external reviews'
      ],
      icon: <ShieldCheck className="w-5 h-5 text-[#8B5CF6]" />,
      image: '/screenshots/dashboard/compliance.png',
      imageAlt: 'Automated Multi-Framework Compliance Hub'
    }
  ];

  const current = CAPABILITIES[activeTab];

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-[#0D1220] border-b border-[#263044] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
            Three core capabilities. One unified platform.
          </h2>

          <p className="text-base text-[#A7B0C0] leading-relaxed max-w-2xl mx-auto">
            Everything your security, compliance, and engineering teams need to discover, control, and monitor AI agents safely.
          </p>
        </div>

        {/* 3 Capability Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {CAPABILITIES.map((cap, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-5 rounded-2xl transition-all duration-200 border flex items-start gap-4 ${
                  isSelected
                    ? 'bg-[#111827] border-[#8B5CF6] shadow-lg shadow-black/40 ring-1 ring-[#8B5CF6]/50'
                    : 'bg-[#111827]/60 border-[#263044] hover:bg-[#111827] hover:border-[#8B5CF6]/40'
                }`}
              >
                <div className={`p-2.5 rounded-xl border shrink-0 ${isSelected ? 'bg-[#8B5CF6]/20 border-[#8B5CF6]/40 text-[#C4B5FD]' : 'bg-[#080B14] border-[#263044] text-[#A7B0C0]'}`}>
                  {cap.icon}
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#A7B0C0] mb-0.5">
                    {cap.badge}
                  </div>
                  <div className="text-base font-bold text-[#F8FAFC]">
                    {cap.title}
                  </div>
                  <div className="text-xs text-[#A7B0C0] mt-1 line-clamp-2">
                    {cap.headline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Showcase Box */}
        <div className="rounded-2xl bg-[#111827] border border-[#263044] p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] font-bold">
              {current.badge}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight leading-snug">
              {current.headline}
            </h3>

            <p className="text-sm text-[#A7B0C0] leading-relaxed">
              {current.summary}
            </p>

            <div className="space-y-3 pt-2">
              {current.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#F8FAFC]">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#simulator"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#C4B5FD] hover:text-white transition-colors"
              >
                <span>Try interactive simulator below</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Preview Graphic */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#263044] bg-[#0D1220] p-1.5 sm:p-2 shadow-2xl">
              <div className="flex items-center justify-between px-3.5 py-2 border-b border-[#263044] bg-[#080B14] rounded-t-xl text-xs text-[#A7B0C0] mb-1.5">
                <span className="font-mono text-[11px] text-[#F8FAFC]">{current.imageAlt}</span>
                <span className="text-[#34D399] text-[10px] font-mono font-semibold">LIVE TELEMETRY</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-[#263044]/60 bg-[#080B14]">
                <img 
                  src={current.image} 
                  alt={current.imageAlt} 
                  className="w-full h-auto block"
                  onError={(e) => {
                    e.currentTarget.src = '/MNXP4JCUUPRXCO60rXS6qL9n8Gs.png';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
