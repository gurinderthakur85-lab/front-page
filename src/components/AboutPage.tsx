import React from 'react';
import { 
  Eye, 
  ShieldCheck, 
  Sliders, 
  Sparkles, 
  ArrowRight, 
  Target, 
  Compass, 
  Layers, 
  Lock, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';

interface AboutPageProps {
  onOpenDemo: () => void;
  onOpenContact: () => void;
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ 
  onOpenDemo, 
  onOpenContact, 
  onNavigateHome 
}) => {
  return (
    <div className="relative overflow-hidden bg-[#080B14] min-h-screen">
      {/* Dynamic ambient background glow orbs */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[340px] bg-[#8B5CF6]/15 blur-3xl pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute top-60 right-1/4 w-[450px] h-[300px] bg-[#38BDF8]/10 blur-3xl pointer-events-none rounded-full animate-float-slow-reverse" />
      <div className="absolute bottom-40 left-1/3 w-[500px] h-[300px] bg-[#8B5CF6]/10 blur-3xl pointer-events-none rounded-full" />

      {/* Hero / Header Section: Vision */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#263044]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow Navigation / Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <button
              onClick={onNavigateHome}
              className="text-xs font-mono text-[#A7B0C0] hover:text-[#C4B5FD] transition-colors flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111827] border border-[#263044]"
            >
              <span>&larr; Back to Home</span>
            </button>
            <span className="text-[#263044]">&bull;</span>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>About Sentraa AI</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.15] mb-6">
            Trust Infrastructure for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4B5FD] via-[#8B5CF6] to-[#60A5FA]">
              Autonomous AI Era
            </span>
          </h1>

          {/* Vision Statement Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0D1220]/90 border border-[#8B5CF6]/40 shadow-2xl shadow-purple-950/30 max-w-4xl mx-auto backdrop-blur-xl relative overflow-hidden animate-float-slow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C4B5FD] mb-3">
              <Compass className="w-4 h-4 text-[#8B5CF6]" />
              <span>Our Vision</span>
            </div>
            
            <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed tracking-tight">
              &ldquo;To build the trust infrastructure for the autonomous AI era — where every AI agent is visible, every action is governed, and every decision can be trusted.&rdquo;
            </p>

            {/* Vision Elaboration */}
            <div className="mt-6 pt-6 border-t border-[#263044]/80 text-sm text-[#A7B0C0] leading-relaxed text-left sm:text-center max-w-3xl mx-auto space-y-3 font-normal">
              <p>
                As AI transforms from passive conversational tools into autonomous agents that touch databases, execute financial transfers, invoke enterprise APIs, and make critical business decisions, trust can no longer rely on blind faith or post-mortem incident logs.
              </p>
              <p className="text-[#F8FAFC] font-medium">
                Sentraa AI establishes a proactive, real-time inline governance layer that brings mathematical precision, continuous visibility, and cryptographically verified safety to every autonomous workflow across the enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section: How Sentraa AI Began */}
      <section className="py-20 lg:py-28 border-b border-[#263044]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#263044] text-[#C4B5FD] text-xs font-mono font-semibold uppercase">
                <Target className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>Origins &amp; Purpose</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
                How Sentraa AI Began
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#A7B0C0] leading-relaxed">
                <p className="text-[#F8FAFC] font-medium text-lg leading-snug">
                  Sentraa AI began with a simple realization: <span className="text-[#C4B5FD]">AI was moving faster than the systems built to govern it.</span>
                </p>

                <p>
                  As AI agents evolved from generating answers to accessing data, making decisions, and taking actions, we saw a critical gap emerging. Enterprises could monitor what AI had done — but they often had no way to control what AI was about to do.
                </p>

                <div className="p-4 rounded-2xl bg-[#111827] border-l-4 border-[#8B5CF6] border-y border-r border-[#263044] my-2">
                  <p className="text-[#F8FAFC] font-semibold italic text-sm">
                    &ldquo;We believed governance couldn't be an afterthought. That belief became the foundation of Sentraa AI.&rdquo;
                  </p>
                </div>

                <p>
                  We set out to build a new layer of enterprise AI security — one that could provide visibility into every AI system, understand the intent behind every action, assess risk in real time, and enforce organizational policies before an action is executed.
                </p>

                <p>
                  What started as an idea around the future of AI governance evolved into <strong className="text-white">Sentraa AI</strong>: an intelligent control layer for the autonomous AI era.
                </p>
              </div>

              {/* Mission Highlight Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#8B5CF6]/15 via-[#111827] to-[#0D1220] border border-[#8B5CF6]/30 mt-6">
                <div className="text-[11px] font-mono uppercase text-[#C4B5FD] tracking-wider font-bold mb-1">
                  Today, Our Mission is Simple:
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-white">
                  Give enterprises the confidence to deploy AI at scale without losing control.
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-[#111827] border border-[#263044] shadow-2xl relative overflow-hidden card-hover-lift">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center mb-6">
                  <Cpu className="w-7 h-7 text-[#C4B5FD]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  The Intelligent Control Layer
                </h3>

                <p className="text-xs text-[#A7B0C0] leading-relaxed mb-6">
                  Bridging the gap between lightning-fast AI innovation and enterprise risk accountability.
                </p>

                <div className="space-y-3 border-t border-[#263044] pt-5 text-xs">
                  <div className="flex items-center gap-2.5 text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                    <span>Real-Time Pre-Execution Inline Interception</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                    <span>Discovery Across Cloud, APIs &amp; MCP Agents</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                    <span>Cryptographically Signed SHA-256 Audit Logs</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                    <span>Real-time Dynamic PII &amp; Secret Redaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Foundation & 3 Core Principles */}
      <section className="py-20 lg:py-28 border-b border-[#263044] bg-[#0D1220]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold mb-4">
              <Layers className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Core Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
              The Foundation of Sentraa AI
            </h2>

            <p className="text-lg text-[#C4B5FD] font-semibold italic max-w-2xl mx-auto mb-4">
              &ldquo;AI should be powerful enough to act, but governed enough to be trusted.&rdquo;
            </p>

            <p className="text-sm text-[#A7B0C0] leading-relaxed max-w-2xl mx-auto">
              As enterprises rapidly adopted AI, we saw a growing gap between AI capability and AI control. Agents could access sensitive information, interact with enterprise systems, and make decisions — while traditional security and governance tools remained largely reactive. We built Sentraa AI to close that gap.
            </p>
          </div>

          {/* 3 Principles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Principle 1: Visibility */}
            <div className="p-8 rounded-3xl bg-[#111827] border border-[#263044] card-hover-lift flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#C4B5FD] mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div className="text-[11px] font-mono text-[#8B5CF6] uppercase font-bold tracking-wider mb-1">
                  Principle 01
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Visibility</h3>
                <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                  Know every AI system, agent, identity, data flow, and action across the entire enterprise. Eliminate shadow AI and map all agent permission boundaries.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#263044] text-[11px] font-mono text-emerald-400">
                &bull; Complete Fleet Inventory
              </div>
            </div>

            {/* Principle 2: Control */}
            <div className="p-8 rounded-3xl bg-[#111827] border border-[#263044] card-hover-lift flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#C4B5FD] mb-6 group-hover:scale-110 transition-transform">
                  <Sliders className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div className="text-[11px] font-mono text-[#8B5CF6] uppercase font-bold tracking-wider mb-1">
                  Principle 02
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Control</h3>
                <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                  Define and enforce policies in real time, before risky AI actions happen. Inspect parameters, redact sensitive PII, and apply deterministic spend caps in real time.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#263044] text-[11px] font-mono text-violet-400">
                &bull; Pre-Execution Guardrails
              </div>
            </div>

            {/* Principle 3: Trust */}
            <div className="p-8 rounded-3xl bg-[#111827] border border-[#263044] card-hover-lift flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#C4B5FD] mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div className="text-[11px] font-mono text-[#8B5CF6] uppercase font-bold tracking-wider mb-1">
                  Principle 03
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Trust</h3>
                <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                  Make AI accountable, auditable, and secure enough to operate at enterprise scale. Continuously map evidence to GDPR, DPDP, HIPAA, and NIST AI RMF.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#263044] text-[11px] font-mono text-emerald-400">
                &bull; Verifiable Compliance
              </div>
            </div>
          </div>

          {/* Infrastructure Commitment Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#111827] via-[#0D1220] to-[#111827] border border-[#8B5CF6]/30 text-center max-w-3xl mx-auto shadow-xl">
            <p className="text-sm sm:text-base text-[#A7B0C0] leading-relaxed mb-3">
              Sentraa AI is not built to slow AI down.
            </p>
            <p className="text-lg sm:text-2xl font-extrabold text-white leading-snug">
              &ldquo;We are building the infrastructure that allows enterprises to move faster with AI — without losing control.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-20 bg-[#080B14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Ready to empower your autonomous AI initiatives?
          </h2>
          <p className="text-sm sm:text-base text-[#A7B0C0] max-w-xl mx-auto leading-relaxed">
            See how Sentraa AI sits in front of every agent to guarantee safety, privacy, and regulatory compliance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDemo}
              className="px-6 py-3 text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-xl transition-all shadow-lg shadow-[#8B5CF6]/25 hover:shadow-xl hover:shadow-[#8B5CF6]/40 flex items-center gap-2"
            >
              <span>Book an Enterprise Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenContact}
              className="px-6 py-3 text-xs font-semibold text-[#F8FAFC] bg-[#111827] hover:bg-[#172033] border border-[#263044] rounded-xl transition-all"
            >
              Contact Our Solutions Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
