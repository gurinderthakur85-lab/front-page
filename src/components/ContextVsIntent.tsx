import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ChevronDown, 
  Layers
} from 'lucide-react';

export const ContextVsIntent: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(true);

  const COMPARISONS = [
    {
      category: 'Data Security (DSPM)',
      claim: 'Focuses on static data at rest',
      limitation: 'Scans databases for stored PII, but blind to runtime prompt injections or autonomous tool calls.',
      sentraaAdvantage: 'Sentraa AI checks both what data is requested and whether the agent is authorized to take that action.'
    },
    {
      category: 'Identity Management (IAM)',
      claim: 'Focuses on human roles & SSO',
      limitation: 'Built for human users. Agents often inherit broad service-account credentials and can hallucinate.',
      sentraaAdvantage: 'Sentraa AI isolates agent tool execution with deterministic spend limits and parameter rules.'
    },
    {
      category: 'Endpoint Security (EDR)',
      claim: 'Focuses on OS processes',
      limitation: 'Monitors processes and network sockets. LLM API calls look like normal HTTPS traffic.',
      sentraaAdvantage: 'Sentraa AI inspects the semantic reasoning chain, payload JSON, and tool arguments in real time.'
    },
    {
      category: 'Passive AI Gateways',
      claim: 'Focuses on prompt caching & costs',
      limitation: 'Inspects user text prompts only. Completely blind to multi-agent MCP tool calls or DB mutations.',
      sentraaAdvantage: 'Sentraa AI acts as an execution bouncer on downstream tool calls and mutations.'
    }
  ];

  const MATRIX = [
    { capability: 'Pre-execution inline action interception', dspm: false, iam: false, edr: false, gateway: 'Partial', sentraa: true },
    { capability: 'Defense against indirect prompt injection (PDF / Email / Web)', dspm: false, iam: false, edr: false, gateway: 'Partial', sentraa: true },
    { capability: 'In-memory dynamic PII and secret redaction', dspm: 'Static only', iam: false, edr: false, gateway: 'Basic', sentraa: true },
    { capability: 'Autonomous tool-chaining and spend-cap enforcement', dspm: false, iam: false, edr: false, gateway: false, sentraa: true },
    { capability: 'Model Context Protocol (MCP) agent security', dspm: false, iam: false, edr: false, gateway: false, sentraa: true },
    { capability: 'Cryptographically signed audit logs (SHA-256)', dspm: false, iam: 'Logs only', edr: 'Logs only', gateway: false, sentraa: true },
    { capability: 'Real-time pre-execution inline evaluation', dspm: false, iam: false, edr: false, gateway: false, sentraa: true },
    { capability: 'Automated evidence mapping (GDPR, DPDP, HIPAA, NIST)', dspm: 'Partial', iam: false, edr: false, gateway: false, sentraa: true },
  ];

  return (
    <section id="comparison" className="py-20 lg:py-24 bg-[#080B14] border-b border-[#263044]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture Insight</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
            Context answers what. Intent answers why.
          </h2>

          <p className="text-base text-[#A7B0C0] leading-relaxed">
            Traditional security tools were built for human users and static systems. Autonomous AI agents don't fit into one category: they read data, assume identities, and execute code in seconds.
          </p>
        </div>

        {/* 4 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {COMPARISONS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#111827] border border-[#263044] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#A7B0C0] uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <div className="text-base font-bold text-[#F8FAFC] mb-2">
                  {item.claim}
                </div>
                <p className="text-xs text-[#A7B0C0] leading-relaxed mb-4">
                  {item.limitation}
                </p>
              </div>

              <div className="pt-3 border-t border-[#263044]">
                <div className="text-[10px] font-mono text-[#8B5CF6] uppercase font-bold mb-1">
                  Sentraa AI Advantage:
                </div>
                <p className="text-xs text-[#F8FAFC] leading-relaxed font-medium">
                  {item.sentraaAdvantage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Technical Matrix Button */}
        <div className="text-center pt-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111827] hover:bg-[#141D30] border border-[#263044] hover:border-[#8B5CF6]/60 text-sm font-bold text-[#F8FAFC] transition-all cursor-pointer shadow-lg"
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Hide Technical Comparison Matrix' : 'Compare platform capabilities in detail'}</span>
            <ChevronDown className={`w-4 h-4 text-[#8B5CF6] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Expandable Table */}
        {expanded && (
          <div className="mt-8 rounded-2xl bg-[#111827] border border-[#263044] p-5 sm:p-7 lg:p-8 shadow-2xl overflow-x-auto">
            <div className="mb-6">
              <h4 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] tracking-tight">
                Detailed Technical Comparison
              </h4>
              <p className="text-sm sm:text-base font-semibold text-[#A7B0C0] mt-1.5">
                Comparing traditional cybersecurity approaches against Sentraa AI's pre-execution inline architecture.
              </p>
            </div>

            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b-2 border-[#263044]">
                  <th className="py-4 px-4 text-sm sm:text-base font-extrabold text-[#F8FAFC] uppercase tracking-wider font-mono">
                    Platform Capability
                  </th>
                  <th className="py-4 px-3 text-center text-sm sm:text-base font-extrabold text-[#CBD5E1] uppercase tracking-wider font-mono">
                    DSPM
                  </th>
                  <th className="py-4 px-3 text-center text-sm sm:text-base font-extrabold text-[#CBD5E1] uppercase tracking-wider font-mono">
                    IAM
                  </th>
                  <th className="py-4 px-3 text-center text-sm sm:text-base font-extrabold text-[#CBD5E1] uppercase tracking-wider font-mono">
                    EDR
                  </th>
                  <th className="py-4 px-3 text-center text-sm sm:text-base font-extrabold text-[#CBD5E1] uppercase tracking-wider font-mono">
                    AI Gateway
                  </th>
                  <th className="py-4 px-5 text-center bg-[#8B5CF6]/20 text-[#C4B5FD] text-base sm:text-lg font-extrabold uppercase tracking-wider font-mono rounded-t-xl border-t-2 border-x-2 border-[#8B5CF6]/50 shadow-inner">
                    Sentraa AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#263044]/80">
                {MATRIX.map((row, idx) => {
                  const isLastRow = idx === MATRIX.length - 1;
                  return (
                    <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                      {/* Platform Capability Name */}
                      <td className="py-4 px-4 text-sm sm:text-base font-bold text-[#F8FAFC] leading-snug">
                        {row.capability}
                      </td>

                      {/* DSPM */}
                      <td className="py-4 px-3 text-center">
                        {row.dspm === true ? (
                          <Check className="w-5 h-5 text-[#34D399] mx-auto stroke-[3]" />
                        ) : row.dspm === false ? (
                          <X className="w-5 h-5 text-[#475569] mx-auto stroke-[2.5]" />
                        ) : (
                          <span className="px-2.5 py-1 rounded bg-[#080B14] border border-[#263044] text-xs sm:text-sm font-bold text-[#CBD5E1] font-mono inline-block">
                            {row.dspm}
                          </span>
                        )}
                      </td>

                      {/* IAM */}
                      <td className="py-4 px-3 text-center">
                        {row.iam === true ? (
                          <Check className="w-5 h-5 text-[#34D399] mx-auto stroke-[3]" />
                        ) : row.iam === false ? (
                          <X className="w-5 h-5 text-[#475569] mx-auto stroke-[2.5]" />
                        ) : (
                          <span className="px-2.5 py-1 rounded bg-[#080B14] border border-[#263044] text-xs sm:text-sm font-bold text-[#CBD5E1] font-mono inline-block">
                            {row.iam}
                          </span>
                        )}
                      </td>

                      {/* EDR */}
                      <td className="py-4 px-3 text-center">
                        {row.edr === true ? (
                          <Check className="w-5 h-5 text-[#34D399] mx-auto stroke-[3]" />
                        ) : row.edr === false ? (
                          <X className="w-5 h-5 text-[#475569] mx-auto stroke-[2.5]" />
                        ) : (
                          <span className="px-2.5 py-1 rounded bg-[#080B14] border border-[#263044] text-xs sm:text-sm font-bold text-[#CBD5E1] font-mono inline-block">
                            {row.edr}
                          </span>
                        )}
                      </td>

                      {/* AI Gateway */}
                      <td className="py-4 px-3 text-center">
                        {row.gateway === true ? (
                          <Check className="w-5 h-5 text-[#34D399] mx-auto stroke-[3]" />
                        ) : row.gateway === false ? (
                          <X className="w-5 h-5 text-[#475569] mx-auto stroke-[2.5]" />
                        ) : (
                          <span className="px-2.5 py-1 rounded bg-[#080B14] border border-[#263044] text-xs sm:text-sm font-bold text-[#CBD5E1] font-mono inline-block">
                            {row.gateway}
                          </span>
                        )}
                      </td>

                      {/* Sentraa AI Highlighted Column */}
                      <td className={`py-4 px-5 text-center bg-[#8B5CF6]/15 border-x-2 border-[#8B5CF6]/40 ${
                        isLastRow ? 'rounded-b-xl border-b-2 border-[#8B5CF6]/50' : ''
                      }`}>
                        <div className="flex items-center justify-center gap-1.5">
                          <Check className="w-5 h-5 text-[#34D399] stroke-[3]" />
                          <span className="text-sm sm:text-base font-extrabold text-[#34D399] tracking-wide">
                            Supported
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
