import React, { useState, useEffect, useRef } from 'react';
import { X, Lock, Eye, EyeOff, Info, AlertCircle } from 'lucide-react';
import './LoginModal.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ identifier?: string; password?: string }>({});
  const [submissionNotice, setSubmissionNotice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus trap & Escape listener
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    } else {
      // Reset state when closed
      setIdentifier('');
      setPassword('');
      setErrors({});
      setSubmissionNotice(null);
      setIsLoading(false);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: { identifier?: string; password?: string } = {};

    if (!identifier.trim()) {
      newErrors.identifier = 'Email or authorized username is required.';
    } else if (identifier.includes('@') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier.trim())) {
      newErrors.identifier = 'Please provide a valid corporate email address.';
    }

    if (!password) {
      newErrors.password = 'Password is required for authorized access.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionNotice(null);

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    // Frontend demonstration: simulate verification check, then present honest notice
    setTimeout(() => {
      setIsLoading(false);
      setSubmissionNotice(
        'Authentication backend service is currently disconnected. In production, access is restricted to verified credentials issued by your system administrator. No credentials were transmitted or cached.'
      );
    }, 500);
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog" ref={modalRef}>
        {/* Header */}
        <div className="login-modal-header">
          <div>
            <div className="login-brand-group">
              <Lock size={16} style={{ color: 'var(--accent-cyan)' }} />
              <span className="login-brand-title">SpecProof AI</span>
            </div>
            <h2 id="login-title" className="login-modal-title">
              Authorized Access
            </h2>
            <p className="login-modal-subtitle">
              Sign in using credentials issued by your administrator.
            </p>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
            title="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {/* Submission / Connectivity Status Banner */}
          {submissionNotice && (
            <div className="auth-notice-banner" role="status">
              <Info size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
              <div>
                <strong>Notice: Frontend Demonstration Mode</strong>
                <span>{submissionNotice}</span>
              </div>
            </div>
          )}

          {/* Identifier Input */}
          <div className="form-group">
            <label htmlFor="login-identifier" className="form-label">
              Corporate Email or Username
            </label>
            <input
              ref={inputRef}
              type="text"
              id="login-identifier"
              className={`form-input ${errors.identifier ? 'has-error' : ''}`}
              placeholder="user@organization.com"
              value={identifier}
              onChange={(e) => {
                setIdentifier(e.target.value);
                if (errors.identifier) setErrors({ ...errors, identifier: undefined });
              }}
              autoComplete="username"
              disabled={isLoading}
            />
            {errors.identifier && (
              <span className="field-error-text" role="alert">
                <AlertCircle size={12} style={{ display: 'inline', marginRight: 4 }} />
                {errors.identifier}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="login-password" className="form-label">
              Password
            </label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="login-password"
                className={`form-input ${errors.password ? 'has-error' : ''}`}
                placeholder="Enter authorized password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: undefined });
                }}
                autoComplete="current-password"
                disabled={isLoading}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <span className="field-error-text" role="alert">
                <AlertCircle size={12} style={{ display: 'inline', marginRight: 4 }} />
                {errors.password}
              </span>
            )}
          </div>

          {/* Options Row */}
          <div className="form-options-row">
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isLoading}
              />
              <span>Remember this device</span>
            </label>

            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Managed by Org Policy
            </span>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
            disabled={isLoading}
          >
            {isLoading ? (
              <span>Verifying Session...</span>
            ) : (
              <>
                <Lock size={16} />
                <span>Sign In to Platform</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
