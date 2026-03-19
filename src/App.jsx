import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';

import ReviewsSection from './sections/ReviewsSection';
import ContactSection from './sections/ContactSection';
import { Instagram, Phone, Mail, ArrowUp } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('raj-theme') || 'dark';
  });

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('raj-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />

        <ReviewsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: '60px 24px 30px',
        textAlign: 'center'
      }}>
        <div className="container">
          <img src="/logo.png" alt="Raj Technologies" style={{ height: 50, margin: '0 auto 20px', borderRadius: 8 }} />
          <p style={{ color: 'var(--text-secondary)', marginBottom: 16, fontSize: '0.95rem' }}>
            Turning Ideas into Powerful Digital Solutions
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 24 }}>
            <a href="https://instagram.com/rajtechnologies8" target="_blank" rel="noreferrer"
              style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.9rem' }}>
              <Instagram size={18} /> Instagram
            </a>
            <a href="tel:9322692678"
              style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.9rem' }}>
              <Phone size={18} /> 9322692678
            </a>
            <a href="mailto:technologiesraj2@gmail.com"
              style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.9rem' }}>
              <Mail size={18} /> Email
            </a>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              © {new Date().getFullYear()} Raj Technologies. All Rights Reserved.
            </p>
            <p style={{ color: 'var(--accent)', fontSize: '0.75rem', marginTop: 4 }}>
              Founder & CEO: Kartik Shete
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/919322692678" target="_blank" rel="noreferrer"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 999,
          width: 56, height: 56, borderRadius: '50%',
          background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Scroll to Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed', bottom: 24, right: 88, zIndex: 999,
            width: 44, height: 44, borderRadius: '50%',
            background: 'var(--accent)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px var(--accent-glow)',
            border: 'none', transition: 'transform 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
