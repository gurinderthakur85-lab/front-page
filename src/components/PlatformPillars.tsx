import React, { useState } from 'react';
import { 
  Eye, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  Lock, 
  Layers, 
  Search, 
  Activity, 
  FileText, 
  Scale, 
  Check,
  Terminal
} from 'lucide-react';

export const PlatformPillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'surface' | 'enforce' | 'protect'>('enforce');
  const [selectedScreenshot, setSelectedScreenshot] = useState<string>('policies-guardrails.png');

  const PILLARS = {
    surface: {
      id: 'surface',
      badge: '01 // DISCOVERY & POSTURE',
      title: 'Surface',
      tagline: 'Know what’s running, what it can impact, and what’s exploitable.',
      description: 'Continuous discovery across all environments — SaaS copilots, homegrown agents, developer IDE extensions, and MCP servers. Maps every agentic identity, tool privilege, and secret exposure before runtime.',
      features: [
        'Agent Inventory & Shadow AI Discovery across the enterprise',
        'Model Context Protocol (MCP) tool endpoint exposure mapping',
        'Identity & Access Graph for autonomous service accounts',
        'Credential scanning & over-shared data connector detection'
      ],
      screenshot: 'agents.png',
      screenshotTitle: 'Sentraa AI // Agent Discovery & Fleet Inventory',
      metric: '100% Visibility Across Shadow Agents'
    },
    enforce: {
      id: 'enforce',
      badge: '02 // RUNTIME BOUNCER',
      title: 'Enforce',
      tagline: 'Decide what agents can do, steer them, and stop harmful actions before they land.',
      description: 'The real-time pre-execution gate. Every agent tool call, SQL execution, or external webhook is evaluated in real time against deterministic policies, regex DLP patterns, and semantic risk engines before execution.',
      features: [
        'Multi-Tier Interception: Allowlist → Policy Engine → Pattern DLP → Semantic Risk',
        'Dynamic Real-Time PII & Secret Redaction with zero data retention',
        'Deterministic spending, credential & database boundaries',
        'Fail-closed architecture: if evaluator is unreachable, action is safely blocked'
      ],
      screenshot: 'policies-guardrails.png',
      screenshotTitle: 'Sentraa AI // Pre-Execution Policy & Guardrail Engine',
      metric: '<15ms Latency • Fail-Closed Guarantee'
    },
    protect: {
      id: 'protect',
      badge: '03 // INCIDENT & COMPLIANCE',
      title: 'Protect',
      tagline: 'Detect threats, investigate with full execution context, and prove compliance.',
      description: 'Intent-driven AI Detection and Response (AIDR). Examine full execution traces, detect behavioral drift, and maintain tamper-proof cryptographic evidence chains mapped directly to regulatory frameworks.',
      features: [
        'AIDR: Correlate intent, tool calls, and memory drift in real time',
        'Cryptographic Evidence Chain: SHA-256 signed audit records',
        'Automated Compliance Engines for GDPR, DPDP, HIPAA, PCI-DSS & NIST AI RMF',
        'AI Governance Advisor for natural language compliance querying'
      ],
      screenshot: 'compliance.png',
      screenshotTitle: 'Sentraa AI // Compliance OS & Cryptographic Audit Hub',
      metric: '5 Regulatory Frameworks Evaluated Continuously'
    }
  };

  const current = PILLARS[activePillar];

  return (
    <section id="surface" className="py-24 relative bg-[#070912] border-b border-white/[0.06] overflow-hidden scroll-mt-20">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" /> Unified Platform Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            The Platform Behind the Decision
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Watching a decision means watching everything that feeds it. 
            That's why Sentraa spans <strong>discovery, policy, identity, and runtime defense</strong> — not just one isolated layer.
          </p>
        </div>

        {/* 3 Pillar Tab Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {(['surface', 'enforce', 'protect'] as const).map((key) => {
            const p = PILLARS[key];
            const isSelected = activePillar === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActivePillar(key);
                  setSelectedScreenshot(p.screenshot);
                }}
                className={`text-left p-6 rounded-3xl border transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0E1326] border-violet-400/60 shadow-2xl shadow-violet-950/50'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-400 to-purple-500" />
                )}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400 font-bold">
                      {p.badge}
                    </span>
                    {key === 'surface' && <Eye className={`w-5 h-5 ${isSelected ? 'text-violet-400' : 'text-slate-500'}`} />}
                    {key === 'enforce' && <Zap className={`w-5 h-5 ${isSelected ? 'text-violet-400' : 'text-slate-500'}`} />}
                    {key === 'protect' && <ShieldCheck className={`w-5 h-5 ${isSelected ? 'text-violet-400' : 'text-slate-500'}`} />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {p.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-violet-300' : 'text-slate-500'}>
                    {p.metric}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-violet-400 translate-x-1' : 'text-slate-600'} transition-transform`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Pillar Deep-Dive Display */}
        <div id="enforce" className="scroll-mt-24 rounded-3xl border border-violet-500/25 bg-[#090C18]/90 backdrop-blur-2xl p-6 lg:p-10 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Description & Features */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-bold">
                  {current.badge}
                </span>
                <h3 className="text-3xl font-bold text-white tracking-tight mt-1 mb-3">
                  {current.title}: {current.tagline}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Bullet Features with Checkmarks */}
              <div className="space-y-3 pt-2">
                {current.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-violet-500/20 text-violet-400 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-slate-200 leading-relaxed font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Screenshot Selector Quick Tabs */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  View Real Live Dashboard Module:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Guardrails', file: 'policies-guardrails.png' },
                    { label: 'Agents Fleet', file: 'agents.png' },
                    { label: 'Compliance OS', file: 'compliance.png' },
                    { label: 'Risk Intelligence', file: 'risk.png' },
                    { label: 'Activity Logs', file: 'activity.png' },
                    { label: 'AI Advisor', file: 'ai-advisor.png' }
                  ].map((tab) => (
                    <button
                      key={tab.file}
                      onClick={() => setSelectedScreenshot(tab.file)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                        selectedScreenshot === tab.file
                          ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-900/40'
                          : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Interactive High-Res Dashboard Screenshot Mockup */}
            <div id="protect" className="scroll-mt-24 lg:col-span-7">
              <div className="relative rounded-2xl border border-white/[0.12] bg-slate-950/80 p-2 shadow-2xl overflow-hidden group">
                {/* Browser Window Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 rounded-t-xl border-b border-white/[0.06] mb-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] font-mono text-slate-400 truncate">
                      app.sentraa.ai/{selectedScreenshot.replace('.png', '')}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    REAL DATA // PRODUCTION
                  </span>
                </div>

                {/* Screenshot Frame */}
                <div className="relative overflow-hidden rounded-b-xl border border-white/[0.04]">
                  <img
                    src={`/screenshots/dashboard/${selectedScreenshot}`}
                    alt="Sentraa AI Dashboard Interface"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                    onError={(e) => {
                      // Fallback if image isn't loaded yet
                      e.currentTarget.src = '/screenshots/dashboard/overview.png';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
