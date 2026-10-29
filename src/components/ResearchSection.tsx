import React from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  FileText, 
  ShieldAlert, 
  Microscope, 
  Terminal, 
  Calendar,
  Tag
} from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const ARTICLES = [
    {
      category: 'Vulnerability Research',
      date: 'October 2026',
      title: 'AgentFlayer: Breaking Autonomous Delegation Chains in Multi-Agent Swarms',
      summary: 'Our security researchers discovered a zero-day structural vulnerability in autonomous agent frameworks where subordinate agents can be tricked into privilege escalation via nested tool outputs.',
      impact: 'CVSS 8.4 • High Severity Advisory',
      readTime: '8 min read',
      tag: 'Zero-Day Advisory'
    },
    {
      category: 'Protocol Security',
      date: 'September 2026',
      title: 'MCP Security: Tool Poisoning & Shadow Servers in Model Context Protocol',
      summary: 'A deep-dive analysis into how rogue or untrusted MCP servers can inject invisible instructions into agent system context, bypassing prompt-only guardrails completely.',
      impact: 'Mitigated via Sentraa MCP Bouncer',
      readTime: '12 min read',
      tag: 'Architecture Deep Dive'
    },
    {
      category: 'Regulatory Intelligence',
      date: 'August 2026',
      title: 'Automating the EU AI Act FRIA for Autonomous Enterprise Systems',
      summary: 'Step-by-step technical blueprint for translating the Fundamental Rights Impact Assessment (FRIA) requirements into deterministic runtime policy guardrails.',
      impact: 'Includes Policy Templates',
      readTime: '10 min read',
      tag: 'Compliance White Paper'
    }
  ];

  return (
    <section id="research" className="py-24 relative bg-[#06080F] border-b border-white/[0.06] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Microscope className="w-3.5 h-3.5" /> Sentraa Labs Threat Intelligence
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Research & Insights Shaping the Future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400">
                AI Agent Security
              </span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal mt-4">
              Sentraa Labs delivers original vulnerability research, threat intelligence, and runtime defense methodologies to protect the enterprise from emerging autonomous threats.
            </p>
          </div>

          <a
            href="#simulator"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 hover:text-white border border-violet-500/30 text-xs font-semibold transition-all shrink-0"
          >
            <span>Test Defenses in Live Simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/40 hover:bg-[#0C1022] card-hover-lift flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[10px] font-bold uppercase">
                    {article.tag}
                  </span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="font-mono text-emerald-400 text-[11px] font-semibold">
                  {article.impact}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">
                  {article.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
