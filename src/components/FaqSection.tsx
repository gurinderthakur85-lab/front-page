import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
  category?: string;
}

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const FAQS: FaqItem[] = [
    {
      q: 'What does Sentraa AI do?',
      category: 'Overview',
      a: 'Sentraa AI is an inline pre-execution governance and security platform for autonomous AI agents. It intercepts tool calls, SQL queries, and API requests against enterprise security policies in real time (<15ms) before they execute. Safe actions run seamlessly, while risky or non-compliant operations are blocked or redacted, generating an audit-ready compliance record automatically.'
    },
    {
      q: 'How does Sentraa AI stop indirect prompt injection in autonomous agents?',
      category: 'Security & Threat Defense',
      a: 'Sentraa AI inspects the semantic intent, argument schema, and payload boundaries of every downstream tool call and database mutation before execution. When untrusted input (such as an uploaded PDF, email, or web scrape) attempts to hijack an agent into exfiltrating corporate records or mutating databases, Sentraa AI intercepts and neutralizes the payload in under 15ms.'
    },
    {
      q: 'What is the difference between DSPM, IAM, EDR, and Sentraa AI?',
      category: 'Architecture Comparison',
      a: 'DSPM scans static data at rest; IAM manages human roles and SSO; EDR monitors OS binaries and network sockets. Autonomous AI agents read dynamic data, assume programmatic identities, and execute code in seconds via legitimate HTTPS API calls. Sentraa AI operates specifically at the semantic tool-execution layer, inspecting the reasoning chain, tool parameters, and spending caps in real time before actions take effect.'
    },
    {
      q: 'Does Sentraa AI support Model Context Protocol (MCP) agent security?',
      category: 'MCP & Multi-Agent',
      a: 'Yes. Sentraa AI natively validates Model Context Protocol (MCP) message exchanges, sandboxes tool invocations, and enforces granular tool-level authorizations, preventing compromised agents from traversing connected local and enterprise resources.'
    },
    {
      q: 'How does Sentraa AI discover shadow AI agents?',
      category: 'Discovery & Inventory',
      a: 'Sentraa AI scans enterprise cloud connectors, databases, API keys, Model Context Protocol (MCP) agent connections, and live runtime traffic. It creates a centralized inventory of all AI agents operating across your company, whether officially approved by IT or created independently by individual teams.'
    },
    {
      q: 'Will Sentraa AI slow down our AI agents or workflows?',
      category: 'Performance & Latency',
      a: 'No. Sentraa AI evaluates actions in real time using a sub-15ms, fail-closed decision pipeline. It performs pattern matching, PII scanning, and parameter validation without introducing noticeable overhead to agent response times.'
    },
    {
      q: 'How does pre-execution policy enforcement work?',
      category: 'Policy Enforcement',
      a: 'Instead of auditing what happened after an incident occurs, Sentraa AI intercepts tool calls, SQL mutations, and API requests before they execute. Policies can automatically block unauthorized actions, redact sensitive PII (like SSNs, PAN, Aadhaar, or credit card numbers), or require human approval for large transactions.'
    },
    {
      q: 'Which compliance frameworks are supported out of the box?',
      category: 'Compliance & Audits',
      a: 'Sentraa AI continuously maps live agent activity to the EU AI Act (Arts. 14 & 15), NIST AI Risk Management Framework (AI RMF 1.0), GDPR (Arts. 22 & 35), India Digital Personal Data Protection Act 2023 (DPDP), HIPAA Security Rule, and PCI-DSS v4.0. All execution traces are cryptographically signed with SHA-256 for instant audit export.'
    },
    {
      q: 'How do we deploy Sentraa AI across our systems?',
      category: 'Deployment',
      a: 'Sentraa AI deploys via three non-disruptive models: a lightweight 2-line SDK (Python/TypeScript), an inline transparent reverse proxy, or a containerized sidecar in your private cloud (AWS, GCP, Azure, or Kubernetes). Most teams connect their first agent in under 10 minutes.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section 
      id="faqs" 
      className="py-20 lg:py-28 bg-[#07080E] border-b border-[#1E2338]"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6100FF]/10 border border-[#6100FF]/30 text-[#C4B5FD] text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions &amp; AEO Knowledge Base</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
            Clear answers to common questions
          </h2>

          <p className="text-base text-[#A7B0C0] leading-relaxed max-w-xl mx-auto">
            Direct, verifiable answers regarding latency, pre-execution enforcement, MCP security, and regulatory compliance.
          </p>
        </div>

        {/* Accordion with microdata schema */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#10121F] border-[#6100FF]/60 shadow-lg shadow-purple-950/20'
                    : 'bg-[#10121F]/60 border-[#1E2338] hover:border-[#6100FF]/40'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-left">
                    {faq.category && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#6100FF] bg-[#6100FF]/10 px-2 py-0.5 rounded border border-[#6100FF]/20 self-start sm:self-center">
                        {faq.category}
                      </span>
                    )}
                    <span 
                      itemProp="name" 
                      className="text-sm sm:text-base font-semibold text-[#F8FAFC]"
                    >
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6100FF] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div 
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#A7B0C0] leading-relaxed border-t border-[#1E2338]/60"
                  >
                    <p itemProp="text">
                      {faq.a}
                    </p>
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
