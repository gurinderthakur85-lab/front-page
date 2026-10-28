import React from 'react';
import { 
  Lock, 
  Scale, 
  Cpu, 
  CheckCircle2, 
  TrendingUp, 
  Users
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const BENEFICIARIES = [
    {
      role: 'For Security & SecOps Teams',
      heading: 'Prevent data exfiltration and rogue agent actions',
      description: 'Intercept tool calls before execution. Enforce zero-trust boundaries on agents with the same rigor you apply to human staff.',
      outcomes: [
        'Real-time prompt injection blocking',
        'Automatic PII & API key redaction',
        'Blast-radius containment for compromised agents'
      ],
      icon: <Lock className="w-5 h-5 text-[#8B5CF6]" />
    },
    {
      role: 'For Compliance & Risk Officers',
      heading: 'Continuous audit-ready evidence, not manual checklists',
      description: 'Replace stressful annual audits with live, SHA-256 hashed evidence mapped continuously against global AI and privacy frameworks.',
      outcomes: [
        'Automated GDPR, DPDP & HIPAA mapping',
        'NIST AI RMF 1.0 continuous alignment',
        'One-click verifiable compliance exports'
      ],
      icon: <Scale className="w-5 h-5 text-[#34D399]" />
    },
    {
      role: 'For Business & Executive Leaders',
      heading: 'Deploy AI agents with confidence and accountability',
      description: 'Safeguard your corporate reputation and financial bottom line. Keep autonomous workflows operating strictly within defined budgets and legal limits.',
      outcomes: [
        'Hard spend caps on financial transactions',
        'Zero surprise cloud or API overages',
        'Full executive visibility across all AI projects'
      ],
      icon: <TrendingUp className="w-5 h-5 text-[#FBBF24]" />
    },
    {
      role: 'For AI Engineers & Developers',
      heading: 'Ship multi-agent swarms faster without fear',
      description: 'Focus on model performance and business logic. Let Sentra AI handle safety boundaries, memory isolation, and regulatory guardrails in sub-15ms.',
      outcomes: [
        'SDK drops in with simple 2-line initialization',
        'Compatible with LangChain, Bedrock, CrewAI, and MCP',
        'Sub-15ms fail-closed execution performance'
      ],
      icon: <Cpu className="w-5 h-5 text-[#8B5CF6]" />
    }
  ];

  const INTEGRATIONS = [
    { src: '/Lqs3WnRB22OoezY17CRzN3VOdk.png', name: 'OpenAI' },
    { src: '/OgOQobKmM2GKlP9KbSVZFJ5AveE.png', name: 'Anthropic Claude' },
    { src: '/b5dX62MaefGlJTmrtX1Oxbvqo.png', name: 'Slack' },
    { src: '/70MAwqVZRjuLNQfixOzXbsR4Y.png', name: 'Google Cloud' },
    { src: '/o79BI1ynIxBeRg4bHE2b5d7B7Q0.png', name: 'LangChain' },
    { src: '/2rhveLndDrPjbvTDQu8QwLZkIyc.png', name: 'AWS Bedrock' },
  ];

  const COMPLIANCE_FRAMEWORKS = [
    { name: 'GDPR Article 22', status: 'Continuous Control Active', badge: 'Certified' },
    { name: 'India DPDP 2023', status: 'Automated PII DLP Redaction', badge: 'Compliant' },
    { name: 'HIPAA Safe Harbor', status: 'Cryptographic Audit Trail', badge: 'Audit Ready' },
    { name: 'PCI-DSS v4.0', status: 'Token & Secret Redaction', badge: 'Isolated' },
    { name: 'NIST AI RMF 1.0', status: 'Govern & Measure Controls', badge: 'Mapped' },
  ];

  return (
    <section id="use-cases" className="py-20 lg:py-28 bg-[#0D1220] border-b border-[#263044] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Who Benefits &amp; Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
            Built for security, compliance, and AI innovators
          </h2>

          <p className="text-base text-[#A7B0C0] leading-relaxed max-w-2xl mx-auto">
            Sentra AI bridges the gap between fast-moving AI engineering teams and risk-conscious enterprise leadership.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {BENEFICIARIES.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#111827] border border-[#263044] hover:border-[#8B5CF6]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6] font-semibold">
                    {item.role}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#080B14] border border-[#263044]">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 leading-snug">
                  {item.heading}
                </h3>

                <p className="text-xs text-[#A7B0C0] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#263044] space-y-2">
                {item.outcomes.map((out, oIdx) => (
                  <div key={oIdx} className="flex items-center gap-2 text-xs text-[#F8FAFC]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Supported AI Ecosystem & Platforms */}
        <div className="rounded-2xl bg-[#111827] border border-[#263044] p-6 lg:p-8">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A7B0C0]">
              Protecting and governing agents across your current technology stack
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {INTEGRATIONS.map((icon, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center gap-2.5 px-3 py-3 rounded-xl bg-[#080B14] border border-[#263044] hover:border-[#8B5CF6]/40 transition-colors"
              >
                <img 
                  src={icon.src} 
                  alt={icon.name} 
                  className="w-5 h-5 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-xs font-medium text-[#F8FAFC]">{icon.name}</span>
              </div>
            ))}
          </div>

          {/* Compliance & Regulatory Verifiable Evidence */}
          <div className="pt-6 border-t border-[#263044]">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A7B0C0] mb-4 text-center">
              Verifiable Regulatory Compliance Evidence
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {COMPLIANCE_FRAMEWORKS.map((fw, fIdx) => (
                <div key={fIdx} className="p-3 rounded-xl bg-[#080B14] border border-[#263044] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#F8FAFC]">{fw.name}</div>
                    <div className="text-[10px] text-[#A7B0C0]">{fw.status}</div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/20">
                    {fw.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
