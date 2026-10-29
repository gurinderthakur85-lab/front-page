import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Eye, 
  Sliders, 
  Activity, 
  Lock, 
  CheckCircle2, 
  AlertTriangle,
  Zap
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenContact }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-[#080B14]">
      {/* Dynamic ambient background glow orbs */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[340px] bg-[#8B5CF6]/15 blur-3xl pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute top-40 right-1/4 w-[450px] h-[300px] bg-[#38BDF8]/10 blur-3xl pointer-events-none rounded-full animate-float-slow-reverse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-[#263044] text-[#C4B5FD] text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span>AI Governance &amp; Pre-Execution Security</span>
          </div>
        </div>

        {/* Hero Title & Short Concrete Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12]">
            Stop risky AI agent actions{' '}
            <span className="text-[#8B5CF6] block sm:inline">
              before they happen.
            </span>
          </h1>

          {/* Product explained in two short concrete sentences */}
          <p className="text-base sm:text-lg text-[#A7B0C0] max-w-2xl mx-auto leading-relaxed">
            Discover AI agents, enforce security policies, and monitor risky actions from one platform. Keep your AI systems accountable as they scale.
          </p>

          {/* Action CTAs: One primary, one secondary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-sm shadow-lg shadow-[#8B5CF6]/25 hover:shadow-xl hover:shadow-[#8B5CF6]/35 transition-all flex items-center justify-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#capabilities"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#111827] hover:bg-[#172033] text-[#F8FAFC] font-medium text-sm border border-[#263044] hover:border-[#8B5CF6]/40 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore the Platform</span>
            </a>
          </div>

          {/* Simple trust markers */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A7B0C0]">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Real-Time Pre-Execution Interception</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#34D399]" />
              <span>Automated PII &amp; Secret Redaction</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Audit-Ready Evidence Generated Automatically</span>
            </div>
          </div>
        </div>

        {/* Product Visual with 3 Clear Annotations */}
        <div className="mt-14 max-w-5xl mx-auto animate-float-slow">
          {/* Main Dashboard Preview Container */}
          <div className="relative rounded-2xl border border-[#263044] bg-[#111827] p-2 sm:p-4 shadow-2xl hover:border-[#8B5CF6]/40 transition-colors duration-500">
            {/* Top Window Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#263044] mb-3 text-xs text-[#A7B0C0]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
                <span className="ml-2 font-mono text-xs text-[#F8FAFC]">Sentraa AI &bull; Agent Decision Evaluation</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#34D399] bg-[#34D399]/10 px-2.5 py-1 rounded-full border border-[#34D399]/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
                </span>
                <span>PRE-EXECUTION ACTIVE</span>
              </div>
            </div>

            {/* Dashboard Screenshot Graphic */}
            <div className="relative rounded-xl overflow-hidden border border-[#263044]/80 bg-[#080B14]">
              <img 
                src="/MNXP4JCUUPRXCO60rXS6qL9n8Gs.png" 
                alt="Sentraa AI Product Dashboard Preview" 
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/70 via-transparent to-transparent pointer-events-none" />
              {/* Subtle animated scanline */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent pointer-events-none animate-scanline" />
            </div>

            {/* 3 Simple Annotations Explaining What It Does */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-4 pt-4 border-t border-[#263044]">
              {/* Annotation 1 */}
              <div className="p-3.5 rounded-xl bg-[#0D1220] border border-[#263044] flex items-start gap-3 card-hover-lift cursor-default">
                <div className="p-2 rounded-lg bg-[#8B5CF6]/15 text-[#C4B5FD] shrink-0 border border-[#8B5CF6]/20">
                  <Eye className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F8FAFC]">1. AI Activity Monitoring</div>
                  <div className="text-[12px] text-[#A7B0C0] mt-0.5">
                    Understand what your agents are doing across every model and tool in real time.
                  </div>
                </div>
              </div>

              {/* Annotation 2 */}
              <div className="p-3.5 rounded-xl bg-[#0D1220] border border-[#263044] flex items-start gap-3 card-hover-lift cursor-default">
                <div className="p-2 rounded-lg bg-[#8B5CF6]/15 text-[#C4B5FD] shrink-0 border border-[#8B5CF6]/20">
                  <Sliders className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F8FAFC]">2. Policy-Based Controls</div>
                  <div className="text-[12px] text-[#A7B0C0] mt-0.5">
                    Apply rules to potentially risky actions before execution — block, redact, or alert.
                  </div>
                </div>
              </div>

              {/* Annotation 3 */}
              <div className="p-3.5 rounded-xl bg-[#0D1220] border border-[#263044] flex items-start gap-3 card-hover-lift cursor-default">
                <div className="p-2 rounded-lg bg-[#8B5CF6]/15 text-[#C4B5FD] shrink-0 border border-[#8B5CF6]/20">
                  <Activity className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F8FAFC]">3. Continuous Oversight</div>
                  <div className="text-[12px] text-[#A7B0C0] mt-0.5">
                    Review activity, detect anomalies, and export audit-ready compliance evidence.
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
