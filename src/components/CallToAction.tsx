import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  onOpenDemo: () => void;
  onOpenRiskAssessment: () => void;
}

export const CallToAction: React.FC<CTAProps> = ({ onOpenDemo, onOpenRiskAssessment }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#0D1220] border-b border-[#263044] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>Get Started with Sentraa AI</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-5">
          Stop risky AI agent actions{' '}
          <span className="text-[#8B5CF6]">before they happen.</span>
        </h2>

        {/* Subhead */}
        <p className="text-base sm:text-lg text-[#A7B0C0] max-w-2xl mx-auto leading-relaxed mb-8">
          Join security and AI engineering teams who protect customer data, maintain compliance, and deploy autonomous workflows with complete confidence.
        </p>

        {/* Action Buttons: Primary demo CTA + Secondary explore/risk CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-sm shadow-xl shadow-[#8B5CF6]/30 hover:shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenRiskAssessment}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#111827] hover:bg-[#172033] text-[#F8FAFC] font-semibold text-sm border border-[#263044] hover:border-[#8B5CF6]/40 transition-all flex items-center justify-center gap-2"
          >
            <span>Assess Your AI Risk</span>
          </button>
        </div>
      </div>
    </section>
  );
};
