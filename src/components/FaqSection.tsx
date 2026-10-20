import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const FAQS = [
    {
      q: 'What is Sentraa AI?',
      a: 'Sentraa AI is an AI governance, security, risk, and compliance platform designed to help organizations discover, monitor, and govern their AI agents, models, and workflows. Sentraa helps businesses maintain visibility and control over their AI environment while supporting continuous compliance.'
    },
    {
      q: 'How does Sentraa AI discover Shadow AI?',
      a: 'Sentraa AI scans your connected AI environment, including cloud connectors, databases, MCP connections, LLM API keys, integrations, and runtime activity to build a centralized inventory of AI systems. This helps identify both officially sanctioned AI systems and potential Shadow AI operating outside your approved governance processes.'
    },
    {
      q: 'How does Sentraa AI govern AI agent actions?',
      a: 'Sentraa AI evaluates AI agent actions before they execute. Actions are checked against configured policies, risk signals, and contextual analysis to determine whether they should be allowed, flagged, or blocked. This enables organizations to move from reactive monitoring toward proactive AI governance.'
    },
    {
      q: 'Which compliance frameworks does Sentraa AI support?',
      a: 'Sentraa AI is designed to help organizations map AI governance and control activities to major frameworks and regulations, including GDPR, DPDP, HIPAA, PCI-DSS, and NIST AI RMF. Compliance posture and evidence can be continuously tracked from live governance activity.'
    },
    {
      q: 'Will Sentraa AI slow down our AI agents or workflows?',
      a: 'Sentraa AI is designed for real-time governance with efficient, low-latency evaluation. Its layered decision architecture allows actions to be assessed quickly, while fallback mechanisms help maintain governance continuity if deeper analysis is temporarily unavailable.'
    },
    {
      q: 'Is Sentraa AI suitable for enterprises with complex AI environments?',
      a: 'Yes. Sentraa AI is built to support organizations managing multiple AI agents, models, workflows, integrations, teams, and regulatory requirements. As your AI environment evolves, Sentraa helps continuously update visibility, risk assessment, governance controls, and compliance evidence from a centralized platform.'
    }
  ];

  return (
    <section id="faqs" className="py-24 relative bg-[#070912] border-b border-white/[0.06] overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> FAQs
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Got questions? we've got clear answers
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Considering AI automation for your business but have questions about implementation, costs, or results? You're not alone.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E1328] border-violet-500/50 shadow-xl shadow-purple-950/20'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-xl border border-white/[0.08] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-violet-600 text-white' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
