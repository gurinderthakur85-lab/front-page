import React, { useState } from 'react';
import { 
  Eye, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Lock,
  Search,
  Scale,
  Briefcase
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const SERVICES = [
    {
      num: '01',
      title: 'Complete AI Visibility',
      category: 'AI Registry & Discovery',
      tagline: 'Get a real-time, centralized view of every AI tool, agent, and model your organization is using, including identifying shadow AI that your team did not know existed.',
      description: 'Sentraa automatically scans your environment — cloud storage connectors, databases, MCP agent keys, LLM API keys, Slack integrations, and live runtime traffic to build a single, deduplicated inventory of every AI system operating in your organization, sanctioned or shadow.',
      pills: ['Shadow AI', 'MCP & LLM Key Scanning', 'Connector Mapping'],
      icon: <Eye className="w-5 h-5 text-indigo-400" />,
      screenshot: 'agents.png',
      screenshotTitle: 'AI Registry & Discovery Dashboard'
    },
    {
      num: '02',
      title: 'Real-Time Governance Engine',
      category: 'Pre-Execution Interception',
      tagline: 'Our SDK sits in front of every AI agent action, not behind it. We\'re the bouncer, not the auditor.',
      description: 'A four stage pipeline — Scan, Detect, Flag, Block — lets you run in always-on flagging mode or move to full enforcement per organization, with a complete audit trail either way. Every action is intercepted before it reaches external databases or APIs.',
      pills: ['Pre-Execution Interception', '3-Tier Decision Engine', 'Configurable Enforcement'],
      icon: <Zap className="w-5 h-5 text-violet-400" />,
      screenshot: 'policies-guardrails.png',
      screenshotTitle: 'Real-Time Policy & Bouncer Controls'
    },
    {
      num: '03',
      title: 'Compliance Automation',
      category: 'Compliance & Risk Center',
      tagline: 'Compliance scores computed from real control status, not a static checklist, plus auto-generated evidence for audits.',
      description: 'Sentraa maps live AI activity and agent posture against GDPR, DPDP, HIPAA, PCI-DSS, and NIST AI RMF from one unified dashboard. Evidence is continuously generated and cryptographically signed, ready for external auditors at any moment.',
      pills: ['GDPR', 'DPDP', 'NIST AI RMF', 'PCI-DSS', 'HIPAA'],
      icon: <Scale className="w-5 h-5 text-emerald-400" />,
      screenshot: 'compliance.png',
      screenshotTitle: 'Automated Multi-Framework Compliance Hub'
    },
    {
      num: '04',
      title: 'Custom AI Governance Service',
      category: 'Custom Architecture & Advisory',
      tagline: 'Tailored governance architectures matched to your exact regulatory footprint.',
      description: 'Whether you\'re rolling out your first AI agents or governing AI across dozens of departments, we help you design an end-to-end governance architecture matched to your regulatory requirements, with deep focus for BFSI and HealthTech organizations navigating overlapping compliance frameworks.',
      pills: ['Custom AI Architecture', 'Consulting & Advisory', 'BFSI & HealthTech Focus'],
      icon: <Briefcase className="w-5 h-5 text-amber-400" />,
      screenshot: 'ai-advisor.png',
      screenshotTitle: 'Enterprise Advisory & Impact Assessments'
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-[#070912] border-b border-white/[0.06] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" /> Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Solutions for AI Governance That Help You Protect Your Business at Scale
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            We discover, govern, and continuously validate every AI agent across your organization so you stay compliant, safe, and in control, before any action executes.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                activeTab === idx
                  ? 'bg-[#0E1328] border-violet-400/70 shadow-2xl shadow-violet-950/60 scale-[1.01]'
                  : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-violet-400/80">
                    {srv.num}.
                  </span>
                  <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                    {srv.icon}
                  </div>
                </div>

                <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                  {srv.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {srv.title}
                </h3>
                <p className="text-sm font-semibold text-violet-200/90 leading-relaxed mb-4">
                  {srv.tagline}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {srv.pills.map((pill, pIdx) => (
                  <span 
                    key={pIdx}
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-violet-950/40 text-violet-300 border border-violet-500/30"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tabbed Screenshot Preview for Selected Service */}
        <div className="rounded-3xl border border-violet-500/25 bg-[#0A0D1E]/95 backdrop-blur-2xl p-6 lg:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-violet-400">
                ACTIVE VIEW: {SERVICES[activeTab].num} // {SERVICES[activeTab].title}
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">&bull; {SERVICES[activeTab].screenshotTitle}</span>
            </div>
            <a 
              href="https://sentraatech.info" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-semibold text-violet-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Explore full module in live sandbox</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden bg-black/60 shadow-xl">
            <img 
              src={`/screenshots/dashboard/${SERVICES[activeTab].screenshot}`}
              alt={SERVICES[activeTab].screenshotTitle}
              className="w-full h-auto object-cover max-h-[520px]"
              onError={(e) => {
                e.currentTarget.src = '/screenshots/dashboard/overview.png';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
