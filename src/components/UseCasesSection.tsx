import React from 'react';
import {
  Building2,
  Briefcase,
  Layers,
  FileCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';
import './UseCasesSection.css';

interface Persona {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PERSONAS: Persona[] = [
  {
    icon: <Briefcase size={18} />,
    title: 'Procurement Teams',
    description:
      'Evaluate dozens of competing vendor submissions without tedious manual specification alignment or overlooked contractual clauses.',
  },
  {
    icon: <Building2 size={18} />,
    title: 'Small & Medium Businesses',
    description:
      'Gain enterprise-grade quotation verification without requiring a dedicated compliance department or expensive external consultants.',
  },
  {
    icon: <Layers size={18} />,
    title: 'Enterprise Sourcing',
    description:
      'Enforce standardized compliance matrices and audit-ready records across distributed regional offices and business units.',
  },
  {
    icon: <FileCheck size={18} />,
    title: 'Operations & Administration',
    description:
      'Quickly cross-check office IT purchases, equipment leases, and facility supplies against official manufacturer specifications.',
  },
];

export const UseCasesSection: React.FC = () => {
  return (
    <section className="section-wrapper" id="use-cases">
      <div className="site-container">
        <div className="section-header">
          <div className="section-kicker">Operational Scope</div>
          <h2 className="section-title">
            Designed for Teams That Need Better Procurement Decisions.
          </h2>
          <p className="section-description">
            From fast-growth companies evaluating hardware bids to enterprise sourcing teams
            enforcing strict compliance standards.
          </p>
        </div>

        {/* User Personas */}
        <div className="use-cases-personas">
          {PERSONAS.map((p) => (
            <div className="persona-card" key={p.title}>
              <div className="persona-icon-wrap">{p.icon}</div>
              <h3 className="persona-title">{p.title}</h3>
              <p className="persona-desc">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Realistic Walkthrough Case Study */}
        <div className="case-study-box">
          <div className="case-study-header">
            <div className="case-study-title-group">
              <span className="section-kicker" style={{ marginBottom: '0.35rem' }}>
                Walkthrough Example
              </span>
              <h3>Sample Procurement Case: Evaluating 3 Quotations for 5 Developer Laptops</h3>
              <p>
                A concrete simulation illustrating how SpecProof AI extracts, normalizes, and verifies
                competing hardware quotations against mandatory criteria.
              </p>
            </div>
            <span className="sample-data-tag">Illustrative Sample Use Case</span>
          </div>

          <div className="case-study-table-container">
            <table className="case-study-table">
              <thead>
                <tr>
                  <th>Evaluation Parameter</th>
                  <th>Internal PR Requirement</th>
                  <th>Vendor A (NovaTech)</th>
                  <th>Vendor B (Apex Systems)</th>
                  <th>Vendor C (Vertex Global)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Base Unit Price</strong>
                  </td>
                  <td>Budget &le; ₹1,60,000 / unit</td>
                  <td style={{ fontFamily: 'var(--font-mono)' }}>₹1,48,000 / unit</td>
                  <td style={{ fontFamily: 'var(--font-mono)' }}>₹1,35,000 / unit</td>
                  <td style={{ fontFamily: 'var(--font-mono)' }}>₹1,31,200 / unit</td>
                </tr>
                <tr>
                  <td>
                    <strong>RAM Specification</strong>
                  </td>
                  <td>32GB LPDDR5 (Mandatory)</td>
                  <td>
                    <span className="status-badge verified">
                      <CheckCircle2 size={11} /> 32GB Verified
                    </span>
                  </td>
                  <td>
                    <span className="status-badge verified">
                      <CheckCircle2 size={11} /> 32GB Verified
                    </span>
                  </td>
                  <td>
                    <span className="status-badge unknown">
                      <HelpCircle size={11} /> 16GB / Unstated
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Warranty & SLA</strong>
                  </td>
                  <td>3-Yr On-Site NBD (Mandatory)</td>
                  <td>
                    <span className="status-badge verified">
                      <CheckCircle2 size={11} /> 3-Yr On-Site
                    </span>
                  </td>
                  <td>
                    <span className="status-badge contradicted">
                      <XCircle size={11} /> 1-Yr Depot Only
                    </span>
                  </td>
                  <td>
                    <span className="status-badge unknown">
                      <HelpCircle size={11} /> No SLA Mentioned
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Freight & Taxes</strong>
                  </td>
                  <td>DDP Delivery Included</td>
                  <td>Included in Total</td>
                  <td>+₹26,000 Freight added</td>
                  <td>Ex-works (Excluded)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Normalized Total</strong>
                  </td>
                  <td>Target &le; ₹8,00,000 Total</td>
                  <td>
                    <strong style={{ color: 'var(--status-verified)', fontFamily: 'var(--font-mono)' }}>
                      ₹7,40,000 Total
                    </strong>
                  </td>
                  <td>
                    <strong style={{ fontFamily: 'var(--font-mono)' }}>
                      ₹7,01,000 Total
                    </strong>
                  </td>
                  <td>
                    <strong style={{ color: 'var(--status-unknown)', fontFamily: 'var(--font-mono)' }}>
                      ₹6,56,000 (Incomplete)
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="findings-summary-box">
            <div className="findings-summary-title">
              <AlertTriangle size={16} style={{ color: 'var(--status-unknown)' }} />
              <span>SpecProof AI Evidence-Based Synthesis:</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              While Vendor C appears to offer the lowest headline price (₹6,56,000), specification
              normalization reveals that freight is excluded and memory capacity is unverified. Vendor B
              directly contradicts the mandatory 3-year on-site SLA (providing only 1-year depot service).
              Vendor A (₹7,40,000) is the only fully verified, compliant proposal. Findings are queued for final
              human approval before contract award.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
