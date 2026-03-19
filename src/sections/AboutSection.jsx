import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, Users } from 'lucide-react';

const HIGHLIGHTS = [
    { icon: Target, title: 'Results-Driven', desc: 'We focus on delivering measurable outcomes' },
    { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
    { icon: Shield, title: 'Reliable', desc: '100% client satisfaction guaranteed' },
    { icon: Users, title: 'Direct Support', desc: 'Personal communication, no middlemen' },
];

export default function AboutSection() {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="section-label">About Us</p>
                        <h2 className="section-title">
                            We Build <span style={{ color: 'var(--text-primary)' }}>Digital Presence</span> That Converts
                        </h2>
                        <p className="section-desc" style={{ marginBottom: 24 }}>
                            Raj Technologies is a results-driven freelance tech brand helping businesses build a strong digital presence.
                            We specialize in creating fast, modern, and scalable websites with a focus on performance, SEO, and user experience.
                        </p>
                        <p className="section-desc">
                            Helping brands grow digitally with modern, fast & SEO-optimized websites 🚀
                        </p>
                    </motion.div>

                    {/* Right - Highlights Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
                    >
                        {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="glass-card" style={{ padding: 24 }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: 'var(--radius-sm)',
                                    background: 'var(--accent-glow)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center', marginBottom: 12,
                                }}>
                                    <Icon size={20} style={{ color: 'var(--accent)' }} />
                                </div>
                                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>{title}</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
