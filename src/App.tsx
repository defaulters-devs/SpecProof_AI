import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { VerificationTrustSection } from './components/VerificationTrustSection';
import { TechnologySection } from './components/TechnologySection';
import { UseCasesSection } from './components/UseCasesSection';
import { TeamSection } from './components/TeamSection';
import { LoginModal } from './components/LoginModal';
import { Footer } from './components/Footer';
import './App.css';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('specproof_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Default to dark mode (Enterprise flagship theme) or system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('specproof_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container" id="top">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      <main className="main-content">
        <Hero onOpenLogin={() => setIsLoginOpen(true)} />
        <ProblemSection />
        <CapabilitiesSection />
        <HowItWorksSection />
        <VerificationTrustSection />
        <TechnologySection />
        <UseCasesSection />
        <TeamSection />
      </main>

      <Footer onOpenLogin={() => setIsLoginOpen(true)} />

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

export default App;
