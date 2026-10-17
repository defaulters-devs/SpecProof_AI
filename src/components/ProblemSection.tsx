import React from 'react';
import './ProblemSection.css';

interface ProblemItem {
  number: string;
  title: string;
  description: string;
  consequence: string;
}

const PROBLEMS: ProblemItem[] = [
  {
    number: '01',
    title: 'Scattered & Unstructured Procurement Inputs',
    description:
      'Purchase requests and vendor responses arrive across fragmented channels — unstandardized PDFs, email threads, chat attachments, and custom spreadsheets. No unified baseline exists for comparison.',
    consequence: 'Hours lost manually copying specifications into makeshift comparison sheets.',
  },
  {
    number: '02',
    title: 'Inconsistent Nomenclature, Units & Formats',
    description:
      'Suppliers describe the same technical parameter using incompatible conventions, proprietary terminology, differing metric or imperial units, and varying packaging hierarchies.',
    consequence: 'False equivalencies where fundamentally different items appear identical.',
  },
  {
    number: '03',
    title: 'Omitted & Overlooked Mandatory Requirements',
    description:
      'When procurement teams evaluate multi-page quotations under tight deadlines, non-functional requirements such as compliance standards, SLAs, warranty terms, and environmental certifications are easily missed.',
    consequence: 'Costly post-award contract disputes and non-compliant deliveries.',
  },
  {
    number: '04',
    title: 'Unverified Supplier Specifications & Claims',
    description:
      'Quotes often state capabilities that conflict with manufacturer datasheets or official SKU documentation. Without independent verification, procurement relies purely on vendor self-reporting.',
    consequence: 'Acceptance of suboptimal hardware or misrepresented warranty coverage.',
  },
  {
    number: '05',
    title: 'Hidden Commercial Variables & Tier Discrepancies',
    description:
      'Base quotation totals frequently conceal omitted line items — unquoted freight fees, recurring licensing, customs duties, maintenance surcharges, and divergent payment terms.',
    consequence: 'Budget overruns that reveal themselves only after contract execution.',
  },
  {
    number: '06',
    title: 'Lack of Defensible, Traceable Audit Trails',
    description:
      'Internal procurement audits require clear proof of why a specific vendor was chosen over competitors. In most organizations, the rationale is buried in individual email accounts.',
    consequence: 'Zero institutional transparency and heightened exposure to audit scrutiny.',
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="section-wrapper problem-section-wrapper" id="overview">
      <div className="site-container">
        <div className="section-header">
          <div className="section-kicker">The Operational Challenge</div>
          <h2 className="section-title">
            Procurement Information Is Scattered. <br />
            Decisions Shouldn't Be.
          </h2>
          <p className="section-description">
            Modern procurement teams are expected to make high-value purchasing decisions rapidly,
            yet they spend over 60% of their evaluation time deciphering fragmented, unverified documents.
          </p>
        </div>

        <div className="problem-grid">
          {PROBLEMS.map((prob) => (
            <div className="problem-card" key={prob.number}>
              <div className="problem-card-num">{prob.number}</div>
              <h3 className="problem-card-title">{prob.title}</h3>
              <p className="problem-card-body">{prob.description}</p>
              <div className="problem-card-impact">
                <span>Direct Impact:</span>
                <strong>{prob.consequence}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
