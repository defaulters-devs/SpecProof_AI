import React from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import './VerificationTrustSection.css';

export const VerificationTrustSection: React.FC = () => {
  return (
    <section className="section-wrapper" id="trust">
      <div className="site-container">
        <div className="section-header">
          <div className="section-kicker">Evidence-Based Architecture</div>
          <h2 className="section-title">Not Just an Answer. An Explainable Result.</h2>
          <p className="section-description">
            SpecProof AI does not operate as an opaque conversational oracle. Every output is grounded
            in explicit citations, document cross-references, and human-in-the-loop oversight.
          </p>
        </div>

        <div className="trust-section-grid">
          {/* Left: The Requirement-Verification Table */}
          <div className="trust-table-wrapper">
            <div className="trust-table-header">
              <div className="trust-table-title">
                <ShieldAlert size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Verification Docket // Sample Analysis</span>
              </div>
              <span className="sample-data-tag">Illustrative Sample Data</span>
            </div>

            <div className="table-container" style={{ border: 'none', borderRadius: 0 }}>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Requirement</th>
                    <th>Status</th>
                    <th>Evidence Finding</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div style={{ fontWeight: 600 }}>Required Capacity</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        32GB LPDDR5 6400MHz
                      </div>
                    </td>
                    <td>
                      <span className="status-badge verified">
                        <CheckCircle2 size={13} />
                        Verified
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.8125rem' }}>Source reference available</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        OEM Spec Doc #HW-2026-p4 <ExternalLink size={10} style={{ display: 'inline' }} />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div style={{ fontWeight: 600 }}>Warranty Duration</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        3-Year On-Site Next Business Day
                      </div>
                    </td>
                    <td>
                      <span className="status-badge contradicted">
                        <XCircle size={13} />
                        Contradicted
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.8125rem' }}>Conflicting published information</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--status-contradicted)', fontFamily: 'var(--font-mono)' }}>
                        Quote claims 3-Yr; Mfr base SKU is 1-Yr Depot
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div style={{ fontWeight: 600 }}>Delivery Commitment</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Guaranteed fulfillment &le; 14 Days
                      </div>
                    </td>
                    <td>
                      <span className="status-badge unknown">
                        <HelpCircle size={13} />
                        Unknown
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.8125rem' }}>Insufficient evidence</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--status-unknown)', fontFamily: 'var(--font-mono)' }}>
                        Supplier quote lacks lead-time SLA confirmation
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* Right: The 5 Core Principles */}
          <div className="trust-principles-list">
            <div className="trust-principle-card">
              <div className="principle-num">1</div>
              <div className="principle-text-wrap">
                <h4>Claims Should Be Linked to Evidence</h4>
                <p>
                  No specification is treated as authentic without an explicit citation to a supplier document,
                  datasheet, or verifiable web source.
                </p>
              </div>
            </div>

            <div className="trust-principle-card">
              <div className="principle-num">2</div>
              <div className="principle-text-wrap">
                <h4>Unknown Remains Explicitly Unknown</h4>
                <p>
                  The engine never hallucinates or invents compliance. If a mandatory requirement cannot be verified,
                  it is flagged as Unknown and requires manual investigation.
                </p>
              </div>
            </div>

            <div className="trust-principle-card">
              <div className="principle-num">3</div>
              <div className="principle-text-wrap">
                <h4>Conflicting Evidence Is Surfaced, Never Hidden</h4>
                <p>
                  Discrepancies between seller claims and manufacturer specifications are prominently highlighted
                  so procurement teams can challenge dubious terms.
                </p>
              </div>
            </div>

            <div className="trust-principle-card">
              <div className="principle-num">4</div>
              <div className="principle-text-wrap">
                <h4>Mandatory Constraints Are Evaluated Explicitly</h4>
                <p>
                  High-priority legal, technical, and regulatory requirements are isolated from non-critical nice-to-haves.
                </p>
              </div>
            </div>

            <div className="trust-principle-card">
              <div className="principle-num">5</div>
              <div className="principle-text-wrap">
                <h4>Humans Retain Final Purchasing Authority</h4>
                <p>
                  SpecProof AI provides intelligence and audit readiness; it does not issue purchase orders or execute
                  unapproved commercial transactions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Source Integrity Caveat */}
        <div className="trust-caveat-box">
          <strong>Evidentiary Rigor Standard:</strong> An online web source is not presumed trustworthy merely
          because it is publicly accessible. SpecProof AI evaluates source provenance, cross-references official OEM records,
          and flags contradictory data points for qualified human review before decisions are finalized.
        </div>
      </div>
    </section>
  );
};
