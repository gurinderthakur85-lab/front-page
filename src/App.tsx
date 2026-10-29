import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DecisionParadox } from './components/DecisionParadox';
import { WorkProcess } from './components/WorkProcess';
import { ServicesSection } from './components/ServicesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { LiveAgentBouncer } from './components/LiveAgentBouncer';
import { ContextVsIntent } from './components/ContextVsIntent';
import { FaqSection } from './components/FaqSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ContactModal } from './components/ContactModal';
import { RiskModal } from './components/RiskModal';
import { AboutPage } from './components/AboutPage';
import { LegalModal, type LegalDocType } from './components/LegalModal';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [riskModalOpen, setRiskModalOpen] = useState(false);
  const [legalModalDoc, setLegalModalDoc] = useState<LegalDocType | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy' || hash === '#privacy-policy') {
        setLegalModalDoc('privacy');
      } else if (hash === '#terms' || hash === '#terms-and-conditions' || hash === '#terms-of-service') {
        setLegalModalDoc('terms');
      } else if (hash === '#about' || hash === '#about-us') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '' || hash === '#' || hash.startsWith('#capabilities') || hash.startsWith('#simulator') || hash.startsWith('#problem') || hash.startsWith('#how-it-works') || hash.startsWith('#use-cases') || hash.startsWith('#comparison') || hash.startsWith('#faqs') || hash.startsWith('#contact')) {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: 'home' | 'about') => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = 'about';
    } else {
      window.location.hash = '';
      if (window.location.pathname) {
        history.pushState(null, '', window.location.pathname);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseLegalModal = () => {
    setLegalModalDoc(null);
    if (window.location.hash.startsWith('#privacy') || window.location.hash.startsWith('#terms')) {
      history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#8B5CF6]/30 selection:text-[#C4B5FD]">
      {/* 0. Clean Navigation Bar */}
      <Navbar 
        onOpenDemo={() => setDemoModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Main Flow: About Page OR Homepage Sections */}
      <main className="flex-grow">
        {currentPage === 'about' ? (
          <AboutPage 
            onOpenDemo={() => setDemoModalOpen(true)}
            onOpenContact={() => setContactModalOpen(true)}
            onNavigateHome={() => navigateTo('home')}
          />
        ) : (
          <>
            {/* 1. Hero Section */}
            <Hero 
              onOpenDemo={() => setDemoModalOpen(true)}
              onOpenContact={() => setContactModalOpen(true)}
            />

            {/* 2. The Problem You Solve */}
            <DecisionParadox />

            {/* 3. How the Platform Works */}
            <WorkProcess />

            {/* 4. Three Key Capabilities */}
            <ServicesSection />

            {/* 5. Use Cases and Trust */}
            <BenefitsSection />

            {/* Interactive Live Bouncer */}
            <section className="py-16 bg-[#080B14] border-b border-[#263044]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <LiveAgentBouncer />
              </div>
            </section>

            {/* Platform Capability Comparison: Context vs Intent */}
            <ContextVsIntent />

            {/* 6. FAQs */}
            <FaqSection />

            {/* 7. Final Call to Action */}
            <CallToAction 
              onOpenDemo={() => setDemoModalOpen(true)}
              onOpenRiskAssessment={() => setRiskModalOpen(true)}
            />
          </>
        )}
      </main>

      {/* Compact Categorized Footer */}
      <Footer 
        onNavigate={navigateTo}
        onOpenLegal={(doc) => setLegalModalDoc(doc)}
      />

      {/* Modals */}
      <DemoModal 
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onOpenLegal={(doc) => setLegalModalDoc(doc)}
      />

      <ContactModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onOpenLegal={(doc) => setLegalModalDoc(doc)}
      />

      <RiskModal 
        isOpen={riskModalOpen}
        onClose={() => setRiskModalOpen(false)}
        onOpenDemo={() => {
          setRiskModalOpen(false);
          setDemoModalOpen(true);
        }}
      />

      {/* Dedicated Legal Documentation Modal */}
      <LegalModal
        isOpen={legalModalDoc !== null}
        documentType={legalModalDoc || 'privacy'}
        onClose={handleCloseLegalModal}
        onSelectDoc={(doc) => setLegalModalDoc(doc)}
      />
    </div>
  );
}

export default App;
