import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Sparkles, 
  Eye, 
  Lock, 
  Zap, 
  Scale, 
  Menu, 
  X, 
  ArrowRight, 
  ExternalLink,
  Phone,
  Mail,
  Shield,
  Layers,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      {bannerVisible && (
        <div className="relative z-50 bg-gradient-to-r from-violet-950 via-indigo-950 to-purple-950 border-b border-violet-500/20 px-4 py-2 text-xs text-violet-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 font-semibold text-[11px] tracking-wide uppercase">
                <Sparkles className="w-3 h-3 text-violet-400" /> New
              </span>
              <span>
                <strong>Sentraa AI:</strong> AI Governance, Security &amp; Compliance Platform — Check each agent action before it executes.
              </span>
              <button 
                onClick={onOpenDemo}
                className="hidden sm:inline-flex items-center gap-1 font-semibold text-white underline decoration-violet-400 underline-offset-4 hover:text-violet-200 transition-colors ml-1"
              >
                Book a Demo <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <button 
              onClick={() => setBannerVisible(false)}
              className="text-violet-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <nav 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#06080F]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-purple-950/20' 
            : 'bg-transparent border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src="/sentraa-logo.png" 
                alt="Sentraa AI Logo" 
                className="w-9 h-10 object-contain drop-shadow-[0_0_12px_rgba(139,92,246,0.5)] group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.src = '/sentra-ai-logo.svg';
                }}
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-violet-300 transition-colors">
                    Sentraa<span className="text-violet-400"> AI</span>
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-0.5 hidden sm:block">
                  AI Governance &amp; Security
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            <a href="#services" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              Services
            </a>
            <a href="#benefits" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              Benefits
            </a>
            <a href="#process" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              Work Process
            </a>
            <a href="#transformation" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              Why Sentraa AI
            </a>
            <a href="#simulator" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              Live Bouncer
            </a>
            <a href="#faqs" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              FAQs
            </a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              Contact
            </a>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://sentraatech.info"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] rounded-xl transition-all hover:text-white flex items-center gap-1.5"
            >
              <span>Live Sandbox</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={onOpenContact}
              className="px-3.5 py-2 text-xs font-semibold text-violet-300 bg-violet-950/40 hover:bg-violet-900/60 border border-violet-500/30 rounded-xl transition-all hover:border-violet-400/50"
            >
              Contact Us
            </button>

            <button
              onClick={onOpenDemo}
              className="relative group overflow-hidden px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 rounded-xl transition-all duration-300 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] border border-violet-400/30"
            >
              <span className="relative flex items-center gap-1.5">
                Book Demo <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="px-2.5 py-1.5 text-[11px] font-semibold text-white bg-violet-600 rounded-lg sm:hidden"
            >
              Book Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-violet-500/20 bg-[#0A0D18]/95 backdrop-blur-2xl px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-2">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-violet-950/40 font-medium"
              >
                Services
              </a>
              <a 
                href="#benefits" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-violet-950/40 font-medium"
              >
                Benefits
              </a>
              <a 
                href="#process" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-violet-950/40 font-medium"
              >
                Work Process
              </a>
              <a 
                href="#transformation" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-violet-950/40 font-medium"
              >
                Why Sentraa AI
              </a>
              <a 
                href="#simulator" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-violet-950/40 font-medium"
              >
                Live Bouncer
              </a>
              <a 
                href="#faqs" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-violet-950/40 font-medium"
              >
                FAQs
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-violet-950/40 font-medium"
              >
                Contact
              </a>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
              <a
                href="https://sentraatech.info"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 text-xs font-semibold text-center text-slate-200 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5"
              >
                <span>Launch Live Sandbox</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 text-xs font-semibold text-center text-violet-300 bg-violet-950/50 border border-violet-500/30 rounded-xl"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-2.5 text-xs font-bold text-center text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl shadow-lg shadow-violet-600/30"
              >
                Book Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
