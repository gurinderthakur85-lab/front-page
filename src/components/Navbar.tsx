import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Menu, 
  X, 
  ArrowRight, 
  Sliders
} from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenContact: () => void;
  currentPage?: 'home' | 'about';
  onNavigate?: (page: 'home' | 'about') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenDemo, 
  onOpenContact,
  currentPage = 'home',
  onNavigate 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full pt-[env(safe-area-inset-top,0px)] px-[env(safe-area-inset-left,0px)]">
      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-200 ${
          scrolled 
            ? 'bg-[#07080E]/95 backdrop-blur-md border-b border-[#1E2338] shadow-lg shadow-black/50' 
            : 'bg-[#07080E]/80 backdrop-blur-sm border-b border-[#1E2338]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" ref={dropdownRef}>
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
                else window.location.hash = '';
              }}
              className="flex items-center gap-3.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6100FF] rounded-xl"
            >
              <img 
                src="/sentraa-logo.png" 
                alt="Sentraa AI Logo" 
                width={56}
                height={64}
                className="w-12 h-14 sm:w-14 sm:h-16 object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.src = '/sentraa-ai-logo.svg';
                }}
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-[#FFFFFF]">
                  Sentraa<span className="text-[#6100FF]"> AI</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#94A3B8] font-mono tracking-wider uppercase -mt-0.5 hidden sm:block">
                  AI Governance &amp; Security
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Platform Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'platform' ? null : 'platform')}
                className="px-3.5 py-2 text-sm font-medium text-[#F8FAFC] hover:text-[#C4B5FD] transition-colors rounded-lg flex items-center gap-1.5 hover:bg-white/[0.04]"
              >
                <span>Platform</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'platform' ? 'rotate-180 text-[#6100FF]' : 'text-[#94A3B8]'}`} />
              </button>

              {activeDropdown === 'platform' && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-[#10121F] border border-[#1E2338] shadow-2xl p-2.5 space-y-1">
                  <a 
                    href="#capabilities" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#16192C] transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#6100FF]/15 text-[#C4B5FD] border border-[#6100FF]/25 group-hover:border-[#6100FF]/50">
                      <Eye className="w-4 h-4 text-[#6100FF]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#FFFFFF] group-hover:text-[#C4B5FD]">AI Discovery</div>
                      <div className="text-[11px] text-[#94A3B8]">Find sanctioned & shadow AI agents</div>
                    </div>
                  </a>

                  <a 
                    href="#capabilities" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#16192C] transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#6100FF]/15 text-[#C4B5FD] border border-[#6100FF]/25 group-hover:border-[#6100FF]/50">
                      <Sliders className="w-4 h-4 text-[#6100FF]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#FFFFFF] group-hover:text-[#C4B5FD]">Policy Enforcement</div>
                      <div className="text-[11px] text-[#94A3B8]">Pre-execution controls & guardrails</div>
                    </div>
                  </a>

                  <a 
                    href="#capabilities" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#16192C] transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#6100FF]/15 text-[#C4B5FD] border border-[#6100FF]/25 group-hover:border-[#6100FF]/50">
                      <ShieldCheck className="w-4 h-4 text-[#6100FF]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#FFFFFF] group-hover:text-[#C4B5FD]">Continuous Monitoring</div>
                      <div className="text-[11px] text-[#94A3B8]">Automated compliance & audit logs</div>
                    </div>
                  </a>

                  <a 
                    href="#simulator" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#16192C] transition-colors group border-t border-[#1E2338]"
                  >
                    <div className="p-2 rounded-lg bg-[#00F5A0]/15 text-[#00F5A0] border border-[#00F5A0]/25">
                      <Zap className="w-4 h-4 text-[#00F5A0]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#FFFFFF] flex items-center gap-1.5">
                        Live Bouncer Simulator
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#00F5A0]/20 text-[#00F5A0] font-mono">Interactive</span>
                      </div>
                      <div className="text-[11px] text-[#94A3B8]">Test real-time action interception</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* How It Works */}
            <a 
              href="#how-it-works" 
              className="px-3.5 py-2 text-sm font-medium text-[#94A3B8] hover:text-[#FFFFFF] transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              How It Works
            </a>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                className="px-3.5 py-2 text-sm font-medium text-[#94A3B8] hover:text-[#FFFFFF] transition-colors rounded-lg flex items-center gap-1.5 hover:bg-white/[0.04]"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180 text-[#6100FF]' : 'text-[#94A3B8]'}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#10121F] border border-[#1E2338] shadow-2xl p-2.5 space-y-1">
                  <a 
                    href="#use-cases" 
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2 rounded-xl hover:bg-[#16192C] transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#FFFFFF]">For Security Teams</div>
                    <div className="text-[11px] text-[#94A3B8]">Stop data exfiltration and prompt injection</div>
                  </a>
                  <a 
                    href="#use-cases" 
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2 rounded-xl hover:bg-[#16192C] transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#FFFFFF]">For Compliance &amp; Risk</div>
                    <div className="text-[11px] text-[#94A3B8]">Continuous GDPR, DPDP, HIPAA evidence</div>
                  </a>
                  <a 
                    href="#use-cases" 
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2 rounded-xl hover:bg-[#16192C] transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#FFFFFF]">For AI Engineers</div>
                    <div className="text-[11px] text-[#94A3B8]">Ship multi-agent swarms with guardrails</div>
                  </a>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                className="px-3.5 py-2 text-sm font-medium text-[#94A3B8] hover:text-[#FFFFFF] transition-colors rounded-lg flex items-center gap-1.5 hover:bg-white/[0.04]"
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'resources' ? 'rotate-180 text-[#6100FF]' : 'text-[#94A3B8]'}`} />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#10121F] border border-[#1E2338] shadow-2xl p-2.5 space-y-1">
                  <a 
                    href="#comparison" 
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2 rounded-xl hover:bg-[#16192C] transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#FFFFFF]">Compare Capabilities</div>
                    <div className="text-[11px] text-[#94A3B8]">DSPM vs IAM vs Sentraa AI matrix</div>
                  </a>
                  <a 
                    href="#faqs" 
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2 rounded-xl hover:bg-[#16192C] transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#FFFFFF]">Frequently Asked Questions</div>
                    <div className="text-[11px] text-[#94A3B8]">Deployment, latency, and policies</div>
                  </a>
                </div>
              )}
            </div>

            {/* About Us Page Link */}
            <button 
              onClick={() => {
                if (onNavigate) onNavigate('about');
                else window.location.hash = 'about';
              }}
              className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/[0.04] cursor-pointer ${
                currentPage === 'about'
                  ? 'text-white bg-white/[0.08] font-semibold text-[#C4B5FD]'
                  : 'text-[#94A3B8] hover:text-[#FFFFFF]'
              }`}
            >
              About Us
            </button>

            {/* Company / Contact */}
            <button 
              onClick={onOpenContact} 
              className="px-3.5 py-2 text-sm font-medium text-[#94A3B8] hover:text-[#FFFFFF] transition-colors rounded-lg hover:bg-white/[0.04] cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#capabilities"
              className="px-4 py-2 text-xs font-semibold text-[#F8FAFC] bg-[#10121F] hover:bg-[#16192C] border border-[#1E2338] hover:border-[#6100FF]/40 rounded-xl transition-all"
            >
              Explore Platform
            </a>

            {/* Primary CTA - Distinctly highlighted */}
            <button
              onClick={onOpenDemo}
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#6100FF] to-[#7B2CBF] hover:from-[#5000D6] hover:to-[#6E2CF4] rounded-xl transition-all shadow-[0_0_20px_rgba(97,0,255,0.4)] hover:shadow-[0_0_28px_rgba(97,0,255,0.6)] flex items-center gap-1.5"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger & Quick CTA */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="min-h-[44px] px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#6100FF] to-[#7B2CBF] hover:from-[#5000D6] hover:to-[#6E2CF4] active:scale-95 rounded-xl sm:hidden flex items-center justify-center transition-all shadow-md shadow-[#6100FF]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6100FF]"
            >
              Book Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2.5 text-[#94A3B8] hover:text-white rounded-xl bg-[#10121F] border border-[#1E2338] hover:border-[#6100FF]/50 active:scale-95 flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6100FF]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer with dynamic safe-height scrolling */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#1E2338] bg-[#0C0E17] px-4 py-5 space-y-4 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)]">
            <div className="space-y-1">
              <div className="px-3.5 py-1 text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                Platform
              </div>
              <a 
                href="#capabilities" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#F8FAFC] hover:bg-[#10121F] active:bg-[#16192C] transition-colors"
              >
                Core Capabilities (Discovery, Policies, Monitoring)
              </a>
              <a 
                href="#simulator" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#F8FAFC] hover:bg-[#10121F] active:bg-[#16192C] transition-colors"
              >
                Live Bouncer Simulator
              </a>

              <div className="px-3.5 pt-3 pb-1 text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                Overview
              </div>
              <a 
                href="#problem" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#F8FAFC] hover:bg-[#10121F] active:bg-[#16192C] transition-colors"
              >
                The AI Risk Paradox
              </a>
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#F8FAFC] hover:bg-[#10121F] active:bg-[#16192C] transition-colors"
              >
                How It Works (3 Steps)
              </a>
              <a 
                href="#use-cases" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#F8FAFC] hover:bg-[#10121F] active:bg-[#16192C] transition-colors"
              >
                Who Benefits &amp; Use Cases
              </a>
              <a 
                href="#comparison" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#F8FAFC] hover:bg-[#10121F] active:bg-[#16192C] transition-colors"
              >
                Compare Capabilities
              </a>
              <a 
                href="#faqs" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#F8FAFC] hover:bg-[#10121F] active:bg-[#16192C] transition-colors"
              >
                FAQs
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate('about');
                  else window.location.hash = 'about';
                }}
                className="w-full text-left flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm text-[#C4B5FD] font-semibold hover:bg-[#10121F] active:bg-[#16192C] transition-colors cursor-pointer"
              >
                About Us
              </button>
            </div>

            <div className="pt-4 border-t border-[#1E2338] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full min-h-[44px] py-3 text-xs font-semibold text-center text-[#F8FAFC] bg-[#10121F] hover:bg-[#16192C] border border-[#1E2338] rounded-xl active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full min-h-[44px] py-3 text-xs font-bold text-center text-white bg-[#6100FF] hover:bg-[#5000D6] rounded-xl shadow-md shadow-[#6100FF]/20 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
              >
                Book a Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
