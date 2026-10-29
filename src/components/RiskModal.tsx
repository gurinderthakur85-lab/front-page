import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Sparkles, 
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

  const calculateScore = () => {
    let score = 35;
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
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0D1220] border border-[#263044] p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/[0.04] text-[#A7B0C0] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/30 text-[10px] font-mono uppercase font-bold">
              SECURITY ASSESSMENT HUB
            </span>
            <span className="text-xs text-[#A7B0C0] font-mono">Step {step} of 4</span>
          </div>
          <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight">
            AI Agent Risk &amp; Posture Calculator
          </h3>
          <p className="text-xs text-[#A7B0C0] leading-relaxed">
            Answer 3 quick questions about your agent architecture to generate an instant threat posture assessment.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#111827] rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-[#8B5CF6] transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Step 1: Agent Types */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#F8FAFC]">
              1. What AI Agent ecosystems are active in your organization?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'Agentic SaaS', desc: 'Salesforce Agentforce, Microsoft 365 Copilot, ServiceNow' },
                { id: 'Coding & IDE Agents', desc: 'Claude Code, Cursor, GitHub Copilot' },
                { id: 'Cloud / Homegrown Swarms', desc: 'LangChain, CrewAI, AutoGen, Bedrock AgentCore' },
                { id: 'Model Context Protocol (MCP)', desc: 'Local and remote MCP servers connected to LLMs' }
              ].map((opt) => {
                const selected = selections.agentTypes.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleItem('agentTypes', opt.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selected
                        ? 'bg-[#111827] border-[#8B5CF6] text-white ring-1 ring-[#8B5CF6]/50'
                        : 'bg-[#111827]/60 border-[#263044] text-[#A7B0C0] hover:bg-[#111827]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#F8FAFC]">{opt.id}</span>
                      {selected && <Check className="w-4 h-4 text-[#8B5CF6]" />}
                    </div>
                    <p className="text-[11px] text-[#A7B0C0] leading-tight">{opt.desc}</p>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
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
            <h4 className="text-sm font-semibold text-[#F8FAFC]">
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
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selected
                        ? 'bg-[#111827] border-[#8B5CF6] text-white ring-1 ring-[#8B5CF6]/50'
                        : 'bg-[#111827]/60 border-[#263044] text-[#A7B0C0] hover:bg-[#111827]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#F8FAFC]">{opt.id}</span>
                      {selected && <Check className="w-4 h-4 text-[#8B5CF6]" />}
                    </div>
                    <p className="text-[11px] text-[#A7B0C0] leading-tight">{opt.desc}</p>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl bg-[#111827] text-[#A7B0C0] hover:text-white text-xs font-semibold"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-5 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
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
            <h4 className="text-sm font-semibold text-[#F8FAFC]">
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
                    className={`w-full p-3.5 rounded-xl border text-left transition-all ${
                      selected
                        ? 'bg-[#111827] border-[#8B5CF6] text-white ring-1 ring-[#8B5CF6]/50'
                        : 'bg-[#111827]/60 border-[#263044] text-[#A7B0C0] hover:bg-[#111827]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#F8FAFC]">{lvl.id}</span>
                      {selected && <Check className="w-4 h-4 text-[#8B5CF6]" />}
                    </div>
                    <p className="text-[11px] text-[#A7B0C0] leading-tight">{lvl.desc}</p>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2.5 rounded-xl bg-[#111827] text-[#A7B0C0] hover:text-white text-xs font-semibold"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-5 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg"
              >
                <span>Calculate Posture Score</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Results */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-5 rounded-xl bg-[#111827] border border-[#263044] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#A7B0C0] tracking-wider">
                  Computed Enterprise Posture Score
                </span>
                <h4 className="text-3xl font-extrabold text-[#F8FAFC] tracking-tight mt-1">
                  {calculatedRisk}/100{' '}
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ml-2 ${
                    calculatedRisk > 60 
                      ? 'bg-[#F87171]/20 text-[#F87171] border-[#F87171]/40' 
                      : 'bg-[#FBBF24]/20 text-[#FBBF24] border-[#FBBF24]/40'
                  }`}>
                    {calculatedRisk > 60 ? 'HIGH EXPOSURE' : 'MODERATE EXPOSURE'}
                  </span>
                </h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#A7B0C0] block">Recommended Action:</span>
                <span className="text-xs font-bold text-[#34D399] font-mono">Deploy In-Line Pre-Execution Gate</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#A7B0C0]">
              <div className="p-3 rounded-lg bg-[#080B14] border border-[#263044] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#F87171] shrink-0" />
                <span>Detected risk of prompt injection exfiltration via connected database connectors.</span>
              </div>
              <div className="p-3 rounded-lg bg-[#080B14] border border-[#263044] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Sentraa AI can enforce dynamic PII masking and spend limits with 0ms interruption to agents.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full py-3 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Book a Demo to Remediate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setStep(1)}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#111827] text-[#A7B0C0] hover:text-white border border-[#263044] text-xs font-semibold transition-colors"
              >
                Recalculate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
