import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles, 
  ExternalLink,
  Lock
} from 'lucide-react';

interface CTAProps {
  onOpenDemo: () => void;
  onOpenRiskAssessment: () => void;
}

export const CallToAction: React.FC<CTAProps> = ({ onOpenDemo, onOpenRiskAssessment }) => {
  const [copied, setCopied] = useState(false);
  const command = 'npm install @sentra-ai/sdk';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#06080F] via-[#0B0F24] to-[#06080F] border-b border-white/[0.06]">
      {/* Background Glow Concentric Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" /> Start Securing Your Agent Fleet
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Start Securing Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400">
            AI Agents Today.
          </span>
        </h2>

        {/* Subhead */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Get unified observability, governance, and real-time threat protection over agents across your entire enterprise. 
          Deploy in 5 minutes with zero disruption to your agents.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-2xl shadow-violet-600/40 hover:shadow-violet-600/60 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 border border-violet-400/30 group"
          >
            <span>Book an Enterprise Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenRiskAssessment}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-violet-300 hover:text-white font-semibold text-sm border border-violet-500/30 hover:border-violet-400/60 transition-all flex items-center justify-center gap-2"
          >
            <span>Assess Your AI Risk</span>
          </button>

          <a
            href="https://sentraatech.info"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <span>Try Live Sandbox</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* npm SDK Quick Install Box */}
        <div className="max-w-md mx-auto p-2 pl-4 rounded-2xl bg-black/60 border border-white/[0.1] backdrop-blur-xl flex items-center justify-between text-xs font-mono shadow-xl">
          <div className="flex items-center gap-2.5 text-slate-300 overflow-hidden">
            <Terminal className="w-4 h-4 text-violet-400 shrink-0" />
            <span className="text-violet-400 select-none">$</span>
            <span className="truncate">{command}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 shrink-0"
            title="Copy command"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] text-emerald-400 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px]">Copy</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Fail-Closed Enforced</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
            <span>Zero Data Storage Retention</span>
          </div>
        </div>
      </div>
    </section>
  );
};
