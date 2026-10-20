import React from 'react';
import { Award, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export const EcosystemBar: React.FC = () => {
  const PARTNER_ICONS = [
    { src: '/Lqs3WnRB22OoezY17CRzN3VOdk.png', name: 'OpenAI' },
    { src: '/OgOQobKmM2GKlP9KbSVZFJ5AveE.png', name: 'Anthropic Claude' },
    { src: '/b5dX62MaefGlJTmrtX1Oxbvqo.png', name: 'Slack' },
    { src: '/70MAwqVZRjuLNQfixOzXbsR4Y.png', name: 'Google Cloud' },
    { src: '/o79BI1ynIxBeRg4bHE2b5d7B7Q0.png', name: 'LangChain' },
    { src: '/2rhveLndDrPjbvTDQu8QwLZkIyc.png', name: 'AWS Bedrock' },
  ];

  const COMPLIANCE_BADGES = [
    { title: 'GDPR', desc: 'Continuous Compliance' },
    { title: 'DPDP', desc: 'Real-time PII DLP' },
    { title: 'HIPAA', desc: 'Cryptographic Audit Trail' },
    { title: 'PCI-DSS', desc: 'Token & Secret Redaction' },
    { title: 'NIST AI RMF', desc: 'Continuous Risk Mapping' },
  ];

  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#070912]/80 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Governing &amp; Protecting Agents Across Every Major AI Stack
          </span>
        </div>

        {/* Integration Logos from sentraatech.com */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mb-10 opacity-80 hover:opacity-100 transition-opacity">
          {PARTNER_ICONS.map((icon, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/40 hover:bg-white/[0.05] transition-all"
            >
              <img 
                src={icon.src} 
                alt={icon.name} 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-xs font-semibold text-slate-200">{icon.name}</span>
            </div>
          ))}
        </div>

        {/* Regulatory & Security Framework Bar */}
        <div className="pt-8 border-t border-white/[0.04] grid grid-cols-2 md:grid-cols-5 gap-4">
          {COMPLIANCE_BADGES.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2.5 justify-center md:justify-start">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white tracking-tight">{badge.title}</div>
                <div className="text-[10px] text-slate-400 font-mono">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
