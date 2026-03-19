import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
    {
        title: 'Kartik Portfolio',
        desc: 'A modern developer portfolio with dark mode, smooth animations, and project showcase.',
        tech: ['React', 'Framer Motion', 'CSS Modules'],
        color: '#6c5ce7',
    },
    {
        title: 'Student Helper AI',
        desc: 'AI-powered student assistant with career guidance, notes, and subject chat features.',
        tech: ['React', 'Gemini AI', 'Node.js'],
        color: '#00cec9',
    },
    {
        title: 'Shrimant Properties',
        desc: 'Real estate listing website with property search, filters, and contact integration.',
        tech: ['React', 'Vite', 'Responsive'],
        color: '#fdcb6e',
    },
    {
        title: 'Focus Flow',
        desc: 'Productivity app with task management, Pomodoro timer, and progress tracking.',
        tech: ['React', 'Express', 'MongoDB'],
        color: '#fd79a8',
    },
    {
        title: 'Krishi Scan',
        desc: 'Agricultural crop scanner with AI-based disease detection and multi-language support.',
        tech: ['React', 'AI/ML', 'REST API'],
        color: '#00b894',
    },
    {
        title: 'PDF Boss',
        desc: 'PDF management tool for viewing, merging, and organizing PDF documents easily.',
        tech: ['JavaScript', 'PDF.js', 'CSS'],
        color: '#e17055',
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <p className="section-label">Our Projects</p>
                    <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto 16px' }}>
                        Work That <span className="gradient-text">Speaks</span> for Itself
                    </h2>
                    <p className="section-desc" style={{ margin: '0 auto' }}>
                        A selection of projects we've delivered for our clients and personal ventures.
                    </p>
                </div>

                <div className="grid-3">
                    {PROJECTS.map((proj, i) => (
                        <motion.div
                            key={proj.title}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                        >
                            {/* Color Bar */}
                            <div style={{
                                height: 4, width: 40, borderRadius: 2,
                                background: proj.color,
                            }} />

                            <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                                {proj.title}
                            </h3>

                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, flex: 1 }}>
                                {proj.desc}
                            </p>

                            {/* Tech Tags */}
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                {proj.tech.map(t => (
                                    <span key={t} style={{
                                        padding: '4px 12px', borderRadius: 50,
                                        background: 'var(--surface)', border: '1px solid var(--border)',
                                        fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500,
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
