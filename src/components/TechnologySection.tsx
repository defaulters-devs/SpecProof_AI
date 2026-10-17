import React from 'react';
import {
  Code2,
  Server,
  Globe,
  Database,
  Binary,
  ArrowRight,
  Workflow,
} from 'lucide-react';
import './TechnologySection.css';

interface TechItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  status: 'implemented' | 'in-development' | 'planned';
  statusLabel: string;
  description: string;
  specDetails: string;
}

const TECH_STACK: TechItem[] = [
  {
    icon: <Code2 size={20} />,
    title: 'React 19 & TypeScript',
    category: 'Frontend Client',
    status: 'implemented',
    statusLabel: 'IMPLEMENTED',
    description:
      'Responsive, typed single-page application built with React 19, Vite 8, and modern CSS variables for high-performance theme switching.',
    specDetails: 'React 19 • TypeScript • Vite 8 • CSS Tokens',
  },
  {
    icon: <Server size={20} />,
    title: 'Java & Spring Boot',
    category: 'Backend Microservices',
    status: 'implemented',
    statusLabel: 'IMPLEMENTED',
    description:
      'Robust enterprise REST API services handling quotation ingestion, requirement parsing workflows, and authorization checkpoints.',
    specDetails: 'Java 21 • Spring Boot 3.x • RESTful APIs',
  },
  {
    icon: <Globe size={20} />,
    title: 'TinyFish API Integration',
    category: 'Autonomous Research',
    status: 'implemented',
    statusLabel: 'IMPLEMENTED',
    description:
      'Targeted web intelligence service to programmatically crawl manufacturer spec sheets, warranty databases, and authorized reseller listings.',
    specDetails: 'TinyFish REST API • Web Scrape Agent • Source Citations',
  },
  {
    icon: <Database size={20} />,
    title: 'Relational SQL Database',
    category: 'Persistence & Audits',
    status: 'implemented',
    statusLabel: 'IMPLEMENTED',
    description:
      'Structured schema to store normalized specifications, quotation line items, discrepancy logs, and immutable human sign-off history.',
    specDetails: 'PostgreSQL Relational Schema • Audit Logs',
  },
  {
    icon: <Binary size={20} />,
    title: 'Document & NLP Normalizer',
    category: 'Extraction Pipeline',
    status: 'in-development',
    statusLabel: 'In Development',
    description:
      'Parsing engine to extract unstructured data from PDF quotes and emails, mapping varied terminology into canonical requirement models.',
    specDetails: 'Multi-Format OCR / Text Parser • Unit Normalizer',
  },
];

export const TechnologySection: React.FC = () => {
  return (
    <section className="section-wrapper tech-section-wrapper" id="technology">
      <div className="site-container">
        <div className="section-header">
          <div className="section-kicker">Engineering Foundation</div>
          <h2 className="section-title">
            Built for Structured Analysis and Verifiable Research.
          </h2>
          <p className="section-description">
            SpecProof AI is engineered with an enterprise stack that strictly separates
            unstructured ingestion, deterministic normalization, and verifiable evidence gathering.
          </p>
        </div>

        {/* Technical Stack Cards with Accurate Status Badges */}
        <div className="tech-grid">
          {TECH_STACK.map((tech) => (
            <div className="tech-card" key={tech.title}>
              <div className="tech-card-header">
                <div className="tech-icon-wrap">{tech.icon}</div>
                <span className={`tech-status-badge ${tech.status}`}>
                  {tech.statusLabel}
                </span>
              </div>
              <h3 className="tech-card-title">{tech.title}</h3>
              <p className="tech-card-desc">{tech.description}</p>
              <div className="tech-card-spec">{tech.specDetails}</div>
            </div>
          ))}
        </div>

        {/* Architecture Flow Diagram */}
        <div className="arch-diagram-card">
          <div className="arch-header">
            <div>
              <span className="section-kicker" style={{ marginBottom: '0.4rem' }}>
                <Workflow size={13} /> Architecture Flow
              </span>
              <h3 className="arch-title">Data Pipeline & Verification Circuit</h3>
            </div>
          </div>

          <div className="arch-flow-row">
            <div className="arch-node">
              <span className="arch-node-badge">Input Tier</span>
              <div className="arch-node-title">Purchase Request & Quotes</div>
              <div className="arch-node-sub">PDFs, Sheets & Text</div>
            </div>

            <div className="arch-arrow">
              <ArrowRight size={20} />
            </div>

            <div className="arch-node">
              <span className="arch-node-badge">Parsing & Normalization</span>
              <div className="arch-node-title">Spring Boot Service</div>
              <div className="arch-node-sub">Structured Extraction & Units</div>
            </div>

            <div className="arch-arrow">
              <ArrowRight size={20} />
            </div>

            <div className="arch-node">
              <span className="arch-node-badge">External Intelligence</span>
              <div className="arch-node-title">TinyFish API</div>
              <div className="arch-node-sub">Web Research & OEM Docs</div>
            </div>

            <div className="arch-arrow">
              <ArrowRight size={20} />
            </div>

            <div className="arch-node">
              <span className="arch-node-badge">Verification Matrix</span>
              <div className="arch-node-title">React 19 Interface</div>
              <div className="arch-node-sub">Human-in-the-Loop Approval</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
