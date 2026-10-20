import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Sparkles, 
  Calendar, 
  Building2, 
  Mail, 
  User, 
  Bot, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    agentCount: '10-50',
    primaryFramework: 'LangChain / CrewAI',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#090D1C] border border-violet-500/30 p-6 sm:p-8 shadow-2xl shadow-purple-950/50 overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-[10px] font-mono uppercase font-bold">
                ENTERPRISE DEMO
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
              See the Sentraa Bouncer in Action
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Schedule a 30-minute tailored technical demo with our AI security architects. We'll simulate your agent architecture and demonstrate real-time interception.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    Estimated Agents in Org
                  </label>
                  <select
                    value={formData.agentCount}
                    onChange={(e) => setFormData({ ...formData, agentCount: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="1-10">1 - 10 agents</option>
                    <option value="10-50">10 - 50 agents</option>
                    <option value="50-250">50 - 250 agents</option>
                    <option value="250+">250+ enterprise agents</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                  Primary Agent Tech Stack
                </label>
                <select
                  value={formData.primaryFramework}
                  onChange={(e) => setFormData({ ...formData, primaryFramework: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-violet-500 transition-colors"
                >
                  <option value="LangChain / CrewAI">LangChain / LangGraph / CrewAI</option>
                  <option value="AWS Bedrock / Azure AI">AWS Bedrock AgentCore / Azure AI Foundry</option>
                  <option value="Claude Code / Cursor">Claude Code / Cursor / Copilot Developer Tools</option>
                  <option value="Salesforce / ServiceNow">Salesforce Agentforce / ServiceNow AI</option>
                  <option value="Custom Internal LLMs">Custom Python / Node.js Agent Swarm</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                  Specific Concerns / Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Prompt injection via RAG PDFs, preventing unauthorized Stripe tool executions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 border border-violet-400/30"
                >
                  <span>Request Priority Demo Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 font-mono">
                NDA guaranteed • We will respond within 4 business hours.
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Demo Requested!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.name}. Our AI security engineering team has received your request for <strong>{formData.company}</strong> and will follow up with scheduling links shortly.
            </p>
            <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] text-xs text-slate-400 max-w-sm mx-auto font-mono text-left">
              <div>• Tech Stack: {formData.primaryFramework}</div>
              <div>• Estimated Fleet: {formData.agentCount}</div>
              <div>• Status: Priority Routing Active</div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-semibold transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
