import React from 'react';
import {
  FileText,
  SlidersHorizontal,
  Search,
  ShieldAlert,
  BarChart3,
  UserCheck2,
} from 'lucide-react';
import './CapabilitiesSection.css';

interface Capability {
  icon: React.ReactNode;
  tag: string;
  isIntegration?: boolean;
  title: string;
  description: string;
  features: string[];
}

const CAPABILITIES: Capability[] = [
  {
    icon: <FileText size={22} />,
    tag: 'Extraction',
    title: 'Requirement Extraction',
    description:
      'Convert raw purchase requests and unstructured procurement documents into clearly defined requirements — isolating specifications, quantities, environmental constraints, and mandatory criteria.',
    features: [
      'Extracts technical parameters from emails, PDFs, and RFPs',
      'Distinguishes mandatory requirements from optional preferences',
      'Structures purchase criteria into searchable database records',
    ],
  },
  {
    icon: <SlidersHorizontal size={22} />,
    tag: 'Normalization',
    title: 'Specification Normalization',
    description:
      'Normalize inconsistent product naming conventions, measurement units, and vendor-specific jargon so that distinct supplier quotations can be compared apples-to-apples.',
    features: [
      'Standardizes metric, imperial, and digital capacity metrics',
      'Resolves varied SKU aliases back to canonical hardware classes',
      'Harmonizes differing warranty and SLA descriptions into uniform tiers',
    ],
  },
  {
    icon: <Search size={22} />,
    tag: 'TinyFish API',
    isIntegration: true,
    title: 'Supplier Research with TinyFish',
    description:
      'Leverage the TinyFish API for automated web research. The system inspects manufacturer documentation, product spec sheets, and supplier registries to gather supporting evidence.',
    features: [
      'Automated retrieval of public OEM datasheets and product pages',
      'Web-based verification of vendor claims and specification accuracy',
      'Preserves original URL sources and retrieval timestamps for audits',
    ],
  },
  {
    icon: <ShieldAlert size={22} />,
    tag: 'Verification',
    title: 'Evidence-Based Verification',
    description:
      'Associate every critical specification claim with verifiable documentation and an explicit three-state verification status.',
    features: [
      'Verified: Sufficient official documentation corroborates the claim',
      'Contradicted: Official evidence directly conflicts with quoted specs',
      'Unknown: Insufficient evidence available in accessible records',
    ],
  },
  {
    icon: <BarChart3 size={22} />,
    tag: 'Analytics',
    title: 'Cost and Anomaly Analysis',
    description:
      'Compute true total costs of ownership where pricing is provided. The engine cross-checks line items to surface statistical price anomalies, suspicious variances, and omitted ancillary fees.',
    features: [
      'Multi-supplier price comparison across identical normalized units',
      'Heuristic detection of abnormally low or outlier price quotes',
      'Highlights missing tax, shipping, or mandatory support fees',
    ],
  },
  {
    icon: <UserCheck2 size={22} />,
    tag: 'Governance',
    title: 'Human Approval & Audit Trail',
    description:
      'Keep authorized decision-makers in command. SpecProof AI synthesizes findings into an explainable review docket requiring deliberate human sign-off before purchase orders are issued.',
    features: [
      'Complete chronological log of citations, reviews, and decisions',
      'Proposed vendor clarification workflows for ambiguous bids',
      'Immutable evidentiary records ready for compliance and internal audits',
    ],
  },
];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="section-wrapper" id="capabilities">
      <div className="site-container">
        <div className="section-header">
          <div className="section-kicker">Core System Architecture</div>
          <h2 className="section-title">One Workflow. From Requirements to Evidence.</h2>
          <p className="section-description">
            SpecProof AI replaces subjective spreadsheet evaluations with a structured,
            six-stage pipeline designed for enterprise procurement precision.
          </p>
        </div>

        <div className="capabilities-grid">
          {CAPABILITIES.map((cap) => (
            <div className="capability-card" key={cap.title}>
              <div className="capability-top-bar">
                <div className="capability-icon-box">{cap.icon}</div>
                <span className={`capability-tag ${cap.isIntegration ? 'integration' : ''}`}>
                  {cap.tag}
                </span>
              </div>

              <h3 className="capability-title">{cap.title}</h3>
              <p className="capability-desc">{cap.description}</p>

              <div className="capability-features">
                {cap.features.map((feat, idx) => (
                  <div className="capability-feature-item" key={idx}>
                    <span className="capability-feature-bullet">&bull;</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
