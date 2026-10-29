import React from 'react';
import { Award, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export const EcosystemBar: React.FC = () => {
  const PARTNER_ICONS = [
    {
      name: 'OpenAI',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white shrink-0">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.487a4.485 4.485 0 0 1 2.365-1.98v.167v5.524a.795.795 0 0 0 .393.682l5.834 3.368-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.487zm16.597 3.855l-5.833-3.369L15.124 7.8a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.82V7.493a.08.08 0 0 1 .034-.067l4.834-2.787a4.5 4.5 0 0 1 6.669 4.693v.01zM8.307 13.78l-2.02-1.163a.08.08 0 0 1-.038-.057V6.974a4.5 4.5 0 0 1 7.37-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681v6.74zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.607 1.5-2.602-1.5z" />
        </svg>
      )
    },
    {
      name: 'Anthropic Claude',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0">
          <path
            fill="#D97757"
            d="M4.714 15.956l4.718-2.647.079-.231a1.2 1.2 0 00-.391-1.332L6.37 9.539a2.3 2.3 0 011.054-3.037l4.02-2.186a2.3 2.3 0 013.167 1.054l2.185 4.02a2.3 2.3 0 01-1.054 3.167l-2.76 1.499.078.231 4.718 2.647a2.3 2.3 0 011.054 3.167l-2.186 4.02a2.3 2.3 0 01-3.167 1.054l-4.02-2.185a2.3 2.3 0 01-1.054-3.167l1.353-2.486-4.718-2.647a2.3 2.3 0 01-1.054-3.167z"
          />
        </svg>
      )
    },
    {
      name: 'Slack',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523 2.52 2.52 0 0 1 2.52-2.52h2.52v2.52c0 1.394-1.127 2.523-2.52 2.523z" fill="#E01E5A"/>
          <path d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.523 2.52 2.52 0 0 1 2.52 2.523v6.313A2.528 2.528 0 0 1 8.834 24a2.52 2.52 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
          <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.52 2.52 0 0 1 8.834 0c1.394 0 2.521 1.127 2.521 2.522v2.52H8.834z" fill="#36C5F0"/>
          <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.52 2.52 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.52 2.52 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
          <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522 2.521 2.52 2.52 0 0 1-2.522 2.521h-2.522V11.355c0-1.394 1.128-2.521 2.522-2.521z" fill="#2EB67D"/>
          <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.52 2.52 0 0 1-2.52-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.52 2.52 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
          <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.52 2.52 0 0 1 15.165 24c-1.395 0-2.523-1.128-2.523-2.522v-2.522h2.523z" fill="#ECB22E"/>
          <path d="M15.165 17.688a2.527 2.527 0 0 1-2.523-2.523 2.52 2.52 0 0 1 2.523-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.52 2.52 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
        </svg>
      )
    },
    {
      name: 'Google Cloud',
      icon: (
        <svg viewBox="0 -25 256 256" fill="none" className="w-6 h-6 shrink-0">
          <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"/>
          <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"/>
          <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"/>
          <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"/>
        </svg>
      )
    },
    {
      name: 'LangChain',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0">
          <path
            fill="#10B981"
            d="M7.53 15.975a7.53 7.53 0 0 0 2.206-5.325A7.54 7.54 0 0 0 7.53 5.325L2.205 0A7.54 7.54 0 0 0 0 5.325a7.54 7.54 0 0 0 2.205 5.325zm11.144.493a7.54 7.54 0 0 0-5.325-2.206 7.54 7.54 0 0 0-5.325 2.206l5.325 5.325a7.54 7.54 0 0 0 5.325 2.205A7.54 7.54 0 0 0 24 21.793zM2.219 21.78a7.54 7.54 0 0 0 5.325 2.205v-7.53H.014a7.54 7.54 0 0 0 2.205 5.325M20.73 8.595a7.53 7.53 0 0 0-5.327-2.206 7.53 7.53 0 0 0-5.325 2.207l5.325 5.325z"
          />
        </svg>
      )
    },
    {
      name: 'AWS Bedrock',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0">
          <path
            fill="#FF9900"
            d="M13.284 14.992h-1.39l-.66-2.17h2.71zm-7.794 6.326L2.366 18.2l1.96-1.18-.74-.59-2.58 1.56L0 16.59l4.57-2.77.38.67-3.79 2.29 1.52.91 2.87-1.74.74.59-2.88 1.74 1.52.92 3.65-2.21.38.68zm14.398-3.03l-3.66 2.21-1.52-.91-2.87 1.74-.74-.6 2.88-1.73-1.52-.92-3.65 2.21-.38-.68 3.79-2.29-1.52-.91-2.87 1.74-.74-.6 2.88-1.73-1.52-.92L9.12 14.8l-.38-.67 4.57-2.77 4.57 2.77-.38.67-3.79-2.29-1.52.91 2.87 1.74.74.6-2.88 1.73 1.52.92 3.66-2.21.38.68zm1.09-8.49L12 3.01 2.63 9.8l.68.73L12 4.19l8.69 6.34z"
          />
        </svg>
      )
    },
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

        {/* Integration Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-10">
          {PARTNER_ICONS.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-violet-500/50 hover:bg-white/[0.08] card-hover-lift shadow-md group cursor-default"
            >
              <div className="w-6 h-6 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Regulatory & Security Framework Bar */}
        <div className="pt-8 border-t border-white/[0.04] grid grid-cols-2 md:grid-cols-5 gap-4">
          {COMPLIANCE_BADGES.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2.5 justify-center md:justify-start p-2 rounded-xl transition-all hover:bg-white/[0.03] group">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 transition-transform group-hover:scale-110" />
              <div>
                <div className="text-xs font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">{badge.title}</div>
                <div className="text-[10px] text-slate-400 font-mono">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
