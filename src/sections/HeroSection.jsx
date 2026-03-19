import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
    return (
        <section id="home" style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center',
            position: 'relative', overflow: 'hidden',
            paddingTop: 'var(--nav-height)',
        }}>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: 'var(--surface)', border: '1px solid var(--border)',
                        borderRadius: 50, padding: '8px 20px', marginBottom: 28,
                        fontSize: '0.85rem', color: 'var(--accent)',
                    }}
                >
                    <Sparkles size={16} /> Trusted by 30+ Clients
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(2.2rem, 6vw, 4.2rem)',
                        fontWeight: 900, lineHeight: 1.1, marginBottom: 20,
                        maxWidth: 800, margin: '0 auto 20px',
                    }}
                >
                    Build, Grow & Scale Your Business with{' '}
                    <span style={{ color: '#f97316' }}>Raj Technologies</span>
                </motion.h1>

                {/* Sub */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.7,
                    }}
                >
                    Web Development • UI/UX Design • SEO Optimization • Hosting Solutions
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <a href="#contact" className="btn btn-primary">
                        Get Free Consultation <ArrowRight size={18} />
                    </a>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                        display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap',
                        marginTop: 60, paddingTop: 40,
                        borderTop: '1px solid var(--border)',
                    }}
                >
                    {[
                        { num: '30+', label: 'Projects Delivered' },
                        { num: '100%', label: 'Client Satisfaction' },
                        { num: '24/7', label: 'Support Available' },
                    ].map(s => (
                        <div key={s.label} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}>{s.num}</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
