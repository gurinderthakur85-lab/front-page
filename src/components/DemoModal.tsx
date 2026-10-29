import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  Mail, 
  User, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import type { LegalDocType } from './LegalModal';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLegal?: (doc: LegalDocType) => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onOpenLegal }) => {
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
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1220] border border-[#263044] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/[0.04] text-[#A7B0C0] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/30 text-[10px] font-mono uppercase font-bold">
                EXPERIENCE PRE-EXECUTION GOVERNANCE
              </span>
              <h3 className="text-2xl font-bold text-[#F8FAFC] mt-2">
                Book a Live Architecture Demo
              </h3>
              <p className="text-xs text-[#A7B0C0] mt-1 leading-relaxed">
                See how Sentraa AI sits in-line between your agents and tools to enforce zero-drift guardrails.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#A7B0C0] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Varma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#F8FAFC] placeholder-[#A7B0C0]/50 focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#A7B0C0] absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="jordan@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#F8FAFC] placeholder-[#A7B0C0]/50 focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">Company</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#A7B0C0] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#F8FAFC] placeholder-[#A7B0C0]/50 focus:outline-none focus:border-[#8B5CF6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">Estimated AI Agents</label>
                  <select
                    value={formData.agentCount}
                    onChange={(e) => setFormData({ ...formData, agentCount: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#F8FAFC] focus:outline-none focus:border-[#8B5CF6]"
                  >
                    <option value="1-10">1 – 10 AI Agents</option>
                    <option value="10-50">10 – 50 AI Agents</option>
                    <option value="50-200">50 – 200 AI Agents</option>
                    <option value="200+">200+ Enterprise Fleet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">Primary Agent Stack / Framework</label>
                <select
                  value={formData.primaryFramework}
                  onChange={(e) => setFormData({ ...formData, primaryFramework: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#F8FAFC] focus:outline-none focus:border-[#8B5CF6]"
                >
                  <option value="LangChain / CrewAI">LangChain / CrewAI</option>
                  <option value="AWS Bedrock / Azure AI">AWS Bedrock / Azure AI</option>
                  <option value="OpenAI Swarm / Anthropic MCP">OpenAI Swarm / Anthropic MCP</option>
                  <option value="Custom Proprietary In-House">Custom Proprietary In-House</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">Specific Security or Compliance Goals (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. GDPR & DPDP compliance, preventing prompt injection, DLP for databases..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#F8FAFC] placeholder-[#A7B0C0]/50 focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-xs shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Demo Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-[#A7B0C0] pt-1">
                By submitting, you agree to our{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal && onOpenLegal('terms')}
                  className="text-[#C4B5FD] hover:underline cursor-pointer font-medium"
                >
                  Terms and Conditions
                </button>{' '}
                and{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal && onOpenLegal('privacy')}
                  className="text-[#C4B5FD] hover:underline cursor-pointer font-medium"
                >
                  Privacy Policy
                </button>.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#34D399]/20 border border-[#34D399]/30 text-[#34D399] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-[#F8FAFC]">Demo Request Received</h4>
            <p className="text-xs text-[#A7B0C0] max-w-sm mx-auto leading-relaxed">
              Thanks, <strong>{formData.name}</strong>! We&apos;ve scheduled a customized 30-minute walkthrough for <strong>{formData.company}</strong>. A calendar invite has been dispatched to <strong>{formData.email}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-[#111827] border border-[#263044] text-xs text-left max-w-sm mx-auto space-y-1.5 font-mono">
              <div className="text-[#34D399] font-bold">✓ Dedicated Solutions Engineer Assigned</div>
              <div className="text-[#A7B0C0]">✓ Stack: {formData.primaryFramework}</div>
              <div className="text-[#A7B0C0]">✓ Fleet size: {formData.agentCount}</div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
