import React, { useState } from 'react';
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

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [riskModalOpen, setRiskModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080B14] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#8B5CF6]/30 selection:text-[#C4B5FD]">
      {/* 0. Clean Navigation Bar */}
      <Navbar 
        onOpenDemo={() => setDemoModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Flow: The 7 Recommended Homepage Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section: One headline, 2 short sentences, 2 CTAs, 1 readable dashboard preview with 3 annotations */}
        <Hero 
          onOpenDemo={() => setDemoModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* 2. The Problem You Solve: By the Time Anyone Notices, the Agent Already Decided */}
        <DecisionParadox />

        {/* 3. How the Platform Works: 3 Steps (Discover AI activity → Apply policies → Monitor and respond) */}
        <WorkProcess />

        {/* 4. Three Key Capabilities: AI discovery, policy enforcement, continuous monitoring */}
        <ServicesSection />

        {/* 5. Use Cases and Trust: Who benefits, supported AI integrations & verifiable compliance frameworks */}
        <BenefitsSection />

        {/* Interactive Live Bouncer: Experience real-time sub-15ms pre-execution evaluation */}
        <section className="py-16 bg-[#080B14] border-b border-[#263044]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LiveAgentBouncer />
          </div>
        </section>

        {/* Platform Capability Comparison: Context vs Intent (Expandable for technical depth) */}
        <ContextVsIntent />

        {/* 6. FAQs: Simple accordion with clear questions and concise answers */}
        <FaqSection />

        {/* 7. Final Call to Action: Repeat the demo CTA & risk assessment */}
        <CallToAction 
          onOpenDemo={() => setDemoModalOpen(true)}
          onOpenRiskAssessment={() => setRiskModalOpen(true)}
        />
      </main>

      {/* Compact Categorized Footer */}
      <Footer />

      {/* Modals */}
      <DemoModal 
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <ContactModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <RiskModal 
        isOpen={riskModalOpen}
        onClose={() => setRiskModalOpen(false)}
        onOpenDemo={() => {
          setRiskModalOpen(false);
          setDemoModalOpen(true);
        }}
      />
    </div>
  );
}

export default App;
