import React, { useState } from 'react';
import { Mail, Phone, Check } from 'lucide-react';
import type { LegalDocType } from './LegalModal';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about') => void;
  onOpenLegal?: (doc: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  const handleLegalClick = (doc: LegalDocType) => {
    if (onOpenLegal) {
      onOpenLegal(doc);
    } else {
      window.location.hash = doc;
    }
  };

  return (
    <footer id="contact" className="bg-[#080B14] text-[#A7B0C0] text-xs border-t border-[#263044] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-6 space-y-4">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
                else window.location.hash = '';
              }}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <img 
                src="/sentraa-logo.png" 
                alt="Sentraa AI Logo" 
                className="w-12 h-14 sm:w-14 sm:h-16 object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.src = '/sentraa-ai-logo.svg';
                }}
              />
              <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-[#F8FAFC]">
                Sentraa<span className="text-[#8B5CF6]"> AI</span>
              </span>
            </a>
            <p className="text-xs text-[#A7B0C0] leading-relaxed max-w-sm">
              Sentraa AI is the pre-execution governance and security platform that discovers AI agents, enforces real-time guardrails, and automates compliance evidence.
            </p>

            {/* Direct Contact info */}
            <div className="space-y-1.5 pt-1">
              <a 
                href="mailto:support@sentraatech.com" 
                className="flex items-center gap-2 text-[#A7B0C0] hover:text-[#C4B5FD] transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>support@sentraatech.com</span>
              </a>
              <a 
                href="tel:+916309624519" 
                className="flex items-center gap-2 text-[#A7B0C0] hover:text-[#C4B5FD] transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#34D399]" />
                <span>+91 6309624519</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="pt-3 max-w-xs">
              <span className="text-[11px] font-mono uppercase text-[#A7B0C0] tracking-wider block mb-2">
                Subscribe for AI Risk Updates:
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#F8FAFC] placeholder-[#A7B0C0]/60 focus:outline-none focus:border-[#8B5CF6]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-xs transition-colors shrink-0"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5 text-white" /> : 'Join'}
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] text-[#34D399] mt-1 block font-mono">
                  ✓ Successfully subscribed
                </span>
              )}
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider font-mono mb-3">
              Platform
            </h4>
            <ul className="space-y-2">
              <li><a href="#capabilities" className="hover:text-[#F8FAFC] transition-colors">AI Discovery &amp; Inventory</a></li>
              <li><a href="#capabilities" className="hover:text-[#F8FAFC] transition-colors">Policy Enforcement</a></li>
              <li><a href="#capabilities" className="hover:text-[#F8FAFC] transition-colors">Continuous Monitoring</a></li>
              <li><a href="#simulator" className="hover:text-[#F8FAFC] transition-colors">Live Bouncer Simulator</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider font-mono mb-3">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li><a href="#use-cases" className="hover:text-[#F8FAFC] transition-colors">Security &amp; SecOps Teams</a></li>
              <li><a href="#use-cases" className="hover:text-[#F8FAFC] transition-colors">Compliance &amp; Risk Officers</a></li>
              <li><a href="#use-cases" className="hover:text-[#F8FAFC] transition-colors">Business &amp; Executive Leaders</a></li>
              <li><a href="#use-cases" className="hover:text-[#F8FAFC] transition-colors">AI Engineers &amp; Developers</a></li>
              <li><a href="#use-cases" className="hover:text-[#F8FAFC] transition-colors">BFSI &amp; HealthTech</a></li>
            </ul>
          </div>

          {/* Column 3: Resources & Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider font-mono mb-3">
              Resources &amp; Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    if (onNavigate) onNavigate('about');
                    else window.location.hash = 'about';
                  }} 
                  className="hover:text-[#F8FAFC] transition-colors text-left cursor-pointer"
                >
                  About Sentraa AI
                </button>
              </li>
              <li><a href="#how-it-works" className="hover:text-[#F8FAFC] transition-colors">How It Works</a></li>
              <li><a href="#comparison" className="hover:text-[#F8FAFC] transition-colors">Compare Capabilities</a></li>
              <li><a href="#faqs" className="hover:text-[#F8FAFC] transition-colors">FAQ Knowledge Base</a></li>
              <li><a href="#problem" className="hover:text-[#F8FAFC] transition-colors">AI Risk Threat Matrix</a></li>
              <li className="pt-2 border-t border-[#263044]/60">
                <button 
                  onClick={() => handleLegalClick('privacy')}
                  className="hover:text-[#C4B5FD] transition-colors text-left cursor-pointer font-medium flex items-center gap-1.5"
                >
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLegalClick('terms')}
                  className="hover:text-[#C4B5FD] transition-colors text-left cursor-pointer font-medium flex items-center gap-1.5"
                >
                  <span>Terms and Conditions</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#263044] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7B0C0]">
          <div>
            &copy; 2026 Sentraa AI Tech Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button 
              onClick={() => handleLegalClick('privacy')}
              className="text-[#A7B0C0] hover:text-[#F8FAFC] transition-colors cursor-pointer font-medium"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLegalClick('terms')}
              className="text-[#A7B0C0] hover:text-[#F8FAFC] transition-colors cursor-pointer font-medium"
            >
              Terms and Conditions
            </button>
            <a href="mailto:support@sentraatech.com" className="hover:text-[#F8FAFC] transition-colors">
              support@sentraatech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
