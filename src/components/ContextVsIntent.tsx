import React from 'react';
import { 
  Check, 
  X, 
  Minus, 
  ShieldAlert, 
  Layers, 
  HelpCircle, 
  Sparkles, 
  Database, 
  UserCheck, 
  Activity, 
  Globe 
} from 'lucide-react';

export const ContextVsIntent: React.FC = () => {
  const COMPARISONS = [
    {
      category: 'Legacy DSPM',
      claim: '"It\'s a data problem"',
      limitation: 'Scans stationary databases for PII. Blind to autonomous agent runtime decisions, tool chaining, or model prompt injection.',
      sentraaAnswer: 'Sentraa evaluates both the data schema and the dynamic agent intent that requested it in real time.'
    },
    {
      category: 'Legacy IAM / CIEM',
      claim: '"It\'s an identity problem"',
      limitation: 'Built for human RBAC/SSO. AI agents assume broad service roles and hallucinate steps outside human permission baselines.',
      sentraaAnswer: 'Sentraa gives every agent a cryptographically isolated runtime boundary, evaluating velocity and action parameters.'
    },
    {
      category: 'Legacy EDR / XDR',
      claim: '"It\'s an endpoint problem"',
      limitation: 'Inspects operating system processes and network sockets. Autonomous LLM API tool calls look like valid HTTPS traffic.',
      sentraaAnswer: 'Sentraa inspects the semantic reasoning chain, payload JSON, and tool arguments at sub-15ms inline speed.'
    },
    {
      category: 'Passive AI Gateways',
      claim: '"It\'s a proxy problem"',
      limitation: 'Only inspects user text prompts and token costs. Completely blind to multi-agent MCP tool calls and internal database queries.',
      sentraaAnswer: 'Sentraa acts as a true execution bouncer across input, output, memory state, and downstream tool execution.'
    }
  ];

  const MATRIX = [
    { capability: 'Pre-Execution In-Line Action Interception', dspm: false, iam: false, edr: false, gateway: 'Partial', sentraa: true },
    { capability: 'Autonomous Tool Chaining & Escalation Defense', dspm: false, iam: false, edr: false, gateway: false, sentraa: true },
    { capability: 'Indirect Prompt Injection (RAG / PDF / Email)', dspm: false, iam: false, edr: false, gateway: 'Partial', sentraa: true },
    { capability: 'Dynamic In-Memory PII & Secret Redaction', dspm: 'Stationary', iam: false, edr: false, gateway: 'Basic', sentraa: true },
    { capability: 'Model Context Protocol (MCP) Security Enforcement', dspm: false, iam: false, edr: false, gateway: false, sentraa: true },
    { capability: 'Cryptographic Audit Chain (SHA-256 Validated)', dspm: false, iam: 'Logs only', edr: 'Logs only', gateway: false, sentraa: true },
    { capability: 'Fail-Closed Safety Engine (<15ms Latency)', dspm: false, iam: false, edr: false, gateway: false, sentraa: true },
    { capability: 'Multi-Framework Compliance Auto-Mapping (GDPR/HIPAA/DPDP)', dspm: 'Partial', iam: false, edr: false, gateway: false, sentraa: true },
  ];

  return (
    <section id="architecture" className="py-24 relative bg-[#06080F] border-b border-white/[0.06] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Context vs Intent
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Context Answers <span className="text-violet-400">What</span>.{' '}
            Intent Answers <span className="text-indigo-400">Why</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A DSPM vendor calls this a data problem. An IAM vendor calls it an identity problem. 
            An EDR vendor calls it an endpoint problem. All of them are partially right, but none of them are enough to address the full picture.
            <strong className="text-white block mt-2">
              The traditional stack was built for human actors. An autonomous agent's decision doesn't stay inside one category.
            </strong>
          </p>
        </div>

        {/* 4 Category Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {COMPARISONS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  {item.category}
                </div>
                <div className="text-sm font-bold text-rose-300 mb-3 italic">
                  {item.claim}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.limitation}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <div className="text-[10px] font-mono text-violet-400 uppercase tracking-wider font-bold mb-1">
                  Sentraa's Answer:
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {item.sentraaAnswer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-3xl border border-violet-500/20 bg-[#090D1A]/90 backdrop-blur-xl p-6 lg:p-8 shadow-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/[0.08] gap-2">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Architectural Capability Matrix
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Comparing enterprise defenses against agentic autonomy risks
              </p>
            </div>
            <span className="text-[11px] font-mono text-violet-400 bg-violet-950/60 px-3 py-1 rounded-full border border-violet-500/30">
              FAIL-CLOSED AGENT DEFENSE
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/[0.08] text-slate-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-4 font-semibold">Security Dimension</th>
                  <th className="py-3 px-3 text-center">DSPM</th>
                  <th className="py-3 px-3 text-center">IAM / CIEM</th>
                  <th className="py-3 px-3 text-center">EDR</th>
                  <th className="py-3 px-3 text-center">AI Proxy</th>
                  <th className="py-3 px-4 text-center bg-violet-600/20 text-violet-300 rounded-t-xl font-bold">
                    Sentraa AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium text-slate-200">
                      {row.capability}
                    </td>
                    <td className="py-3.5 px-3 text-center text-slate-400 font-mono">
                      {row.dspm === false ? <X className="w-4 h-4 text-rose-500/70 mx-auto" /> : row.dspm}
                    </td>
                    <td className="py-3.5 px-3 text-center text-slate-400 font-mono">
                      {row.iam === false ? <X className="w-4 h-4 text-rose-500/70 mx-auto" /> : row.iam}
                    </td>
                    <td className="py-3.5 px-3 text-center text-slate-400 font-mono">
                      {row.edr === false ? <X className="w-4 h-4 text-rose-500/70 mx-auto" /> : row.edr}
                    </td>
                    <td className="py-3.5 px-3 text-center text-slate-400 font-mono">
                      {row.gateway === false ? <X className="w-4 h-4 text-rose-500/70 mx-auto" /> : row.gateway}
                    </td>
                    <td className="py-3.5 px-4 text-center bg-violet-600/10 text-emerald-400 font-bold font-mono">
                      <div className="flex items-center justify-center gap-1">
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Enforced</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
