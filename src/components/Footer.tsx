import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  onOpenLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogin }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="site-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#091328" />
                <path
                  d="M16 5L26 10.5V17C26 22.5 21.7 26.5 16 28C10.3 26.5 6 22.5 6 17V10.5L16 5Z"
                  stroke="#0066FF"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 16.5L14.5 20L21 13"
                  stroke="#00D2FF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>
                SpecProof <span style={{ color: 'var(--accent-cyan)' }}>AI</span>
              </span>
            </div>

            <p className="footer-desc">
              From scattered purchase quotations to structured, verifiable purchasing decisions.
              Evidence-based procurement intelligence with human-in-the-loop governance.
            </p>

            <div className="footer-status-badge">
              <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'var(--status-verified)' }}></span>
              <span>Platform v0.1 &bull; Active Engineering</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-links-col">
            <h4>Platform</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#overview" onClick={(e) => handleNavClick(e, 'overview')}>
                  Overview
                </a>
              </li>
              <li>
                <a href="#capabilities" onClick={(e) => handleNavClick(e, 'capabilities')}>
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#technology" onClick={(e) => handleNavClick(e, 'technology')}>
                  Technology
                </a>
              </li>
              <li>
                <a href="#use-cases" onClick={(e) => handleNavClick(e, 'use-cases')}>
                  Use Cases
                </a>
              </li>
            </ul>
          </div>

          {/* Governance & Links */}
          <div className="footer-links-col">
            <h4>Engineering & Access</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#team" onClick={(e) => handleNavClick(e, 'team')}>
                  Team DEFAULTERS
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenLogin}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  Login
                </button>
              </li>
              <li>
                <a href="#top" onClick={scrollToTop}>
                  <ArrowUp size={14} />
                  <span>Back to Top</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {currentYear} SpecProof AI &bull; Developed by{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Team DEFAULTERS</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
};
