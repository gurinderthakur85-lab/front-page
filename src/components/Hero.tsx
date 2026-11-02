import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Eye, 
  Sliders, 
  Activity, 
  Lock, 
  Zap
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenContact }) => {
  return (
    <section className="relative pt-8 pb-14 lg:pt-10 lg:pb-16 overflow-hidden bg-[#07080E]">
      {/* SentinelOne Dynamic Ambient Volumetric Lighting */}
      <div className="absolute top-4 left-1/4 w-[520px] h-[300px] bg-[#6100FF]/18 blur-[110px] pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute top-24 right-1/4 w-[420px] h-[260px] bg-[#4500B6]/15 blur-[100px] pointer-events-none rounded-full animate-float-slow-reverse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10121F] border border-[#1E2338] text-[#DDD6FE] text-xs font-medium shadow-sm shadow-[#6100FF]/10">
            <span className="w-2 h-2 rounded-full bg-[#6100FF] animate-pulse shadow-[0_0_8px_#6100FF]" />
            <span>AI Governance &amp; Pre-Execution Security</span>
          </div>
        </div>

        {/* Hero Title & Short Concrete Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-[clamp(2rem,5vw+0.25rem,3.5rem)] font-extrabold tracking-tight text-[#FFFFFF] leading-[1.12]">
            Stop risky AI agent actions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#C4B5FD] to-[#6100FF] block sm:inline">
              before they happen.
            </span>
          </h1>

          {/* Product explained in two short concrete sentences */}
          <p className="text-sm sm:text-base lg:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Discover AI agents, enforce security policies, and monitor risky actions from one platform. Keep your AI systems accountable as they scale.
          </p>

          {/* Action CTAs: One primary, one secondary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto min-h-[46px] px-7 py-3 rounded-xl bg-gradient-to-r from-[#6100FF] to-[#7B2CBF] hover:from-[#5000D6] hover:to-[#6E2CF4] active:scale-[0.98] text-white font-semibold text-sm shadow-[0_0_24px_rgba(97,0,255,0.45)] hover:shadow-[0_0_35px_rgba(97,0,255,0.65)] transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#6100FF]"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#capabilities"
              className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-xl bg-[#10121F] hover:bg-[#16192C] active:scale-[0.98] text-[#F8FAFC] font-medium text-sm border border-[#1E2338] hover:border-[#6100FF]/50 hover:shadow-[0_0_20px_rgba(97,0,255,0.2)] transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#6100FF]"
            >
              <span>Explore the Platform</span>
            </a>
          </div>

          {/* Simple trust markers */}
          <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#94A3B8]">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#6100FF]" />
              <span>Real-Time Pre-Execution Interception</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#00F5A0]" />
              <span>Automated PII &amp; Secret Redaction</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6100FF]" />
              <span>Audit-Ready Evidence Generated Automatically</span>
            </div>
          </div>
        </div>

        {/* Product Visual - Compact Single Frame */}
        <div className="mt-8 sm:mt-10 max-w-5xl mx-auto animate-float-slow">
          {/* Main Dashboard Preview Container */}
          <div className="relative rounded-2xl border border-[#1E2338] bg-[#10121F] p-2.5 sm:p-4 shadow-2xl hover:border-[#6100FF]/50 hover:shadow-[0_0_30px_rgba(97,0,255,0.2)] transition-all duration-500">
            {/* Top Window Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#1E2338] mb-3 text-xs text-[#94A3B8] gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D] shrink-0" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24] shrink-0" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] shrink-0" />
                <span className="ml-1 sm:ml-2 font-mono text-xs text-[#FFFFFF] truncate">
                  Sentraa AI <span className="hidden sm:inline">&bull; Agent Decision Evaluation</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-[11px] text-[#00F5A0] bg-[#00F5A0]/10 px-2 sm:px-2.5 py-0.5 rounded-full border border-[#00F5A0]/30 shrink-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5A0] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5A0]" />
                </span>
                <span>PRE-EXECUTION ACTIVE</span>
              </div>
            </div>

            {/* Compact Single Frame Body: Side-by-side on desktop, unified and short */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-center">
              {/* Left Column: Visual Architecture Diagram */}
              <div className="lg:col-span-7">
                <div className="relative rounded-xl overflow-hidden border border-[#1E2338] bg-[#07080E] flex items-center justify-center p-1.5 sm:p-2">
                  <img 
                    src="/MNXP4JCUUPRXCO60rXS6qL9n8Gs.png" 
                    alt="Sentraa AI Agent Decision Evaluation & Discovery Architecture" 
                    width={1445}
                    height={1088}
                    fetchPriority="high"
                    className="w-full h-auto max-h-[300px] sm:max-h-[350px] object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080E]/40 via-transparent to-transparent pointer-events-none" />
                  {/* Subtle animated scanline */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#6100FF]/60 to-transparent pointer-events-none animate-scanline" />
                </div>
              </div>

              {/* Right Column: 3 Core Execution Controls in Single Frame */}
              <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3">
                {/* Control 1 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0C0E17] border border-[#1E2338] hover:border-[#6100FF]/50 hover:bg-[#6100FF]/5 transition-all group cursor-default">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-[#6100FF]/15 text-[#C4B5FD] shrink-0 border border-[#6100FF]/25 group-hover:scale-105 transition-transform">
                        <Eye className="w-3.5 h-3.5 text-[#6100FF]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#FFFFFF]">1. AI Activity Monitoring</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#00F5A0] bg-[#00F5A0]/10 px-1.5 py-0.5 rounded border border-[#00F5A0]/25 hidden sm:inline-block">Live</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#94A3B8] leading-relaxed pl-8 sm:pl-9">
                    Understand what your agents are doing across every model and tool in real time.
                  </p>
                </div>

                {/* Control 2 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0C0E17] border border-[#1E2338] hover:border-[#6100FF]/50 hover:bg-[#6100FF]/5 transition-all group cursor-default">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-[#6100FF]/15 text-[#C4B5FD] shrink-0 border border-[#6100FF]/25 group-hover:scale-105 transition-transform">
                        <Sliders className="w-3.5 h-3.5 text-[#6100FF]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#FFFFFF]">2. Policy-Based Controls</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#A78BFA] bg-[#6100FF]/15 px-1.5 py-0.5 rounded border border-[#6100FF]/30 hidden sm:inline-block">Enforce</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#94A3B8] leading-relaxed pl-8 sm:pl-9">
                    Apply rules to potentially risky actions before execution — block, redact, or alert.
                  </p>
                </div>

                {/* Control 3 */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0C0E17] border border-[#1E2338] hover:border-[#6100FF]/50 hover:bg-[#6100FF]/5 transition-all group cursor-default">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-[#6100FF]/15 text-[#C4B5FD] shrink-0 border border-[#6100FF]/25 group-hover:scale-105 transition-transform">
                        <Activity className="w-3.5 h-3.5 text-[#6100FF]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#FFFFFF]">3. Continuous Oversight</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-1.5 py-0.5 rounded border border-[#38BDF8]/25 hidden sm:inline-block">Audit</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#94A3B8] leading-relaxed pl-8 sm:pl-9">
                    Review activity, detect anomalies, and export audit-ready compliance evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
