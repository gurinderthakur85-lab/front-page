import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ChevronDown, 
  Layers
} from 'lucide-react';

export const ContextVsIntent: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const COMPARISONS = [
    {
      category: 'Data Security (DSPM)',
      claim: 'Focuses on static data at rest',
      limitation: 'Scans databases for stored PII, but blind to runtime prompt injections or autonomous tool calls.',
      sentraAdvantage: 'Sentra AI checks both what data is requested and whether the agent is authorized to take that action.'
    },
    {
      category: 'Identity Management (IAM)',
      claim: 'Focuses on human roles & SSO',
      limitation: 'Built for human users. Agents often inherit broad service-account credentials and can hallucinate.',
      sentraAdvantage: 'Sentra AI isolates agent tool execution with deterministic spend limits and parameter rules.'
    },
    {
      category: 'Endpoint Security (EDR)',
      claim: 'Focuses on OS processes',
      limitation: 'Monitors processes and network sockets. LLM API calls look like normal HTTPS traffic.',
      sentraAdvantage: 'Sentra AI inspects the semantic reasoning chain, payload JSON, and tool arguments in sub-15ms.'
    },
    {
      category: 'Passive AI Gateways',
      claim: 'Focuses on prompt caching & costs',
      limitation: 'Inspects user text prompts only. Completely blind to multi-agent MCP tool calls or DB mutations.',
      sentraAdvantage: 'Sentra AI acts as an execution bouncer on downstream tool calls and mutations.'
    }
  ];

  const MATRIX = [
    { capability: 'Pre-execution inline action interception', dspm: false, iam: false, edr: false, gateway: 'Partial', sentra: true },
    { capability: 'Defense against indirect prompt injection (PDF / Email / Web)', dspm: false, iam: false, edr: false, gateway: 'Partial', sentra: true },
    { capability: 'In-memory dynamic PII and secret redaction', dspm: 'Static only', iam: false, edr: false, gateway: 'Basic', sentra: true },
    { capability: 'Autonomous tool-chaining and spend-cap enforcement', dspm: false, iam: false, edr: false, gateway: false, sentra: true },
    { capability: 'Model Context Protocol (MCP) agent security', dspm: false, iam: false, edr: false, gateway: false, sentra: true },
    { capability: 'Cryptographically signed audit logs (SHA-256)', dspm: false, iam: 'Logs only', edr: 'Logs only', gateway: false, sentra: true },
    { capability: 'Low-latency inline evaluation (<15ms)', dspm: false, iam: false, edr: false, gateway: false, sentra: true },
    { capability: 'Automated evidence mapping (GDPR, DPDP, HIPAA, NIST)', dspm: 'Partial', iam: false, edr: false, gateway: false, sentra: true },
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
                <div className="text-sm font-semibold text-[#F8FAFC] mb-2">
                  {item.claim}
                </div>
                <p className="text-xs text-[#A7B0C0] leading-relaxed mb-4">
                  {item.limitation}
                </p>
              </div>

              <div className="pt-3 border-t border-[#263044]">
                <div className="text-[10px] font-mono text-[#8B5CF6] uppercase font-bold mb-1">
                  Sentra AI Advantage:
                </div>
                <p className="text-xs text-[#F8FAFC] leading-relaxed">
                  {item.sentraAdvantage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Technical Matrix Button */}
        <div className="text-center pt-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111827] hover:bg-[#141D30] border border-[#263044] hover:border-[#8B5CF6]/50 text-xs font-semibold text-[#F8FAFC] transition-all"
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Hide Capability Comparison Matrix' : 'Compare platform capabilities in detail'}</span>
            <ChevronDown className={`w-4 h-4 text-[#8B5CF6] transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Expandable Table */}
        {expanded && (
          <div className="mt-8 rounded-2xl bg-[#111827] border border-[#263044] p-4 sm:p-6 shadow-xl overflow-x-auto">
            <div className="mb-4">
              <h4 className="text-base font-bold text-[#F8FAFC]">
                Detailed Technical Comparison
              </h4>
              <p className="text-xs text-[#A7B0C0]">
                Comparing traditional cybersecurity approaches against Sentra AI's pre-execution inline architecture.
              </p>
            </div>

            <table className="w-full text-left text-xs border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#263044] text-[#A7B0C0] font-mono">
                  <th className="py-3 px-3 text-[#F8FAFC]">Platform Capability</th>
                  <th className="py-3 px-3 text-center">DSPM</th>
                  <th className="py-3 px-3 text-center">IAM</th>
                  <th className="py-3 px-3 text-center">EDR</th>
                  <th className="py-3 px-3 text-center">AI Gateway</th>
                  <th className="py-3 px-3 text-center bg-[#8B5CF6]/10 text-[#C4B5FD] font-bold rounded-t-lg">Sentra AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#263044]/60">
                {MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-3 text-[#F8FAFC] font-medium">
                      {row.capability}
                    </td>
                    <td className="py-3.5 px-3 text-center text-[#A7B0C0]">
                      {row.dspm === true ? <Check className="w-4 h-4 text-[#34D399] mx-auto" /> : row.dspm === false ? <X className="w-4 h-4 text-[#263044] mx-auto" /> : row.dspm}
                    </td>
                    <td className="py-3.5 px-3 text-center text-[#A7B0C0]">
                      {row.iam === true ? <Check className="w-4 h-4 text-[#34D399] mx-auto" /> : row.iam === false ? <X className="w-4 h-4 text-[#263044] mx-auto" /> : row.iam}
                    </td>
                    <td className="py-3.5 px-3 text-center text-[#A7B0C0]">
                      {row.edr === true ? <Check className="w-4 h-4 text-[#34D399] mx-auto" /> : row.edr === false ? <X className="w-4 h-4 text-[#263044] mx-auto" /> : row.edr}
                    </td>
                    <td className="py-3.5 px-3 text-center text-[#A7B0C0]">
                      {row.gateway === true ? <Check className="w-4 h-4 text-[#34D399] mx-auto" /> : row.gateway === false ? <X className="w-4 h-4 text-[#263044] mx-auto" /> : row.gateway}
                    </td>
                    <td className="py-3.5 px-3 text-center bg-[#8B5CF6]/10 font-bold text-[#34D399]">
                      <div className="flex items-center justify-center gap-1">
                        <Check className="w-4 h-4 text-[#34D399]" />
                        <span className="text-[11px]">Supported</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
