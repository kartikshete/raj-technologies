import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navStyle = {
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 'var(--nav-height)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(16px, 4vw, 48px)',
        background: scrolled ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease',
    };

    return (
        <>
            <nav style={navStyle}>
                {/* Logo */}
                <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <img src="/logo.png" alt="Raj Technologies" style={{ height: 40, borderRadius: 6 }} />
                    <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#f97316' }}>
                        Raj Technologies
                    </span>
                </a>

                {/* Desktop Nav */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: 32,
                }}>
                    <ul style={{
                        display: 'flex', gap: 28, alignItems: 'center',
                        ...(window.innerWidth <= 768 ? { display: 'none' } : {})
                    }} className="desktop-nav">
                        {NAV_LINKS.map(link => (
                            <li key={link.href}>
                                <a href={link.href} style={{
                                    color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500,
                                    transition: 'color 0.2s',
                                }}
                                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle */}
                    <button onClick={toggleTheme} style={{
                        background: 'var(--surface)', border: '1px solid var(--border)',
                        borderRadius: '50%', width: 40, height: 40,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--text-primary)', transition: 'all 0.3s',
                    }}>
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    {/* Mobile Menu */}
                    <button onClick={() => setMobileOpen(!mobileOpen)} style={{
                        background: 'none', border: 'none', color: 'var(--text-primary)',
                        display: 'none',
                    }} className="mobile-menu-btn">
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Overlay */}
            {mobileOpen && (
                <div style={{
                    position: 'fixed', inset: 0, zIndex: 999,
                    background: 'var(--bg-primary)', paddingTop: 100,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
                }}>
                    {NAV_LINKS.map(link => (
                        <a key={link.href} href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: 600,
                            }}>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </>
    );
}
