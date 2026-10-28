import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const FAQS = [
    {
      q: 'What does Sentra AI do?',
      a: 'Sentra AI sits in front of every AI agent in your organization and checks each action against your security policies in real time, before it runs. If the action is safe, it executes. If it is risky or violates policy, it is blocked or redacted, and an audit-ready compliance record is logged automatically.'
    },
    {
      q: 'How does Sentra AI discover shadow AI agents?',
      a: 'Sentra AI scans your cloud connectors, databases, API keys, MCP agent connections, and live runtime traffic. It creates a centralized inventory of all AI agents operating across your company, whether officially approved by IT or created independently by individual teams.'
    },
    {
      q: 'Will Sentra AI slow down our AI agents or workflows?',
      a: 'No. Sentra AI evaluates actions in sub-15ms using an in-line, fail-closed decision pipeline. It performs pattern matching, PII scanning, and parameter validation without introducing noticeable latency to agent response times.'
    },
    {
      q: 'How does pre-execution policy enforcement work?',
      a: 'Instead of auditing what happened after an incident occurs, Sentra AI intercepts tool calls, SQL mutations, and API requests before they execute. Policies can automatically block unauthorized actions, redact sensitive PII (like SSNs or credit card numbers), or require human approval for large transactions.'
    },
    {
      q: 'Which compliance frameworks are supported out of the box?',
      a: 'Sentra AI continuously maps live agent activity to GDPR, India DPDP, HIPAA, PCI-DSS v4.0, and the NIST AI Risk Management Framework (AI RMF 1.0). Evidence is cryptographically hashed with SHA-256 for instant audit export.'
    },
    {
      q: 'How do we deploy Sentra AI across our systems?',
      a: 'Sentra AI can be deployed via a lightweight SDK, an in-line proxy, or as a containerized sidecar in your private cloud (AWS, GCP, Azure, or Kubernetes). Most teams connect their first agent in under 10 minutes.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#080B14] border-b border-[#263044]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
            Clear answers to common questions
          </h2>

          <p className="text-base text-[#A7B0C0] leading-relaxed max-w-xl mx-auto">
            Everything you need to know about deployment, latency, safety policies, and compliance.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#111827] border-[#8B5CF6]/60 shadow-lg'
                    : 'bg-[#111827]/60 border-[#263044] hover:border-[#8B5CF6]/40'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#F8FAFC]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8B5CF6] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#A7B0C0] leading-relaxed border-t border-[#263044]/60">
                    {faq.a}
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
