import React, { useState } from 'react';
import { X, Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import type { LegalDocType } from './LegalModal';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLegal?: (doc: LegalDocType) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onOpenLegal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1220] border border-[#263044] p-6 sm:p-8 shadow-2xl overflow-hidden">
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
                CONNECT WITH OUR TEAM
              </span>
              <h3 className="text-2xl font-bold text-[#F8FAFC] mt-2">
                Get in Touch
              </h3>
              <p className="text-xs text-[#A7B0C0] mt-1 leading-relaxed">
                Have questions about autonomous agent governance or enterprise deployment? We&apos;d love to connect.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <a
                href="mailto:support@sentraatech.com"
                className="p-3 rounded-xl bg-[#111827] border border-[#263044] hover:border-[#8B5CF6]/40 transition-colors flex items-center gap-2.5 text-xs text-[#A7B0C0] hover:text-[#F8FAFC]"
              >
                <Mail className="w-4 h-4 text-[#8B5CF6]" />
                <span className="truncate">support@sentraatech.com</span>
              </a>
              <a
                href="tel:+916309624519"
                className="p-3 rounded-xl bg-[#111827] border border-[#263044] hover:border-[#34D399]/40 transition-colors flex items-center gap-2.5 text-xs text-[#A7B0C0] hover:text-[#F8FAFC]"
              >
                <Phone className="w-4 h-4 text-[#34D399]" />
                <span>+91 6309624519</span>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#F8FAFC] placeholder-[#A7B0C0]/50 focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#F8FAFC] placeholder-[#A7B0C0]/50 focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">Message</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your AI agent stack or what policies you want to enforce..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#F8FAFC] placeholder-[#A7B0C0]/50 focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Inquiries</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
            <div className="w-14 h-14 rounded-2xl bg-[#34D399]/20 border border-[#34D399]/30 text-[#34D399] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-[#F8FAFC]">Message Sent</h4>
            <p className="text-xs text-[#A7B0C0] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{form.name}</strong>. A Sentraa AI solutions engineer will respond to <strong>{form.email}</strong> within 1 business day.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
