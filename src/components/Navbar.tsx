import React, { useState } from 'react';
import { Sun, Moon, Lock, Menu, X } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenLogin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <div className="site-container navbar-container">
        {/* Brand / Logo */}
        <a href="#top" className="brand-link" onClick={scrollToTop} aria-label="SpecProof AI Home">
          <div className="brand-icon">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
          </div>
          <div className="brand-text-group">
            <span className="brand-wordmark">
              SpecProof <span style={{ color: 'var(--accent-cyan)' }}>AI</span>
            </span>
            <span className="brand-byline">
              by <span className="brand-team-tag">DEFAULTERS</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary Navigation">
          <ul className="nav-links-desktop">
            <li className="nav-link-item">
              <a href="#overview" onClick={(e) => handleNavClick(e, 'overview')}>
                Overview
              </a>
            </li>
            <li className="nav-link-item">
              <a href="#capabilities" onClick={(e) => handleNavClick(e, 'capabilities')}>
                Capabilities
              </a>
            </li>
            <li className="nav-link-item">
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')}>
                How It Works
              </a>
            </li>
            <li className="nav-link-item">
              <a href="#technology" onClick={(e) => handleNavClick(e, 'technology')}>
                Technology
              </a>
            </li>
            <li className="nav-link-item">
              <a href="#team" onClick={(e) => handleNavClick(e, 'team')}>
                Team
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onOpenLogin}
            id="nav-login-btn"
          >
            <Lock size={14} style={{ color: 'var(--accent-cyan)' }} />
            <span>Login</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileMenuOpen(false);
        }}
      >
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-links">
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
              <a href="#team" onClick={(e) => handleNavClick(e, 'team')}>
                Team DEFAULTERS
              </a>
            </li>
          </ul>

          <div className="mobile-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
            >
              <Lock size={16} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
