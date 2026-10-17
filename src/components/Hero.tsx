import React from 'react';
import {
  ShieldCheck,
  FileCheck2,
  UserCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Lock,
} from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onOpenLogin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLogin }) => {
  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const overviewEl = document.getElementById('overview');
    if (overviewEl) {
      overviewEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-wrapper" id="hero">
      <div className="site-container hero-grid">
        {/* Left Column: Messaging & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--status-verified)' }}></span>
            <span>Procurement Intelligence & Quotation Verification</span>
          </div>

          <h1 className="hero-title">
            Procurement Decisions, <br />
            <span className="hero-title-accent">Backed by Evidence.</span>
          </h1>

          <p className="hero-description">
            Turn purchase requirements and supplier quotations into structured, evidence-backed
            decisions. Verify specifications, investigate supplier claims, identify discrepancies,
            and maintain a transparent audit trail.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleExplore}
              id="hero-explore-btn"
            >
              <span>Explore the Platform</span>
              <ChevronRight size={16} />
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={onOpenLogin}
              id="hero-login-btn"
            >
              <Lock size={15} style={{ color: 'var(--accent-cyan)' }} />
              <span>Login</span>
            </button>
          </div>

          {/* Three Concise Product Principles */}
          <div className="hero-principles">
            <div className="principle-item">
              <div className="principle-icon-wrap">
                <ShieldCheck size={16} />
              </div>
              <span>Evidence-linked verification</span>
            </div>
            <div className="principle-item">
              <div className="principle-icon-wrap">
                <FileCheck2 size={16} />
              </div>
              <span>Requirement-level compliance</span>
            </div>
            <div className="principle-item">
              <div className="principle-icon-wrap">
                <UserCheck size={16} />
              </div>
              <span>Human-controlled decisions</span>
            </div>
          </div>
        </div>

        {/* Right Column: Realistic Product Interface Preview */}
        <div className="preview-container" aria-label="SpecProof AI Verification Matrix Preview">
          {/* Enterprise Dashboard Header Bar */}
          <div className="preview-header">
            <div className="window-title">
              <span>PR-2026-084 // Verification Matrix</span>
            </div>
            <span className="sample-data-tag">Sample Data</span>
          </div>

          <div className="preview-content">
            {/* Sample Purchase Requirement Summary */}
            <div className="pr-summary-box">
              <div className="pr-meta-row">
                <span className="pr-code">PR-2026-084 &bull; Engineering Dept</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Qty: 5 Units</span>
              </div>
              <div className="pr-item-name">High-Performance Developer Workstation Laptops</div>
              <div className="pr-spec-pills">
                <span className="spec-pill">32GB RAM</span>
                <span className="spec-pill">1TB PCIe 4.0 NVMe</span>
                <span className="spec-pill">Thunderbolt 4</span>
                <span className="spec-pill">3-Yr On-Site SLA</span>
                <span className="spec-pill">Delivery &le; 14 Days</span>
              </div>
            </div>

            {/* Supplier Comparison Micro-Table */}
            <div style={{ overflowX: 'auto' }}>
              <table className="preview-table">
                <thead>
                  <tr>
                    <th>Supplier Quotation</th>
                    <th>Total Cost</th>
                    <th>Status</th>
                    <th>Evidence Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="supplier-name-cell">
                        <span>NovaTech Sourcing</span>
                        <span className="supplier-subtext">Quote #NT-4491 &bull; 12d Delivery</span>
                      </div>
                    </td>
                    <td>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>₹7,40,000</strong>
                    </td>
                    <td>
                      <span className="status-badge verified">
                        <CheckCircle2 size={12} />
                        Verified
                      </span>
                    </td>
                    <td>
                      <span className="evidence-ref" title="Datasheet Section 4.2 confirmed">
                        OEM Datasheet &sect;4.2
                        <ExternalLink size={10} />
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="supplier-name-cell">
                        <span>Apex Industrial</span>
                        <span className="supplier-subtext">Quote #AI-902 &bull; 8d Delivery</span>
                      </div>
                    </td>
                    <td>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>₹7,01,000</strong>
                    </td>
                    <td>
                      <span className="status-badge contradicted">
                        <XCircle size={12} />
                        Contradicted
                      </span>
                    </td>
                    <td>
                      <span className="evidence-ref" title="Quote claims 3yr, Mfr base spec is 1yr carry-in">
                        Conflicting SLA Docs
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="supplier-name-cell">
                        <span>Vertex Global Supply</span>
                        <span className="supplier-subtext">Quote #VG-110 &bull; Unconfirmed ETA</span>
                      </div>
                    </td>
                    <td>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>₹6,56,000</strong>
                    </td>
                    <td>
                      <span className="status-badge unknown">
                        <HelpCircle size={12} />
                        Unknown
                      </span>
                    </td>
                    <td>
                      <span className="evidence-ref" title="No published RAM spec or SLA found">
                        Insufficient Evidence
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Review or Approval Status */}
            <div className="preview-footer-status">
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>
                  Review Recommendation
                </span>
                <span className="status-highlight-text">
                  Flagged for Discrepancy Review &mdash; 1 Contradicted, 1 Unknown
                </span>
              </div>
              <span className="status-badge unknown" style={{ alignSelf: 'center' }}>
                Pending Human Approval
              </span>
            </div>

            <div className="sample-notice-bar">
              <span>Notice: Illustrative sample procurement analysis for demonstration.</span>
              <span style={{ fontFamily: 'var(--font-mono)' }}>SpecProof v0.1-preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
