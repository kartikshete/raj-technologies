import React from 'react';
import { motion } from 'framer-motion';
import {
    Code, Palette, Search, Cloud,
    Briefcase, RefreshCw, Gauge, Layout
} from 'lucide-react';

const SERVICES = [
    {
        icon: Code, title: 'Web Development',
        desc: 'Custom websites built with HTML, CSS, JavaScript & React. Fast, modern, and fully responsive.',
        color: '#6c5ce7',
    },
    {
        icon: Palette, title: 'UI/UX Design',
        desc: 'Beautiful, user-friendly interfaces designed to delight your customers and boost engagement.',
        color: '#00cec9',
    },
    {
        icon: Search, title: 'SEO Optimization',
        desc: 'On-page & technical SEO to rank your website higher on Google and drive organic traffic.',
        color: '#fdcb6e',
    },
    {
        icon: Cloud, title: 'Hosting & Deployment',
        desc: 'Cloud-based hosting solutions with 99.9% uptime. We handle deployment so you focus on growth.',
        color: '#74b9ff',
    },
    {
        icon: Briefcase, title: 'Portfolio & Business Sites',
        desc: 'Professional portfolio and business websites that establish your brand identity online.',
        color: '#fd79a8',
    },
    {
        icon: RefreshCw, title: 'Website Redesign',
        desc: 'Transform your outdated website into a modern, fast, and conversion-optimized platform.',
        color: '#00b894',
    },
    {
        icon: Gauge, title: 'Performance Optimization',
        desc: 'Speed boost your website — faster load times, better Core Web Vitals, improved user experience.',
        color: '#e17055',
    },
    {
        icon: Layout, title: 'Landing Page Design',
        desc: 'High-conversion landing pages designed to capture leads and drive sales for your business.',
        color: '#a29bfe',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <p className="section-label">Our Services</p>
                    <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto 16px' }}>
                        Everything You Need to <span className="gradient-text">Go Digital</span>
                    </h2>
                    <p className="section-desc" style={{ margin: '0 auto' }}>
                        From development to deployment, we offer end-to-end digital solutions tailored to your business.
                    </p>
                </div>

                <div className="grid-4">
                    {SERVICES.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                className="glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                style={{ textAlign: 'center', padding: '36px 24px' }}
                            >
                                <div style={{
                                    width: 56, height: 56, borderRadius: 'var(--radius-md)',
                                    background: `${service.color}15`, display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 16px',
                                }}>
                                    <Icon size={24} style={{ color: service.color }} />
                                </div>
                                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 8 }}>
                                    {service.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                                    {service.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
