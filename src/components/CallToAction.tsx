import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  onOpenDemo: () => void;
  onOpenRiskAssessment: () => void;
}

export const CallToAction: React.FC<CTAProps> = ({ onOpenDemo, onOpenRiskAssessment }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#07080E] border-b border-[#1E2338] relative overflow-hidden">
      {/* SentinelOne Dynamic Ambient Volumetric Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-[#6100FF]/15 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10121F] border border-[#1E2338] text-[#DDD6FE] text-xs font-semibold mb-6 shadow-sm shadow-[#6100FF]/15">
          <Sparkles className="w-3.5 h-3.5 text-[#6100FF]" />
          <span>Get Started with Sentraa AI</span>
        </div>

        {/* Headline */}
        <h2 className="text-[clamp(1.875rem,5vw+0.5rem,3rem)] font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-5">
          Stop risky AI agent actions{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#C4B5FD] to-[#6100FF]">before they happen.</span>
        </h2>

        {/* Subhead */}
        <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-8">
          Join security and AI engineering teams who protect customer data, maintain compliance, and deploy autonomous workflows with complete confidence.
        </p>

        {/* Action Buttons: Primary demo CTA + Secondary explore/risk CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-xl bg-gradient-to-r from-[#6100FF] to-[#7B2CBF] hover:from-[#5000D6] hover:to-[#6E2CF4] active:scale-[0.98] text-white font-bold text-sm shadow-[0_0_28px_rgba(97,0,255,0.45)] hover:shadow-[0_0_40px_rgba(97,0,255,0.65)] transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#6100FF]"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenRiskAssessment}
            className="w-full sm:w-auto min-h-[48px] px-7 py-4 rounded-xl bg-[#10121F] hover:bg-[#16192C] active:scale-[0.98] text-[#F8FAFC] font-semibold text-sm border border-[#1E2338] hover:border-[#6100FF]/50 hover:shadow-[0_0_20px_rgba(97,0,255,0.2)] transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#6100FF]"
          >
            <span>Assess Your AI Risk</span>
          </button>
        </div>
      </div>
    </section>
  );
};
