import React from 'react';
import {
  UploadCloud,
  Cpu,
  SearchCode,
  Scale,
  CheckCheck,
  History,
} from 'lucide-react';
import './HowItWorksSection.css';

interface Step {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS: Step[] = [
  {
    step: '01',
    title: 'Submit Requirements',
    description:
      'The procurement team uploads the purchase request and received supplier quotation documents in any standard format.',
    icon: <UploadCloud size={18} />,
  },
  {
    step: '02',
    title: 'Extract & Normalize',
    description:
      'The system parses unstructured text, structures technical parameters, and standardizes measurement units across all bids.',
    icon: <Cpu size={18} />,
  },
  {
    step: '03',
    title: 'Research & Verify',
    description:
      'Supplier information and technical claims are investigated using configured research tools, including the TinyFish API.',
    icon: <SearchCode size={18} />,
  },
  {
    step: '04',
    title: 'Compare & Flag',
    description:
      'The engine maps supplier bids against mandatory constraints, highlighting cost breakdowns, missing terms, and contradictions.',
    icon: <Scale size={18} />,
  },
  {
    step: '05',
    title: 'Review & Approve',
    description:
      'A human reviewer inspects the evidence ledger, resolves flagged ambiguities, and formally authorizes the purchasing decision.',
    icon: <CheckCheck size={18} />,
  },
  {
    step: '06',
    title: 'Preserve Audit Trail',
    description:
      'The full decision lifecycle — verified citations, diff records, timestamps, and reviewer notes — is archived for compliance.',
    icon: <History size={18} />,
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="section-wrapper how-it-works-wrapper" id="how-it-works">
      <div className="site-container">
        <div className="section-header">
          <div className="section-kicker">Operational Lifecycle</div>
          <h2 className="section-title">
            From Purchase Request to a Defensible Decision.
          </h2>
          <p className="section-description">
            A linear, verifiable progression designed to prevent costly purchasing oversights
            while keeping human judgment firmly in control.
          </p>
        </div>

        <div className="workflow-track">
          {STEPS.map((s, idx) => (
            <div className="workflow-step" key={s.step}>
              <div className="step-header">
                <span className="step-number">{s.step}</span>
                <span className="step-icon">{s.icon}</span>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-description">{s.description}</p>
              {idx < STEPS.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
