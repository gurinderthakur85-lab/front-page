import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  Zap, 
  ExternalLink,
  Mail,
  Play
} from 'lucide-react';
import { LiveAgentBouncer } from './LiveAgentBouncer';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenContact }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-b from-violet-600/20 via-purple-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-600/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Official Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold backdrop-blur-xl shadow-lg shadow-violet-950/50 hover:border-violet-400/50 transition-all cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span>AI Governance, Security &amp; Compliance Platform</span>
            <span className="text-violet-500">•</span>
            <span className="text-slate-300">New</span>
          </div>
        </div>

        {/* Hero Title (Exact from sentraatech.com) */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Stop risky AI agent actions{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400">
              before they happen.
            </span>
          </h1>

          {/* Subtitle (Exact from sentraatech.com) */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Sentraa AI sits in front of every AI agent in your company and checks each action against your policies in real time, before it runs. If it's safe, it goes through. If it's not, it's blocked. Every decision is logged and turned into audit-ready compliance evidence automatically.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 border border-violet-400/30 group"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#0D111E] hover:bg-[#151B2E] text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-violet-500/40 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Mail className="w-4 h-4 text-violet-400" />
              <span>Contact Us</span>
            </button>

            <a
              href="https://sentraatech.info"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl text-slate-300 hover:text-white font-semibold text-sm hover:bg-white/[0.04] transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 text-slate-400" />
              <span>Live Sandbox</span>
            </a>
          </div>

          {/* Mini Trust Highlights */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-violet-400" />
              <span>Pre-Execution Interception</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-400" />
              <span>Scan &bull; Detect &bull; Flag &bull; Block</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Audit-Ready Evidence Generated Automatically</span>
            </div>
          </div>
        </div>

        {/* Hero Official Illustration + Live Simulator */}
        <div className="mt-14 max-w-5xl mx-auto space-y-12">
          {/* Official sentraatech.com product UI banner */}
          <div className="relative rounded-3xl border border-violet-500/30 bg-[#0A0D18]/90 backdrop-blur-2xl p-3 sm:p-4 shadow-2xl shadow-violet-950/40 overflow-hidden group">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.08] mb-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-slate-300">Sentraa AI // Real-Time Governance Center</span>
              </div>
              <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px]">
                PRE-EXECUTION BOUNCER ACTIVE
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl relative">
              <img 
                src="/MNXP4JCUUPRXCO60rXS6qL9n8Gs.png" 
                alt="Sentraa AI Agent Decision Evaluation Platform" 
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Interactive Bouncer Simulation */}
          <div id="simulator" className="scroll-mt-28">
            <LiveAgentBouncer />
          </div>
        </div>
      </div>
    </section>
  );
};
