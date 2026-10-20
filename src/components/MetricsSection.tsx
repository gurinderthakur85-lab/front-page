import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Users, 
  Quote, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Building2,
  CheckCircle2
} from 'lucide-react';

export const MetricsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const METRICS = [
    {
      value: '<15ms',
      label: 'Inline Interception Latency',
      subtext: 'Imperceptible overhead on long-horizon agent workflows'
    },
    {
      value: '99.8%',
      label: 'Unauthorized Tool Actions Blocked',
      subtext: 'Adversarial injections stopped before reaching DB or APIs'
    },
    {
      value: '150K+',
      label: 'Daily Evaluated Decisions',
      subtext: 'Enterprise-scale throughput with fail-closed stability'
    },
    {
      value: '5+',
      label: 'Automated Regulatory Frameworks',
      subtext: 'GDPR, DPDP, HIPAA, PCI-DSS, NIST AI RMF continuous mapping'
    }
  ];

  const TESTIMONIALS = [
    {
      quote: 'With Sentraa AI, we deployed autonomous coding assistants and customer support bots with complete confidence. Being able to evaluate agent actions pre-execution rather than looking at post-incident alerts changed our security posture overnight.',
      author: 'David Vance',
      role: 'Chief Information Security Officer',
      company: 'Global FinTech Corp',
      highlight: 'Reduced security policy violations by 94% across 80+ active agents'
    },
    {
      quote: 'Our citizen developers and engineering teams were spinning up autonomous LangChain swarms connected to production databases. Sentraa gave us instant visibility and dynamic PII redaction without breaking existing agent code.',
      author: 'Elena Rostova',
      role: 'VP of AI Platform & Governance',
      company: 'Healthcare Innovations Inc',
      highlight: 'Full HIPAA & DPDP compliance automated across 40+ LLM integrations'
    },
    {
      quote: 'The real-time bouncer architecture is brilliant. Sentraa does not just tell us that an agent tried to drop a table or run an unauthorized Stripe transfer — it physically cuts the execution thread before the API call lands.',
      author: 'Marcus Chen',
      role: 'Head of Enterprise Security Architecture',
      company: 'SaaS Enterprise Systems',
      highlight: '100% cryptographic audit trail with zero human manual intervention'
    }
  ];

  return (
    <section className="py-24 relative bg-[#070912] border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Proven Enterprise Impact
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            What Changes When the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400">
              Decision Gets Watched
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Move from restrictive blanket bans to safe, accelerated AI adoption. 
            Sentraa gives CISOs the control to let teams innovate with autonomous agents at scale.
          </p>
        </div>

        {/* 4 Big Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-violet-300 tracking-tight font-mono mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-white mb-2">{metric.label}</div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mt-4 pt-3 border-t border-white/[0.04]">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="rounded-3xl border border-violet-500/25 bg-[#090D1C]/90 backdrop-blur-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-violet-500/10 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold mb-6">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{TESTIMONIALS[currentTestimonial].highlight}</span>
            </div>

            <p className="text-xl sm:text-2xl text-slate-100 font-medium leading-relaxed mb-8">
              "{TESTIMONIALS[currentTestimonial].quote}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
              <div>
                <div className="text-base font-bold text-white">
                  {TESTIMONIALS[currentTestimonial].author}
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  {TESTIMONIALS[currentTestimonial].role} • {TESTIMONIALS[currentTestimonial].company}
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400 font-mono px-2">
                  {currentTestimonial + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
