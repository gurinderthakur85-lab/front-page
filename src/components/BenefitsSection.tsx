import React from 'react';
import { 
  Eye, 
  ShieldAlert, 
  Clock, 
  Coins, 
  BarChart3, 
  TrendingUp, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const BENEFITS = [
    {
      title: 'Complete AI Visibility',
      description: 'Get a real-time, centralized view of every AI tool, agent, and model your organization is using, including identifying shadow AI that your team did not know existed.',
      icon: <Eye className="w-6 h-6 text-indigo-400" />,
      tag: 'Discovery & Inventory'
    },
    {
      title: 'Proactive Protection Against Risk',
      description: 'Sentraa AI can identify and block the execution of high-risk AI actions before they happen by monitoring for policy violations, data exposure, and unauthorized actions in real-time.',
      icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
      tag: 'Pre-Execution Gate'
    },
    {
      title: 'Continuous Monitoring 24/7',
      description: 'Our governance engine continuously monitors each AI system so that no high-risk action can occur, even during non-business hours.',
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      tag: 'Always-On Defense'
    },
    {
      title: 'Reduced Costs of Compliance',
      description: 'Automating evidence collection and audit reporting across multiple frameworks provides the ability to save time and money while remaining compliant with regulations.',
      icon: <Coins className="w-6 h-6 text-emerald-400" />,
      tag: 'Automated Evidence'
    },
    {
      title: 'Using Data to Understand Risk',
      description: 'Use timely risk ratings, historical trend analysis, and anomaly detection to enhance your ability to view and refine AI governance policy.',
      icon: <BarChart3 className="w-6 h-6 text-violet-400" />,
      tag: 'Risk Intelligence'
    },
    {
      title: 'Grows with your AI footprint',
      description: 'The average growth of Sentraa AI will continue to rise. The platform scales effortlessly as your organization deploys additional agents, frameworks, and cross-departmental teams.',
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      tag: 'Enterprise Scalability'
    }
  ];

  return (
    <section id="benefits" className="py-24 relative bg-[#06080F] border-b border-white/[0.06] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Benefits
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Solutions for AI Governance That Help You Protect Your Business at Scale
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            We monitor, track and govern all AI systems across your entire organization to ensure you are compliant, safe and in control.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/40 hover:bg-[#0C1022] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400 font-bold">
                    {b.tag}
                  </span>
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform">
                    {b.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {b.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Enterprise Proven</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
