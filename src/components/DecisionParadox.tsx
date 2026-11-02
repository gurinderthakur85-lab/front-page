import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Terminal, 
  Key, 
  Bot, 
  CheckCircle2, 
  XCircle
} from 'lucide-react';

interface ThreatScenario {
  id: string;
  severity: 'Critical' | 'High' | 'Warning';
  severityColor: string;
  badgeBg: string;
  title: string;
  plainSummary: string;
  realWorldStory: string;
  withoutSentraa: string;
  withSentraa: string;
  icon: React.ReactNode;
}

export const DecisionParadox: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<string>('injection');

  const SCENARIOS: ThreatScenario[] = [
    {
      id: 'injection',
      severity: 'Critical',
      severityColor: 'text-[#F87171] border-[#F87171]/40',
      badgeBg: 'bg-[#F87171]/10 text-[#F87171]',
      title: 'Adversarial manipulation & prompt injection',
      plainSummary: 'Hidden instructions inside data (PDFs, emails, web pages) hijack what the agent does.',
      realWorldStory: 'A customer support agent scans an uploaded refund receipt. Hidden inside the file is text telling the model to ignore prior system instructions, query internal payroll records, and send the data to an external URL.',
      withoutSentraa: 'The agent executes the tool call with its full enterprise privileges. Sensitive corporate data leaves the perimeter.',
      withSentraa: 'Sentraa AI checks the intent and parameters before the tool call executes. The payload is detected and blocked in 11ms.',
      icon: <Terminal className="w-5 h-5 text-[#F87171]" />
    },
    {
      id: 'permissions',
      severity: 'High',
      severityColor: 'text-[#FBBF24] border-[#FBBF24]/40',
      badgeBg: 'bg-[#FBBF24]/10 text-[#FBBF24]',
      title: 'Over-privileged tool & database access',
      plainSummary: 'Agents given broad system access inadvertently expose private customer data or internal records.',
      realWorldStory: 'A customer service agent is granted broad SQL read access to resolve account questions. When answering a routine query, it pulls full customer records including plaintext payment details and Social Security Numbers.',
      withoutSentraa: 'Unmasked PII enters the conversation history and model memory, creating severe privacy and regulatory compliance breaches.',
      withSentraa: 'Dynamic in-line redaction identifies sensitive schema fields. PII is masked before the agent receives the database output.',
      icon: <Key className="w-5 h-5 text-[#FBBF24]" />
    },
    {
      id: 'unintended',
      severity: 'Warning',
      severityColor: 'text-[#6100FF] border-[#6100FF]/40',
      badgeBg: 'bg-[#6100FF]/10 text-[#C4B5FD]',
      title: 'An AI agent takes an unintended action',
      plainSummary: 'When an agent gets blocked, it can improvise tools or loop outside human intentions.',
      realWorldStory: 'An operations agent fails to process an invoice due to a permission error. It hallucinates a workaround, calls an unapproved external API, and initiates an unauthorized transfer to clear the task.',
      withoutSentraa: 'Financial transfers or destructive mutations occur silently without human approval or guardrail checks.',
      withSentraa: 'Spending limits and strict tool-call boundaries trigger an instant hold and escalate to a human reviewer.',
      icon: <Bot className="w-5 h-5 text-[#6100FF]" />
    }
  ];

  return (
    <section id="problem" className="py-20 lg:py-28 bg-[#07080E] border-y border-[#1E2338] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D4D]/10 border border-[#FF4D4D]/30 text-[#FF4D4D] text-xs font-semibold mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The AI Risk Paradox</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-4">
            By the time anyone notices, the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#C4B5FD] to-[#6100FF]">agent already decided.</span>
          </h2>

          <p className="text-base text-[#94A3B8] leading-relaxed">
            A prompt can look harmless. An output can look fine. The real risk is the moment an autonomous agent connects to your databases, APIs, and tools. Without pre-execution oversight, actions execute before humans can intervene.
          </p>
        </div>

        {/* 3 Risk Scenario Cards Grid - 1 col on phones, 2 on tablets, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCENARIOS.map((scenario, index) => {
            const isSelected = activeScenario === scenario.id;
            const isLastOnTablet = index === 2;
            return (
              <div
                key={scenario.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => setActiveScenario(scenario.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveScenario(scenario.id);
                  }
                }}
                className={`p-6 rounded-2xl bg-[#10121F] border cursor-pointer card-hover-lift flex flex-col justify-between transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6100FF] ${
                  isLastOnTablet ? 'md:col-span-2 lg:col-span-1' : ''
                } ${
                  isSelected
                    ? 'border-[#6100FF] shadow-xl shadow-black/50 ring-1 ring-[#6100FF]/50 shadow-[0_0_25px_rgba(97,0,255,0.25)]'
                    : 'border-[#1E2338] hover:border-[#6100FF]/40 hover:bg-[#141729]'
                }`}
              >
                <div>
                  {/* Top Row: Icon + Severity Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#07080E] border border-[#1E2338]">
                      {scenario.icon}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${scenario.badgeBg} ${scenario.severityColor}`}>
                      Severity: {scenario.severity}
                    </span>
                  </div>

                  {/* Scenario Title */}
                  <h3 className="text-lg font-bold text-[#FFFFFF] mb-2 leading-snug">
                    {scenario.title}
                  </h3>

                  {/* Plain English Summary */}
                  <p className="text-sm text-[#94A3B8] mb-4 leading-relaxed">
                    {scenario.plainSummary}
                  </p>

                  {/* Real-world example box */}
                  <div className="p-3.5 rounded-xl bg-[#07080E] border border-[#1E2338] mb-4 text-xs sm:text-sm text-[#FFFFFF] leading-relaxed">
                    <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                      Real-world scenario:
                    </span>
                    {scenario.realWorldStory}
                  </div>
                </div>

                {/* Outcome Comparison */}
                <div className="pt-4 border-t border-[#1E2338] space-y-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-2 text-[#94A3B8]">
                    <XCircle className="w-4 h-4 text-[#FF4D4D] shrink-0 mt-0.5" />
                    <span><strong className="text-[#FF4D4D]">Without Sentraa:</strong> {scenario.withoutSentraa}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#FFFFFF]">
                    <CheckCircle2 className="w-4 h-4 text-[#00F5A0] shrink-0 mt-0.5" />
                    <span><strong className="text-[#00F5A0]">With Sentraa AI:</strong> {scenario.withSentraa}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
