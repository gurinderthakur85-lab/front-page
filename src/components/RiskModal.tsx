import React, { useState } from 'react';
import { 
  X, 
  ShieldAlert, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Database, 
  Terminal, 
  Layers, 
  ExternalLink,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';

interface RiskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: () => void;
}

export const RiskModal: React.FC<RiskModalProps> = ({ isOpen, onClose, onOpenDemo }) => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    agentTypes: [] as string[],
    dataSources: [] as string[],
    autonomyLevel: 'Tool Calling & Execution',
    complianceNeeds: [] as string[]
  });

  if (!isOpen) return null;

  const toggleItem = (listName: 'agentTypes' | 'dataSources' | 'complianceNeeds', item: string) => {
    setSelections((prev) => {
      const exists = prev[listName].includes(item);
      return {
        ...prev,
        [listName]: exists ? prev[listName].filter((i) => i !== item) : [...prev[listName], item]
      };
    });
  };

  // Compute calculated risk score
  const calculateScore = () => {
    let score = 35; // base risk
    score += selections.agentTypes.length * 12;
    score += selections.dataSources.length * 10;
    if (selections.autonomyLevel === 'Unsupervised Code & Container Execution') score += 20;
    if (selections.autonomyLevel === 'Tool Calling & Execution') score += 12;
    score += selections.complianceNeeds.length * 6;
    return Math.min(96, Math.max(22, score));
  };

  const calculatedRisk = calculateScore();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#090D1C] border border-violet-500/30 p-6 sm:p-8 shadow-2xl shadow-purple-950/50 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-[10px] font-mono uppercase font-bold">
              SECURITY ASSESSMENT HUB
            </span>
            <span className="text-xs text-slate-400 font-mono">Step {step} of 4</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            AI Agent Risk & Posture Calculator
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Answer 3 quick questions about your agent architecture to generate an instant threat posture assessment.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/[0.06] rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Step 1: Agent Types */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">
              1. What AI Agent ecosystems are active in your organization?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'Agentic SaaS', desc: 'Salesforce Agentforce, Microsoft 365 Copilot, ServiceNow' },
                { id: 'Coding & IDE Agents', desc: 'Claude Code, Cursor, GitHub Copilot, Roo-Code' },
                { id: 'Cloud / Homegrown Swarms', desc: 'LangChain, CrewAI, AutoGen, Bedrock AgentCore' },
                { id: 'Model Context Protocol (MCP)', desc: 'Local and remote MCP servers connected to LLMs' }
              ].map((opt) => {
                const selected = selections.agentTypes.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleItem('agentTypes', opt.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selected
                        ? 'bg-violet-950/60 border-violet-400 text-white shadow-lg shadow-violet-950/30'
                        : 'bg-white/[0.02] border-white/[0.08] text-slate-300 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{opt.id}</span>
                      {selected && <Check className="w-4 h-4 text-violet-400" />}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">{opt.desc}</p>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Data Sources */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">
              2. What resources or tools can your agents touch?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'Production Databases', desc: 'PostgreSQL, MySQL, Snowflake, MongoDB' },
                { id: 'Cloud Storage & Buckets', desc: 'AWS S3, Google Cloud Storage, Azure Blob' },
                { id: 'Financial & Payment APIs', desc: 'Stripe, PayPal, QuickBooks, Billing APIs' },
                { id: 'Internal Comms & Email', desc: 'Slack Webhooks, Google Workspace, Postmark' }
              ].map((opt) => {
                const selected = selections.dataSources.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleItem('dataSources', opt.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selected
                        ? 'bg-violet-950/60 border-violet-400 text-white shadow-lg shadow-violet-950/30'
                        : 'bg-white/[0.02] border-white/[0.08] text-slate-300 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{opt.id}</span>
                      {selected && <Check className="w-4 h-4 text-violet-400" />}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">{opt.desc}</p>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl bg-white/[0.04] text-slate-400 hover:text-white text-xs font-semibold"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Autonomy Level */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">
              3. What level of autonomy do your agents have?
            </h4>
            <div className="space-y-2">
              {[
                { id: 'Read-only Search & Summarization', desc: 'Agent retrieves data but cannot call state-modifying tools.' },
                { id: 'Tool Calling & Execution', desc: 'Agent triggers APIs, updates databases, and sends external webhooks.' },
                { id: 'Unsupervised Code & Container Execution', desc: 'Agent runs shell scripts, generates code, and deploys workflows.' }
              ].map((lvl) => {
                const selected = selections.autonomyLevel === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    onClick={() => setSelections({ ...selections, autonomyLevel: lvl.id })}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all ${
                      selected
                        ? 'bg-violet-950/60 border-violet-400 text-white shadow-lg shadow-violet-950/30'
                        : 'bg-white/[0.02] border-white/[0.08] text-slate-300 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{lvl.id}</span>
                      {selected && <Check className="w-4 h-4 text-violet-400" />}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">{lvl.desc}</p>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2.5 rounded-xl bg-white/[0.04] text-slate-400 hover:text-white text-xs font-semibold"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-violet-600/30"
              >
                <span>Calculate Posture Score</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Results & Recommended Policies */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Score Display Card */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Computed Enterprise Posture Score
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300 font-mono">
                    {calculatedRisk} / 100
                  </span>
                  <span className="text-xs font-bold text-rose-400 uppercase font-mono">
                    {calculatedRisk > 60 ? 'HIGH RISK DETECTED' : 'MODERATE RISK'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Autonomous agents have access to state-modifying endpoints without inline deterministic pre-execution checks.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 shrink-0 text-center">
                <AlertTriangle className="w-8 h-8 mx-auto text-rose-400 mb-1" />
                <div className="text-[10px] font-mono font-bold uppercase">Immediate Action</div>
                <div className="text-[11px] text-white font-semibold">Enable Bouncer Gate</div>
              </div>
            </div>

            {/* Recommended Sentraa Guardrails */}
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 font-bold">
                Recommended Sentraa Pre-Execution Policies:
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="font-mono text-violet-300 font-bold">POL-INJECTION-09:</span>
                    <span className="text-slate-300 ml-2">Dual-Stage RAG & Document Prompt Injection Filter</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10">Active</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="font-mono text-violet-300 font-bold">POL-DLP-03:</span>
                    <span className="text-slate-300 ml-2">Dynamic In-Memory PII & Credentials Masker (DPDP/GDPR)</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10">Active</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="font-mono text-violet-300 font-bold">POL-BOUND-01:</span>
                    <span className="text-slate-300 ml-2">Autonomous Velocity Limit & High-Value Transaction Gate</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10">Active</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenDemo();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-violet-600/30"
              >
                <span>Remediate Risk with Sentraa Architect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://sentraatech.info"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/[0.08]"
              >
                <span>Test Policies in Live Sandbox</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 hover:text-slate-400 font-mono py-2 sm:ml-auto"
              >
                Reset Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
