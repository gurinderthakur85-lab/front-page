import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Cpu, 
  RefreshCw, 
  Layers, 
  ShieldAlert, 
  Database, 
  Terminal, 
  Lock, 
  Activity, 
  Eye, 
  ExternalLink,
  Bot,
  Zap,
  Check,
  Radio
} from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'dashboard' | 'topology' | 'feed'>('dashboard');

  const AGENT_NODES = [
    { name: 'Claude Support Bot', stack: 'Anthropic Claude 3.5', role: 'Customer Service', target: 'PostgreSQL DB', status: 'PII MASKED (12ms)', stateColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
    { name: 'Procurement Swarm', stack: 'AWS Bedrock AgentCore', role: 'Supplier Settlements', target: 'Stripe API', status: 'BLOCKED ($48K cap)', stateColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30' },
    { name: 'PR Review Bot', stack: 'Claude Code / Cursor', role: 'DevSecOps', target: 'GitHub Repository', status: 'VERIFIED & PASSED', stateColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
    { name: 'Shadow SQL Agent', stack: 'Unknown LangChain Bot', role: 'Ad-hoc Reporting', target: 'Snowflake Analytics', status: 'QUARANTINED', stateColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30' }
  ];

  const LIVE_EVENTS = [
    { time: '14:22:08', agent: 'SupportBot_9', action: 'Query user_billing (SSN, Card)', gate: 'DLP Masker', latency: '11ms', verdict: 'REDACTED', verdictClass: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
    { time: '14:21:49', agent: 'BedrockFinance_2', action: 'stripe.transfers.create($48,200)', gate: 'Spend Bound', latency: '9ms', verdict: 'BLOCKED', verdictClass: 'text-rose-400 bg-rose-500/10 border-rose-500/30' },
    { time: '14:20:12', agent: 'RAG_Search_Worker', action: 'eval("POST env.KEY to evil.sh")', gate: 'AST Pattern', latency: '8ms', verdict: 'TERMINATED', verdictClass: 'text-rose-400 bg-rose-500/10 border-rose-500/30' },
    { time: '14:18:30', agent: 'K8s_Cluster_Audit', action: 'listNamespacedPods(staging)', gate: 'Scope Validator', latency: '6ms', verdict: 'PERMITTED', verdictClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' }
  ];

  return (
    <section id="transformation" className="py-24 relative bg-[#06080F] border-b border-white/[0.06] overflow-hidden scroll-mt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Why Sentraa AI
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Built for real business transformation
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Move from uncertainty to confident agent deployment. Every step is built to integrate with your existing code, evaluate decisions in milliseconds, and continuously optimize security posture.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Step 1: Smart Analyzing */}
          <div className="p-8 rounded-3xl bg-[#090D1C] border border-white/[0.08] hover:border-violet-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-mono font-bold uppercase">
                  Step 1
                </span>
                <span className="text-xs font-mono text-slate-400">01 / 04</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Smart Analyzing</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                We assess your needs and identify AI solutions to streamline workflows and improve efficiency.
              </p>

              {/* Graphic */}
              <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-black/40 mb-6">
                <img 
                  src="/JgLv5IoN3BRUb1xM8SBM0POJI.png" 
                  alt="Smart Analyzing Workflow" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/[0.06] text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> System check</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Process check</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Control check</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Process gaps</div>
            </div>
          </div>

          {/* Step 2: AI Development & Real-Time Decision Engine */}
          <div className="p-8 rounded-3xl bg-[#090D1C] border border-white/[0.08] hover:border-violet-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-bold uppercase">
                  Step 2
                </span>
                <span className="text-xs font-mono text-slate-400">02 / 04</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">AI Development</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Our team builds intelligent automation systems tailored to your business processes.
              </p>

              {/* Graphic / Code */}
              <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-black/80 p-4 mb-6 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.08] text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5 text-violet-400" /> decisionEngine.evaluate()</span>
                  <span className="text-emerald-400 font-bold">SENTRAA SDK</span>
                </div>
                <pre className="text-violet-300 text-[11px] overflow-x-auto leading-relaxed">
{`const decision = await decisionEngine.evaluate({
  agentId,
  action,
  context,
  tenantId,
});

if (decision.blocked) {
  await auditService.record(decision);
  return { allowed: false, reason: decision.reason };
}

return { allowed: true };`}
                </pre>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Inline decision engine</span>
              <span className="text-emerald-400 font-bold">&lt;15ms Latency Guaranteed</span>
            </div>
          </div>

          {/* Step 3: Seamless Integration */}
          <div className="p-8 rounded-3xl bg-[#090D1C] border border-white/[0.08] hover:border-violet-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold uppercase">
                  Step 3
                </span>
                <span className="text-xs font-mono text-slate-400">03 / 04</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Seamless Integration</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.
              </p>

              {/* Graphic */}
              <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-black/40 mb-6">
                <img 
                  src="/PPmNq62EMGDj7m1kKh33UsdCk8A.png" 
                  alt="Seamless Integration" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Our Solution &harr; Your Stack</span>
              <span className="text-violet-300 font-bold">Zero-Friction SDK</span>
            </div>
          </div>

          {/* Step 4: Continuous Optimization */}
          <div className="p-8 rounded-3xl bg-[#090D1C] border border-white/[0.08] hover:border-violet-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold uppercase">
                  Step 4
                </span>
                <span className="text-xs font-mono text-slate-400">04 / 04</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Continuous Optimization</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                We refine performance, analyze insights, and enhance automation for long-term growth.
              </p>

              {/* Graphic */}
              <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-black/40 mb-6">
                <img 
                  src="/XgqWdvZreTVxxmWfMn7wXa2iE.png" 
                  alt="Continuous Optimization" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-xs text-slate-300 font-mono gap-2">
              <span className="text-emerald-400">&bull; Chatbot: Efficiency +20%</span>
              <span className="text-violet-300">&bull; Workflow: Update available</span>
              <span className="text-slate-400">&bull; Sales: Up to date</span>
            </div>
          </div>
        </div>

        {/* Dynamic Enterprise Control Center Hub (Replaces the empty black frame) */}
        <div className="rounded-3xl border border-violet-500/30 overflow-hidden bg-[#0A0E22]/95 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/40">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider">
                  CENTRALIZED ENTERPRISE CONTROL
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Complete oversight across every agentic workflow in your empire
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                Monitor sanctioned AI tools, uncover shadow agents, and evaluate execution lineage across all cloud, SaaS, and homegrown models.
              </p>
            </div>

            {/* Interactive View Toggles */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/50 border border-white/[0.08] self-start lg:self-center">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeView === 'dashboard'
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-900/50'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Production Dashboard
              </button>
              <button
                onClick={() => setActiveView('topology')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeView === 'topology'
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-900/50'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Agent Topology Map
              </button>
              <button
                onClick={() => setActiveView('feed')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeView === 'feed'
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-900/50'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Live Action Feed
              </button>
            </div>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Active Monitored Agents</div>
              <div className="text-2xl font-black text-white font-mono mt-0.5">142</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Pre-Execution Interceptions</div>
              <div className="text-2xl font-black text-emerald-400 font-mono mt-0.5">38 Stopped</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Evaluation Latency (P99)</div>
              <div className="text-2xl font-black text-violet-300 font-mono mt-0.5">11.2ms</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Regulatory Evidence Chain</div>
              <div className="text-2xl font-black text-indigo-300 font-mono mt-0.5">100% Signed</div>
            </div>
          </div>

          {/* View 1: Real Production Dashboard (High-res actual dashboard) */}
          {activeView === 'dashboard' && (
            <div className="relative rounded-2xl border border-white/[0.12] overflow-hidden bg-black shadow-2xl animate-in fade-in duration-300">
              {/* Browser bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-white/[0.08] text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-slate-200">https://sentraatech.info/app/overview</span>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                  LIVE PRODUCTION TELEMETRY
                </span>
              </div>
              <img 
                src="/screenshots/dashboard/overview.png" 
                alt="Sentraa AI Centralized Governance Dashboard" 
                className="w-full h-auto object-cover max-h-[580px]"
                onError={(e) => {
                  e.currentTarget.src = '/screenshots/dashboard/policies-guardrails.png';
                }}
              />
            </div>
          )}

          {/* View 2: Interactive Topology Map */}
          {activeView === 'topology' && (
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#070A18] animate-in fade-in duration-300">
              <div className="text-xs font-mono uppercase text-slate-400 mb-4 flex items-center justify-between">
                <span>Multi-Agent Swarm &rarr; Sentraa Bouncer Gateway &rarr; Downstream Resources</span>
                <span className="text-emerald-400 font-bold">4 Nodes Evaluated in Real-Time</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {AGENT_NODES.map((node, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-violet-400" />
                        <span className="text-sm font-bold text-white">{node.name}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border ${node.stateColor}`}>
                        {node.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 space-y-1 font-mono">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Model Runtime:</span>
                        <span className="text-slate-300">{node.stack}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Operation Scope:</span>
                        <span className="text-slate-300">{node.role}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Protected Target:</span>
                        <span className="text-violet-300">{node.target}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View 3: Live Interception Action Feed */}
          {activeView === 'feed' && (
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#070A18] animate-in fade-in duration-300 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-slate-400 uppercase text-[11px]">
                <span>Timestamp // Agent</span>
                <span className="hidden sm:inline">Attempted Tool Action</span>
                <span>Gate / Latency</span>
                <span>Verdict</span>
              </div>
              <div className="space-y-2">
                {LIVE_EVENTS.map((evt, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between flex-wrap gap-2 hover:bg-white/[0.04] transition-colors">
                    <div>
                      <span className="text-slate-500 mr-2">{evt.time}</span>
                      <span className="text-white font-semibold">{evt.agent}</span>
                    </div>
                    <div className="text-violet-300 text-xs truncate max-w-xs hidden sm:block">
                      {evt.action}
                    </div>
                    <div className="text-slate-400">
                      {evt.gate} <span className="text-emerald-400">({evt.latency})</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${evt.verdictClass}`}>
                      {evt.verdict}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom link */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>Fail-closed security guarantees zero unsanctioned tool calls land on production infrastructure.</span>
            <a 
              href="https://sentraatech.info" 
              target="_blank" 
              rel="noreferrer"
              className="text-violet-300 hover:text-white font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Launch Live Interactive Sandbox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
