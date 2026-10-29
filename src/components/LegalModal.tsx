import React, { useEffect, useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  Lock, 
  Mail, 
  Building, 
  Scale, 
  Calendar, 
  Check, 
  Copy, 
  Printer, 
  ExternalLink 
} from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  documentType: LegalDocType;
  onClose: () => void;
  onSelectDoc?: (doc: LegalDocType) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  documentType,
  onClose,
  onSelectDoc
}) => {
  const [activeTab, setActiveTab] = useState<LegalDocType>(documentType);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveTab(documentType);
  }, [documentType]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleTabSwitch = (doc: LegalDocType) => {
    setActiveTab(doc);
    if (onSelectDoc) onSelectDoc(doc);
  };

  const handleCopy = () => {
    const content = activeTab === 'privacy' ? privacyText : termsText;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-[#0D1220] border border-[#263044] shadow-2xl flex flex-col overflow-hidden text-[#F8FAFC]">
        {/* Top Header Bar */}
        <div className="p-4 sm:p-6 border-b border-[#263044] bg-[#111827] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/30 text-[10px] font-mono uppercase font-bold flex items-center gap-1">
                <Scale className="w-3 h-3 text-[#8B5CF6]" />
                LEGAL DOCUMENTATION
              </span>
              <span className="text-xs text-[#A7B0C0] font-mono flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Last updated: 13 September 2026
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC]">
              {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
            </h2>
            <p className="text-xs text-[#A7B0C0] mt-0.5">
              Sentraa AI Tech Pvt. Ltd. &bull; sentraatech.com
            </p>
          </div>

          {/* Action buttons & Close */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handleCopy}
              title="Copy Document Text"
              className="p-2 rounded-xl bg-[#080B14] hover:bg-[#172033] border border-[#263044] text-[#A7B0C0] hover:text-[#F8FAFC] text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-[#34D399]" /> : <Copy className="w-4 h-4" />}
              <span className="hidden md:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handlePrint}
              title="Print Document"
              className="p-2 rounded-xl bg-[#080B14] hover:bg-[#172033] border border-[#263044] text-[#A7B0C0] hover:text-[#F8FAFC] text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden md:inline">Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.04] text-[#A7B0C0] hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="px-4 sm:px-6 pt-3 pb-2 bg-[#080B14] border-b border-[#263044] flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleTabSwitch('privacy')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-[#111827] text-[#C4B5FD] border border-[#8B5CF6]/60 shadow-lg shadow-[#8B5CF6]/15'
                : 'text-[#A7B0C0] hover:text-[#F8FAFC] hover:bg-white/[0.02]'
            }`}
          >
            <Lock className="w-4 h-4 text-[#8B5CF6]" />
            <span>Privacy Policy</span>
          </button>
          <button
            onClick={() => handleTabSwitch('terms')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-[#111827] text-[#C4B5FD] border border-[#8B5CF6]/60 shadow-lg shadow-[#8B5CF6]/15'
                : 'text-[#A7B0C0] hover:text-[#F8FAFC] hover:bg-white/[0.02]'
            }`}
          >
            <FileText className="w-4 h-4 text-[#8B5CF6]" />
            <span>Terms and Conditions</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-sm text-[#CBD5E1] leading-relaxed font-sans selection:bg-[#8B5CF6]/30">
          {activeTab === 'privacy' ? (
            <div className="space-y-6">
              {/* Header Box */}
              <div className="p-4 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#A7B0C0]">
                <p className="font-semibold text-[#F8FAFC] text-sm mb-1">
                  Sentraa AI Tech Pvt. Ltd. &mdash; Privacy Policy
                </p>
                <p>
                  <strong>Effective Date:</strong> 13 September 2026 &bull; <strong>Website:</strong> sentraatech.com
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  Sentraa AI Tech Pvt. Ltd. (&ldquo;Sentraa AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website <strong>sentraatech.com</strong> and provides an AI governance and compliance platform (the &ldquo;Service&rdquo;). This Privacy Policy explains what personal data we collect, how we use it, and the rights you have regarding your data. It applies to visitors of our website and to authorised users of our Service (&ldquo;Customers&rdquo; or &ldquo;Users&rdquo;).
                </p>
                <p className="p-3.5 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD] font-medium text-xs">
                  By using our website or Service, you agree to the collection and use of information in accordance with this Policy. If you do not agree, please discontinue use of the website and Service.
                </p>
              </div>

              {/* 1. Information We Collect */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">1.</span> Information We Collect
                </h3>
                
                <div className="space-y-2 pl-1">
                  <h4 className="font-semibold text-[#F8FAFC] text-sm">1.1 Information you provide to us</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2">
                    <li><strong>Contact details:</strong> name, business email address, phone number, company name, and job title, when you fill a contact form, request a demo, or sign up for an account.</li>
                    <li><strong>Account information:</strong> login credentials, organisation details, and role, when you register for the Service.</li>
                    <li><strong>Communications:</strong> any information you send us via email, support tickets, or other correspondence.</li>
                  </ul>
                </div>

                <div className="space-y-2 pl-1 pt-2">
                  <h4 className="font-semibold text-[#F8FAFC] text-sm">1.2 Information collected automatically</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2">
                    <li><strong>Usage data:</strong> pages visited, features used, timestamps, and referring URLs.</li>
                    <li><strong>Device and log data:</strong> IP address, browser type, operating system, and device identifiers.</li>
                    <li><strong>Cookies and similar technologies:</strong> as described in Section 6 below.</li>
                  </ul>
                </div>

                <div className="space-y-2 pl-1 pt-2">
                  <h4 className="font-semibold text-[#F8FAFC] text-sm">1.3 Data processed through the Service (Customer Data)</h4>
                  <p className="text-xs sm:text-sm">
                    Where an organisation uses the Service to monitor, evaluate, or govern its own AI agents and workflows, the underlying records, logs, and metadata generated (&ldquo;Customer Data&rdquo;) are collected and processed by us on behalf of that organisation, acting as our Customer. In that context, the Customer is generally the data controller and Sentraa AI acts as a data processor / service provider, processing Customer Data only under the Customer&rsquo;s instructions and the applicable data processing terms agreed with that Customer.
                  </p>
                </div>
              </div>

              {/* 2. How We Use Information */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">2.</span> How We Use Information
                </h3>
                <p>We use the information described above to:</p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2">
                  <li>Provide, operate, maintain, and improve the website and Service.</li>
                  <li>Create and manage user accounts and authenticate access.</li>
                  <li>Respond to enquiries, demo requests, and support tickets.</li>
                  <li>Send administrative communications, security alerts, and (where permitted) product updates.</li>
                  <li>Monitor usage, detect misuse, and maintain the security and integrity of the Service.</li>
                  <li>Comply with applicable legal, regulatory, and contractual obligations.</li>
                </ul>
              </div>

              {/* 3. Legal Basis for Processing */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">3.</span> Legal Basis for Processing
                </h3>
                <p>
                  Where the Digital Personal Data Protection Act, 2023 (India) (&ldquo;DPDP Act&rdquo;), the EU/UK General Data Protection Regulation (&ldquo;GDPR&rdquo;), or other applicable data protection laws apply, we process personal data on one or more of the following bases: your consent, the necessity of processing to perform a contract with you, compliance with a legal obligation, or our legitimate interests in operating and securing our business, provided such interests are not overridden by your rights.
                </p>
              </div>

              {/* 4. Sharing and Disclosure of Information */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">4.</span> Sharing and Disclosure of Information
                </h3>
                <p>We do not sell personal data. We may share information with:</p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2">
                  <li><strong>Sub-processors and service providers:</strong> who support our infrastructure (e.g., cloud hosting, database, analytics, and email delivery providers), bound by confidentiality and data protection obligations.</li>
                  <li><strong>Professional advisors:</strong> (legal, financial, or auditors) where necessary.</li>
                  <li><strong>Law enforcement or regulators:</strong> where required by applicable law or to protect our rights, users, or the public.</li>
                  <li><strong>A successor entity:</strong> in connection with a merger, acquisition, or sale of assets, subject to equivalent protections.</li>
                </ul>
              </div>

              {/* 5. Data Retention */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">5.</span> Data Retention
                </h3>
                <p>
                  We retain personal data only for as long as necessary to fulfil the purposes described in this Policy, to comply with legal obligations, resolve disputes, and enforce our agreements. Customer Data is retained in accordance with the terms agreed with the relevant Customer and is deleted or returned upon termination of that agreement, subject to legally mandated retention periods.
                </p>
              </div>

              {/* 6. Cookies and Tracking Technologies */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">6.</span> Cookies and Tracking Technologies
                </h3>
                <p>
                  Our website uses cookies and similar technologies to operate core functionality, remember preferences, and understand aggregate usage. You can control cookies through your browser settings; disabling cookies may affect some website functionality.
                </p>
              </div>

              {/* 7. Data Security */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">7.</span> Data Security
                </h3>
                <p>
                  We implement technical and organisational safeguards designed to protect personal data against unauthorised access, alteration, disclosure, or destruction, including encryption in transit, access controls, and audit logging. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* 8. International Data Transfers */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">8.</span> International Data Transfers
                </h3>
                <p>
                  Personal data may be processed or stored in countries other than your own, including India and countries where our hosting or sub-processors operate. Where required, we rely on appropriate safeguards (such as standard contractual clauses or equivalent mechanisms) for such transfers.
                </p>
              </div>

              {/* 9. Your Rights */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">9.</span> Your Rights
                </h3>
                <p>Subject to applicable law (including the DPDP Act and, where applicable, GDPR), you may have the right to:</p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2">
                  <li>Access, correct, or update your personal data.</li>
                  <li>Request erasure of your personal data, subject to legal exceptions.</li>
                  <li>Withdraw consent where processing is based on consent, without affecting prior lawful processing.</li>
                  <li>Object to or request restriction of certain processing.</li>
                  <li>Request a copy of your data in a portable format, where applicable.</li>
                  <li>Nominate another individual to exercise your rights in the event of your death or incapacity (DPDP Act).</li>
                  <li>Lodge a complaint with the applicable data protection authority.</li>
                </ul>
                <p className="text-xs text-[#A7B0C0]">
                  To exercise these rights, contact us using the details in Section 13.
                </p>
              </div>

              {/* 10. Children's Privacy */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">10.</span> Children&rsquo;s Privacy
                </h3>
                <p>
                  Our website and Service are intended for business use and are not directed to individuals under 18 years of age. We do not knowingly collect personal data from children. If you believe a child has provided us personal data, please contact us so we can delete it.
                </p>
              </div>

              {/* 11. Third-Party Links */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">11.</span> Third-Party Links
                </h3>
                <p>
                  Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of such third-party sites and encourage you to review their policies.
                </p>
              </div>

              {/* 12. Changes to This Policy */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">12.</span> Changes to This Policy
                </h3>
                <p>
                  We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top reflects the most recent revision. Material changes will be notified through the website or by email where appropriate. Continued use of the website or Service after changes take effect constitutes acceptance of the updated Policy.
                </p>
              </div>

              {/* 13. Grievance Officer / Contact Us */}
              <div className="space-y-3 pt-4 border-t border-[#263044]">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">13.</span> Grievance Officer / Contact Us
                </h3>
                <p>
                  In accordance with the DPDP Act, 2023 and applicable Indian law, the Grievance Officer for Sentraa AI Tech Pvt. Ltd. can be reached at:
                </p>
                <div className="p-4 rounded-xl bg-[#111827] border border-[#263044] space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#8B5CF6]" />
                    <span><strong>Email:</strong> <a href="mailto:support@sentraatech.com" className="text-[#8B5CF6] hover:underline font-mono">support@sentraatech.com</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#34D399]" />
                    <span><strong>Company:</strong> Sentraa AI Tech Pvt. Ltd.</span>
                  </div>
                </div>
                <p className="text-xs text-[#A7B0C0]">
                  For any questions about this Privacy Policy or our data practices, please write to us at the above email address.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Header Box */}
              <div className="p-4 rounded-xl bg-[#111827] border border-[#263044] text-xs text-[#A7B0C0]">
                <p className="font-semibold text-[#F8FAFC] text-sm mb-1">
                  Sentraa AI Tech Pvt. Ltd. &mdash; Terms and Conditions
                </p>
                <p>
                  <strong>Effective Date:</strong> 13 September 2026 &bull; <strong>Website:</strong> sentraatech.com
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the website <strong>sentraatech.com</strong> and the AI governance and compliance platform provided by Sentraa AI Tech Pvt. Ltd. (&ldquo;Sentraa AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), together the &ldquo;Service&rdquo;. By accessing the website or using the Service, you (&ldquo;Customer&rdquo;, &ldquo;User&rdquo;, or &ldquo;you&rdquo;) agree to be bound by these Terms. If you are entering into these Terms on behalf of an organisation, you represent that you have authority to bind that organisation.
                </p>
                <p className="p-3.5 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD] font-medium text-xs">
                  If you do not agree to these Terms, do not access or use the website or Service.
                </p>
              </div>

              {/* 1. Description of Service */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">1.</span> Description of Service
                </h3>
                <p>
                  Sentraa AI provides a pre-execution AI governance and compliance platform designed to help organisations monitor, evaluate, and control the actions of their AI agents against configurable policies and applicable regulatory frameworks. The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis and may be updated, modified, or enhanced from time to time.
                </p>
              </div>

              {/* 2. Eligibility and Account Registration */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">2.</span> Eligibility and Account Registration
                </h3>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2">
                  <li>You must be at least 18 years old and capable of forming a binding contract to use the Service.</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</li>
                  <li>You must provide accurate and complete information when registering and keep it up to date.</li>
                  <li>You must notify us promptly of any unauthorised use of your account or any other security breach.</li>
                </ul>
              </div>

              {/* 3. Customer Data and Data Processing */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">3.</span> Customer Data and Data Processing
                </h3>
                <p>
                  As part of using the Service, Customer may submit or connect data, logs, or metadata relating to its AI agents and systems (&ldquo;Customer Data&rdquo;). As between the parties, Customer retains ownership of Customer Data. Sentraa AI processes Customer Data solely to provide, maintain, and improve the Service and in accordance with Customer&rsquo;s instructions, our Privacy Policy, and any applicable data processing agreement entered into with Customer.
                </p>
                <p>
                  Customer is responsible for ensuring it has the necessary rights and legal basis to submit Customer Data to the Service, including any personal data of its own employees, contractors, or third parties.
                </p>
              </div>

              {/* 4. Acceptable Use */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">4.</span> Acceptable Use
                </h3>
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2">
                  <li>Use the Service in violation of any applicable law or regulation.</li>
                  <li>Attempt to gain unauthorised access to the Service, other accounts, or related systems or networks.</li>
                  <li>Reverse engineer, decompile, or attempt to derive the source code of the Service, except as permitted by law.</li>
                  <li>Interfere with or disrupt the integrity or performance of the Service, including through introduction of malware.</li>
                  <li>Use the Service to process data you are not legally authorised to process.</li>
                  <li>Resell, sublicense, or provide the Service to third parties without our prior written consent.</li>
                </ul>
              </div>

              {/* 5. Subscription, Fees, and Trials */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">5.</span> Subscription, Fees, and Trials
                </h3>
                <p>
                  Certain features of the Service may be offered on a paid subscription basis under a separate order form or agreement with Customer. Where the Service (or part of it) is offered on a trial, beta, or evaluation basis, it is provided without warranty and may be modified or discontinued at any time. Fees, billing terms, and payment methods, where applicable, will be set out in the applicable order form or agreement.
                </p>
              </div>

              {/* 6. Intellectual Property */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">6.</span> Intellectual Property
                </h3>
                <p>
                  The Service, including all software, technology, design, trademarks, and content (excluding Customer Data), is owned by Sentraa AI Tech Pvt. Ltd. or its licensors and is protected by intellectual property laws. Except as expressly permitted under these Terms, you may not copy, modify, distribute, sell, or lease any part of the Service.
                </p>
                <p>
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your internal business purposes.
                </p>
              </div>

              {/* 7. Compliance Disclaimer */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">7.</span> Compliance Disclaimer
                </h3>
                <p>
                  The Service is designed to assist organisations in monitoring and governing AI agent activity against configurable policies and reference frameworks (which may include frameworks such as GDPR, the DPDP Act, HIPAA, PCI-DSS, and the NIST AI Risk Management Framework, among others). The Service does not constitute legal advice, and use of the Service does not by itself guarantee compliance with any law, regulation, or industry standard. Customer remains solely responsible for its own legal and regulatory compliance and should seek independent legal counsel as needed.
                </p>
              </div>

              {/* 8. Service Availability */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">8.</span> Service Availability
                </h3>
                <p>
                  We aim to maintain high availability of the Service but do not guarantee uninterrupted or error-free operation. The Service may be temporarily unavailable for maintenance, updates, or due to circumstances beyond our reasonable control. Any specific uptime or support commitments will be set out in a separate service level agreement, if applicable.
                </p>
              </div>

              {/* 9. Third-Party Services */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">9.</span> Third-Party Services
                </h3>
                <p>
                  The Service may integrate with or rely on third-party services, connectors, or infrastructure providers. We are not responsible for the availability, accuracy, or practices of such third parties.
                </p>
              </div>

              {/* 10. Disclaimer of Warranties */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">10.</span> Disclaimer of Warranties
                </h3>
                <div className="p-3.5 rounded-lg bg-[#111827] border border-[#263044] text-xs font-mono text-[#CBD5E1] leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE SERVICE WILL BE ERROR-FREE OR UNINTERRUPTED, OR THAT IT WILL DETECT OR PREVENT EVERY NON-COMPLIANT OR UNAUTHORISED AI AGENT ACTION.
                </div>
              </div>

              {/* 11. Limitation of Liability */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">11.</span> Limitation of Liability
                </h3>
                <div className="p-3.5 rounded-lg bg-[#111827] border border-[#263044] text-xs font-mono text-[#CBD5E1] leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SENTRAA AI TECH PVT. LTD. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNTS PAID BY CUSTOMER TO US FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR, IF NO FEES HAVE BEEN PAID, SHALL NOT EXCEED INR 5,000.
                </div>
              </div>

              {/* 12. Indemnification */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">12.</span> Indemnification
                </h3>
                <p>
                  You agree to indemnify and hold harmless Sentraa AI Tech Pvt. Ltd., its officers, directors, employees, and affiliates from and against any claims, damages, losses, and expenses (including reasonable legal fees) arising out of your breach of these Terms, misuse of the Service, or violation of applicable law or third-party rights.
                </p>
              </div>

              {/* 13. Confidentiality */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">13.</span> Confidentiality
                </h3>
                <p>
                  Each party agrees to protect the other party&rsquo;s confidential information disclosed in connection with the Service using the same degree of care it uses for its own confidential information of similar nature, and not less than reasonable care, and to use such information only as necessary to perform its obligations under these Terms.
                </p>
              </div>

              {/* 14. Term and Termination */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">14.</span> Term and Termination
                </h3>
                <p>
                  These Terms remain in effect while you use the Service. We may suspend or terminate your access to the Service, in whole or in part, at any time if you breach these Terms or if we reasonably believe such action is necessary to protect the Service, our other users, or comply with law. You may stop using the Service at any time. Provisions that by their nature should survive termination (including Sections 6, 7, 10, 11, 12, 13, and 16) will survive.
                </p>
              </div>

              {/* 15. Changes to the Service and Terms */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">15.</span> Changes to the Service and Terms
                </h3>
                <p>
                  We may modify these Terms from time to time. The &ldquo;Last updated&rdquo; date above reflects the most recent revision. Material changes will be communicated via the website or by email where appropriate, and continued use of the Service after such changes take effect constitutes acceptance of the revised Terms.
                </p>
              </div>

              {/* 16. Governing Law and Dispute Resolution */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">16.</span> Governing Law and Dispute Resolution
                </h3>
                <p>
                  These Terms are governed by the laws of India, without regard to conflict of law principles. Subject to any separate arbitration agreement between the parties, the courts at <strong>Ludhiana, Punjab, India</strong> shall have exclusive jurisdiction over any disputes arising out of or relating to these Terms or the Service.
                </p>
              </div>

              {/* 17. General */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] border-b border-[#263044] pb-1.5 flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">17.</span> General
                </h3>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
                  <li><strong>Entire Agreement:</strong> These Terms, together with any applicable order form, data processing agreement, or service agreement, constitute the entire agreement between you and us regarding the Service.</li>
                  <li><strong>Severability:</strong> If any provision of these Terms is held unenforceable, the remaining provisions will continue in full force.</li>
                  <li><strong>No Waiver:</strong> Failure to enforce any provision shall not be deemed a waiver of that provision.</li>
                  <li><strong>Assignment:</strong> You may not assign these Terms without our prior written consent; we may assign these Terms in connection with a merger, acquisition, or sale of assets.</li>
                  <li><strong>Force Majeure:</strong> Neither party shall be liable for delays or failures in performance resulting from causes beyond its reasonable control.</li>
                </ul>
              </div>

              {/* 18. Contact Us */}
              <div className="space-y-3 pt-4 border-t border-[#263044]">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] flex items-center gap-2">
                  <span className="text-[#8B5CF6] font-mono">18.</span> Contact Us
                </h3>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="p-4 rounded-xl bg-[#111827] border border-[#263044] space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#8B5CF6]" />
                    <span><strong>Email:</strong> <a href="mailto:support@sentraatech.com" className="text-[#8B5CF6] hover:underline font-mono">support@sentraatech.com</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#34D399]" />
                    <span><strong>Company:</strong> Sentraa AI Tech Pvt. Ltd.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Sticky Bar */}
        <div className="p-4 bg-[#111827] border-t border-[#263044] flex items-center justify-between text-xs text-[#A7B0C0] shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#34D399]" />
            <span>Official Legal Record &bull; Sentraa AI Tech Pvt. Ltd.</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};

const privacyText = `Privacy Policy
Sentraa AI Tech Pvt. Ltd. - Last updated: 13 September 2026
Sentraa AI Tech Pvt. Ltd. ("Sentraa AI", "we", "us", or "our") operates the website sentraatech.com and provides an AI governance and compliance platform (the "Service"). This Privacy Policy explains what personal data we collect, how we use it, and the rights you have regarding your data. It applies to visitors of our website and to authorised users of our Service ("Customers" or "Users").
By using our website or Service, you agree to the collection and use of information in accordance with this Policy. If you do not agree, please discontinue use of the website and Service.

1. Information We Collect
1.1 Information you provide to us
Contact details: name, business email address, phone number, company name, and job title, when you fill a contact form, request a demo, or sign up for an account.
Account information: login credentials, organisation details, and role, when you register for the Service.
Communications: any information you send us via email, support tickets, or other correspondence.

1.2 Information collected automatically
Usage data: pages visited, features used, timestamps, and referring URLs.
Device and log data: IP address, browser type, operating system, and device identifiers.
Cookies and similar technologies, as described in Section 6 below.

1.3 Data processed through the Service (Customer Data)
Where an organisation uses the Service to monitor, evaluate, or govern its own AI agents and workflows, the underlying records, logs, and metadata generated ("Customer Data") are collected and processed by us on behalf of that organisation, acting as our Customer. In that context, the Customer is generally the data controller and Sentraa AI acts as a data processor / service provider, processing Customer Data only under the Customer's instructions and the applicable data processing terms agreed with that Customer.

2. How We Use Information
We use the information described above to:
Provide, operate, maintain, and improve the website and Service.
Create and manage user accounts and authenticate access.
Respond to enquiries, demo requests, and support tickets.
Send administrative communications, security alerts, and (where permitted) product updates.
Monitor usage, detect misuse, and maintain the security and integrity of the Service.
Comply with applicable legal, regulatory, and contractual obligations.

3. Legal Basis for Processing
Where the Digital Personal Data Protection Act, 2023 (India) ("DPDP Act"), the EU/UK General Data Protection Regulation ("GDPR"), or other applicable data protection laws apply, we process personal data on one or more of the following bases: your consent, the necessity of processing to perform a contract with you, compliance with a legal obligation, or our legitimate interests in operating and securing our business, provided such interests are not overridden by your rights.

4. Sharing and Disclosure of Information
We do not sell personal data. We may share information with:
Sub-processors and service providers who support our infrastructure (e.g., cloud hosting, database, analytics, and email delivery providers), bound by confidentiality and data protection obligations.
Professional advisors (legal, financial, or auditors) where necessary.
Law enforcement or regulators, where required by applicable law or to protect our rights, users, or the public.
A successor entity in connection with a merger, acquisition, or sale of assets, subject to equivalent protections.

5. Data Retention
We retain personal data only for as long as necessary to fulfil the purposes described in this Policy, to comply with legal obligations, resolve disputes, and enforce our agreements. Customer Data is retained in accordance with the terms agreed with the relevant Customer and is deleted or returned upon termination of that agreement, subject to legally mandated retention periods.

6. Cookies and Tracking Technologies
Our website uses cookies and similar technologies to operate core functionality, remember preferences, and understand aggregate usage. You can control cookies through your browser settings; disabling cookies may affect some website functionality.

7. Data Security
We implement technical and organisational safeguards designed to protect personal data against unauthorised access, alteration, disclosure, or destruction, including encryption in transit, access controls, and audit logging. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.

8. International Data Transfers
Personal data may be processed or stored in countries other than your own, including India and countries where our hosting or sub-processors operate. Where required, we rely on appropriate safeguards (such as standard contractual clauses or equivalent mechanisms) for such transfers.

9. Your Rights
Subject to applicable law (including the DPDP Act and, where applicable, GDPR), you may have the right to:
Access, correct, or update your personal data.
Request erasure of your personal data, subject to legal exceptions.
Withdraw consent where processing is based on consent, without affecting prior lawful processing.
Object to or request restriction of certain processing.
Request a copy of your data in a portable format, where applicable.
Nominate another individual to exercise your rights in the event of your death or incapacity (DPDP Act).
Lodge a complaint with the applicable data protection authority.
To exercise these rights, contact us using the details in Section 13.

10. Children's Privacy
Our website and Service are intended for business use and are not directed to individuals under 18 years of age. We do not knowingly collect personal data from children. If you believe a child has provided us personal data, please contact us so we can delete it.

11. Third-Party Links
Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of such third-party sites and encourage you to review their policies.

12. Changes to This Policy
We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the most recent revision. Material changes will be notified through the website or by email where appropriate. Continued use of the website or Service after changes take effect constitutes acceptance of the updated Policy.

13. Grievance Officer / Contact Us
In accordance with the DPDP Act, 2023 and applicable Indian law, the Grievance Officer for Sentraa AI Tech Pvt. Ltd. can be reached at:
Email: support@sentraatech.com
Company: Sentraa AI Tech Pvt. Ltd.
For any questions about this Privacy Policy or our data practices, please write to us at the above email address.`;

const termsText = `Terms and Conditions
Sentraa AI Tech Pvt. Ltd. - Last updated: 13 September 2026
These Terms and Conditions ("Terms") govern your access to and use of the website sentraatech.com and the AI governance and compliance platform provided by Sentraa AI Tech Pvt. Ltd. ("Sentraa AI", "we", "us", or "our"), together the "Service". By accessing the website or using the Service, you ("Customer", "User", or "you") agree to be bound by these Terms. If you are entering into these Terms on behalf of an organisation, you represent that you have authority to bind that organisation.
If you do not agree to these Terms, do not access or use the website or Service.

1. Description of Service
Sentraa AI provides a pre-execution AI governance and compliance platform designed to help organisations monitor, evaluate, and control the actions of their AI agents against configurable policies and applicable regulatory frameworks. The Service is provided on an "as is" and "as available" basis and may be updated, modified, or enhanced from time to time.

2. Eligibility and Account Registration
You must be at least 18 years old and capable of forming a binding contract to use the Service.
You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.
You must provide accurate and complete information when registering and keep it up to date.
You must notify us promptly of any unauthorised use of your account or any other security breach.

3. Customer Data and Data Processing
As part of using the Service, Customer may submit or connect data, logs, or metadata relating to its AI agents and systems ("Customer Data"). As between the parties, Customer retains ownership of Customer Data. Sentraa AI processes Customer Data solely to provide, maintain, and improve the Service and in accordance with Customer's instructions, our Privacy Policy, and any applicable data processing agreement entered into with Customer.
Customer is responsible for ensuring it has the necessary rights and legal basis to submit Customer Data to the Service, including any personal data of its own employees, contractors, or third parties.

4. Acceptable Use
You agree not to:
Use the Service in violation of any applicable law or regulation.
Attempt to gain unauthorised access to the Service, other accounts, or related systems or networks.
Reverse engineer, decompile, or attempt to derive the source code of the Service, except as permitted by law.
Interfere with or disrupt the integrity or performance of the Service, including through introduction of malware.
Use the Service to process data you are not legally authorised to process.
Resell, sublicense, or provide the Service to third parties without our prior written consent.

5. Subscription, Fees, and Trials
Certain features of the Service may be offered on a paid subscription basis under a separate order form or agreement with Customer. Where the Service (or part of it) is offered on a trial, beta, or evaluation basis, it is provided without warranty and may be modified or discontinued at any time. Fees, billing terms, and payment methods, where applicable, will be set out in the applicable order form or agreement.

6. Intellectual Property
The Service, including all software, technology, design, trademarks, and content (excluding Customer Data), is owned by Sentraa AI Tech Pvt. Ltd. or its licensors and is protected by intellectual property laws. Except as expressly permitted under these Terms, you may not copy, modify, distribute, sell, or lease any part of the Service.
Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your internal business purposes.

7. Compliance Disclaimer
The Service is designed to assist organisations in monitoring and governing AI agent activity against configurable policies and reference frameworks (which may include frameworks such as GDPR, the DPDP Act, HIPAA, PCI-DSS, and the NIST AI Risk Management Framework, among others). The Service does not constitute legal advice, and use of the Service does not by itself guarantee compliance with any law, regulation, or industry standard. Customer remains solely responsible for its own legal and regulatory compliance and should seek independent legal counsel as needed.

8. Service Availability
We aim to maintain high availability of the Service but do not guarantee uninterrupted or error-free operation. The Service may be temporarily unavailable for maintenance, updates, or due to circumstances beyond our reasonable control. Any specific uptime or support commitments will be set out in a separate service level agreement, if applicable.

9. Third-Party Services
The Service may integrate with or rely on third-party services, connectors, or infrastructure providers. We are not responsible for the availability, accuracy, or practices of such third parties.

10. Disclaimer of Warranties
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE SERVICE WILL BE ERROR-FREE OR UNINTERRUPTED, OR THAT IT WILL DETECT OR PREVENT EVERY NON-COMPLIANT OR UNAUTHORISED AI AGENT ACTION.

11. Limitation of Liability
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SENTRAA AI TECH PVT. LTD. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNTS PAID BY CUSTOMER TO US FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR, IF NO FEES HAVE BEEN PAID, SHALL NOT EXCEED INR 5,000.

12. Indemnification
You agree to indemnify and hold harmless Sentraa AI Tech Pvt. Ltd., its officers, directors, employees, and affiliates from and against any claims, damages, losses, and expenses (including reasonable legal fees) arising out of your breach of these Terms, misuse of the Service, or violation of applicable law or third-party rights.

13. Confidentiality
Each party agrees to protect the other party's confidential information disclosed in connection with the Service using the same degree of care it uses for its own confidential information of similar nature, and not less than reasonable care, and to use such information only as necessary to perform its obligations under these Terms.

14. Term and Termination
These Terms remain in effect while you use the Service. We may suspend or terminate your access to the Service, in whole or in part, at any time if you breach these Terms or if we reasonably believe such action is necessary to protect the Service, our other users, or comply with law. You may stop using the Service at any time. Provisions that by their nature should survive termination (including Sections 6, 7, 10, 11, 12, 13, and 16) will survive.

15. Changes to the Service and Terms
We may modify these Terms from time to time. The "Last updated" date above reflects the most recent revision. Material changes will be communicated via the website or by email where appropriate, and continued use of the Service after such changes take effect constitutes acceptance of the revised Terms.

16. Governing Law and Dispute Resolution
These Terms are governed by the laws of India, without regard to conflict of law principles. Subject to any separate arbitration agreement between the parties, the courts at Ludhiana, Punjab, India shall have exclusive jurisdiction over any disputes arising out of or relating to these Terms or the Service.

17. General
Entire Agreement: These Terms, together with any applicable order form, data processing agreement, or service agreement, constitute the entire agreement between you and us regarding the Service.
Severability: If any provision of these Terms is held unenforceable, the remaining provisions will continue in full force.
No Waiver: Failure to enforce any provision shall not be deemed a waiver of that provision.
Assignment: You may not assign these Terms without our prior written consent; we may assign these Terms in connection with a merger, acquisition, or sale of assets.
Force Majeure: Neither party shall be liable for delays or failures in performance resulting from causes beyond its reasonable control.

18. Contact Us
If you have any questions about these Terms, please contact us at:
Email: support@sentraatech.com
Company: Sentraa AI Tech Pvt. Ltd.`;
