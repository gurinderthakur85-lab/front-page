import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, ExternalLink, Shield, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="contact" className="bg-[#04060A] text-slate-400 text-xs border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/sentraa-logo.png" 
                alt="Sentraa AI Logo" 
                className="w-8 h-9 object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/sentra-ai-logo.svg';
                }}
              />
              <span className="font-extrabold text-xl tracking-tight text-white">
                Sentraa<span className="text-violet-400"> AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Sentraa AI is an AI governance, security, risk, and compliance platform designed to help organizations discover, monitor, and govern their AI agents, models, and workflows.
            </p>

            {/* Direct Contact info from sentraatech.com */}
            <div className="space-y-2 pt-2">
              <a 
                href="mailto:support@sentraatech.com" 
                className="flex items-center gap-2 text-slate-300 hover:text-violet-300 transition-colors font-mono"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>support@sentraatech.com</span>
              </a>
              <a 
                href="tel:+916309624519" 
                className="flex items-center gap-2 text-slate-300 hover:text-violet-300 transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 6309624519</span>
              </a>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-4 max-w-sm">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block mb-2 font-bold">
                Subscribe for AI Governance Updates:
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition-colors shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4 text-white" /> : 'Subscribe'}
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] text-emerald-400 mt-1 block font-mono">
                  &bull; Subscribed successfully!
                </span>
              )}
            </div>
          </div>

          {/* Quick Nav: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-violet-300 transition-colors">Complete AI Visibility</a></li>
              <li><a href="#services" className="hover:text-violet-300 transition-colors">Real-Time Governance Engine</a></li>
              <li><a href="#services" className="hover:text-violet-300 transition-colors">Compliance Automation</a></li>
              <li><a href="#services" className="hover:text-violet-300 transition-colors">Custom AI Projects</a></li>
              <li><a href="#simulator" className="hover:text-violet-300 transition-colors">Live Bouncer Simulation</a></li>
            </ul>
          </div>

          {/* Quick Nav: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#benefits" className="hover:text-violet-300 transition-colors">Benefits</a></li>
              <li><a href="#process" className="hover:text-violet-300 transition-colors">Work Process</a></li>
              <li><a href="#transformation" className="hover:text-violet-300 transition-colors">Why Sentraa AI</a></li>
              <li><a href="#faqs" className="hover:text-violet-300 transition-colors">FAQ Questions</a></li>
              <li><a href="https://sentraatech.info" target="_blank" rel="noreferrer" className="hover:text-violet-300 transition-colors flex items-center gap-1">Live Sandbox <ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
            </ul>
          </div>

          {/* Regulatory Frameworks */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">
              Compliance OS
            </h4>
            <ul className="space-y-2.5 font-mono text-[11px]">
              <li>&bull; GDPR Compliance Engine</li>
              <li>&bull; DPDP PII Redaction</li>
              <li>&bull; HIPAA Safe Harbor</li>
              <li>&bull; PCI-DSS Payment Isolation</li>
              <li>&bull; NIST AI RMF 1.0 Mapped</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Sentraa AI. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="https://sentraatech.info" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="https://sentraatech.info" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="mailto:support@sentraatech.com" className="hover:text-slate-300 transition-colors">support@sentraatech.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
