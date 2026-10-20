import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemBar } from './components/EcosystemBar';
import { ServicesSection } from './components/ServicesSection';
import { TransformationSection } from './components/TransformationSection';
import { WorkProcess } from './components/WorkProcess';
import { BenefitsSection } from './components/BenefitsSection';
import { DecisionParadox } from './components/DecisionParadox';
import { ContextVsIntent } from './components/ContextVsIntent';
import { PolicyPlayground } from './components/PolicyPlayground';
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
    <div className="min-h-screen bg-[#06080F] text-slate-100 flex flex-col font-sans selection:bg-violet-600/30 selection:text-violet-200">
      {/* Navigation Bar */}
      <Navbar 
        onOpenDemo={() => setDemoModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onOpenDemo={() => setDemoModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* Integration Ecosystem & Regulatory Frameworks */}
        <EcosystemBar />

        {/* Services / Core Solutions */}
        <ServicesSection />

        {/* Built for Real Business Transformation (4 Steps + Code) */}
        <TransformationSection />

        {/* Work Process (6 Phases to Secure AI Empire) */}
        <WorkProcess />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* The Threat Paradox: By the Time Anyone Notices, the Agent Already Decided */}
        <DecisionParadox />

        {/* Context Answers What, Intent Answers Why */}
        <ContextVsIntent />

        {/* Interactive Live Policy Studio / Playground */}
        <PolicyPlayground />

        {/* Official FAQs */}
        <FaqSection />

        {/* High-Impact CTA Banner */}
        <CallToAction 
          onOpenDemo={() => setDemoModalOpen(true)}
          onOpenRiskAssessment={() => setRiskModalOpen(true)}
        />
      </main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Interactive Modals */}
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
