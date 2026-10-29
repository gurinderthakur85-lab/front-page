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
    <header className="sticky top-0 z-50 w-full">
      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-200 ${
          scrolled 
            ? 'bg-[#080B14]/95 backdrop-blur-md border-b border-[#263044] shadow-lg shadow-black/40' 
            : 'bg-[#080B14]/80 backdrop-blur-sm border-b border-[#263044]/60'
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
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-[#F8FAFC]">
                  Sentraa<span className="text-[#8B5CF6]"> AI</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#A7B0C0] font-mono tracking-wider uppercase -mt-0.5 hidden sm:block">
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
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'platform' ? 'rotate-180 text-[#8B5CF6]' : 'text-[#A7B0C0]'}`} />
              </button>

              {activeDropdown === 'platform' && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-[#111827] border border-[#263044] shadow-2xl p-2.5 space-y-1">
                  <a 
                    href="#capabilities" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#172033] transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/20 group-hover:border-[#8B5CF6]/50">
                      <Eye className="w-4 h-4 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F8FAFC] group-hover:text-[#C4B5FD]">AI Discovery</div>
                      <div className="text-[11px] text-[#A7B0C0]">Find sanctioned & shadow AI agents</div>
                    </div>
                  </a>

                  <a 
                    href="#capabilities" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#172033] transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/20 group-hover:border-[#8B5CF6]/50">
                      <Sliders className="w-4 h-4 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F8FAFC] group-hover:text-[#C4B5FD]">Policy Enforcement</div>
                      <div className="text-[11px] text-[#A7B0C0]">Pre-execution controls & guardrails</div>
                    </div>
                  </a>

                  <a 
                    href="#capabilities" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#172033] transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/20 group-hover:border-[#8B5CF6]/50">
                      <ShieldCheck className="w-4 h-4 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F8FAFC] group-hover:text-[#C4B5FD]">Continuous Monitoring</div>
                      <div className="text-[11px] text-[#A7B0C0]">Automated compliance & audit logs</div>
                    </div>
                  </a>

                  <a 
                    href="#simulator" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#172033] transition-colors group border-t border-[#263044]/50"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                      <Zap className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F8FAFC] flex items-center gap-1.5">
                        Live Bouncer Simulator
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono">Interactive</span>
                      </div>
                      <div className="text-[11px] text-[#A7B0C0]">Test real-time action interception</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* How It Works */}
            <a 
              href="#how-it-works" 
              className="px-3.5 py-2 text-sm font-medium text-[#A7B0C0] hover:text-[#F8FAFC] transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              How It Works
            </a>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                className="px-3.5 py-2 text-sm font-medium text-[#A7B0C0] hover:text-[#F8FAFC] transition-colors rounded-lg flex items-center gap-1.5 hover:bg-white/[0.04]"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180 text-[#8B5CF6]' : 'text-[#A7B0C0]'}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#111827] border border-[#263044] shadow-2xl p-2.5 space-y-1">
                  <a 
                    href="#use-cases" 
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2 rounded-xl hover:bg-[#172033] transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#F8FAFC]">For Security Teams</div>
                    <div className="text-[11px] text-[#A7B0C0]">Stop data exfiltration and prompt injection</div>
                  </a>
                  <a 
                    href="#use-cases" 
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2 rounded-xl hover:bg-[#172033] transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#F8FAFC]">For Compliance &amp; Risk</div>
                    <div className="text-[11px] text-[#A7B0C0]">Continuous GDPR, DPDP, HIPAA evidence</div>
                  </a>
                  <a 
                    href="#use-cases" 
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2 rounded-xl hover:bg-[#172033] transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#F8FAFC]">For AI Engineers</div>
                    <div className="text-[11px] text-[#A7B0C0]">Ship multi-agent swarms with guardrails</div>
                  </a>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                className="px-3.5 py-2 text-sm font-medium text-[#A7B0C0] hover:text-[#F8FAFC] transition-colors rounded-lg flex items-center gap-1.5 hover:bg-white/[0.04]"
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'resources' ? 'rotate-180 text-[#8B5CF6]' : 'text-[#A7B0C0]'}`} />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#111827] border border-[#263044] shadow-2xl p-2.5 space-y-1">
                  <a 
                    href="#comparison" 
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2 rounded-xl hover:bg-[#172033] transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#F8FAFC]">Compare Capabilities</div>
                    <div className="text-[11px] text-[#A7B0C0]">DSPM vs IAM vs Sentraa AI matrix</div>
                  </a>
                  <a 
                    href="#faqs" 
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2 rounded-xl hover:bg-[#172033] transition-colors"
                  >
                    <div className="text-xs font-semibold text-[#F8FAFC]">Frequently Asked Questions</div>
                    <div className="text-[11px] text-[#A7B0C0]">Deployment, latency, and policies</div>
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
                  : 'text-[#A7B0C0] hover:text-[#F8FAFC]'
              }`}
            >
              About Us
            </button>

            {/* Company / Contact */}
            <button 
              onClick={onOpenContact} 
              className="px-3.5 py-2 text-sm font-medium text-[#A7B0C0] hover:text-[#F8FAFC] transition-colors rounded-lg hover:bg-white/[0.04] cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#capabilities"
              className="px-4 py-2 text-xs font-semibold text-[#F8FAFC] bg-[#111827] hover:bg-[#172033] border border-[#263044] rounded-xl transition-all"
            >
              Explore Platform
            </a>

            {/* Primary CTA - Distinctly highlighted */}
            <button
              onClick={onOpenDemo}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-xl transition-all shadow-md shadow-[#8B5CF6]/25 hover:shadow-lg hover:shadow-[#8B5CF6]/35 flex items-center gap-1.5"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#8B5CF6] rounded-lg sm:hidden"
            >
              Book Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A7B0C0] hover:text-white rounded-lg bg-[#111827] border border-[#263044]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#263044] bg-[#0D1220] px-4 py-6 space-y-4">
            <div className="space-y-1">
              <div className="px-3 py-1 text-[11px] font-mono text-[#A7B0C0] uppercase tracking-wider">
                Platform
              </div>
              <a 
                href="#capabilities" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-[#F8FAFC] hover:bg-[#111827]"
              >
                Core Capabilities (Discovery, Policies, Monitoring)
              </a>
              <a 
                href="#simulator" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-[#F8FAFC] hover:bg-[#111827]"
              >
                Live Bouncer Simulator
              </a>

              <div className="px-3 pt-3 pb-1 text-[11px] font-mono text-[#A7B0C0] uppercase tracking-wider">
                Overview
              </div>
              <a 
                href="#problem" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-[#F8FAFC] hover:bg-[#111827]"
              >
                The AI Risk Paradox
              </a>
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-[#F8FAFC] hover:bg-[#111827]"
              >
                How It Works (3 Steps)
              </a>
              <a 
                href="#use-cases" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-[#F8FAFC] hover:bg-[#111827]"
              >
                Who Benefits &amp; Use Cases
              </a>
              <a 
                href="#comparison" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-[#F8FAFC] hover:bg-[#111827]"
              >
                Compare Capabilities
              </a>
              <a 
                href="#faqs" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-[#F8FAFC] hover:bg-[#111827]"
              >
                FAQs
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate('about');
                  else window.location.hash = 'about';
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#C4B5FD] font-semibold hover:bg-[#111827]"
              >
                About Us
              </button>
            </div>

            <div className="pt-4 border-t border-[#263044] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 text-xs font-semibold text-center text-[#F8FAFC] bg-[#111827] border border-[#263044] rounded-xl"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-2.5 text-xs font-bold text-center text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-xl shadow-md"
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
