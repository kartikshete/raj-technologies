import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
    {
        name: 'Amit Patil',
        role: 'Business Owner',
        text: 'Amazing work! My website looks professional and fast. Raj Technologies delivered beyond expectations.',
        stars: 5,
    },
    {
        name: 'Priya Sharma',
        role: 'Startup Founder',
        text: 'Highly recommended for web development projects. Clean code, great communication, and on-time delivery.',
        stars: 5,
    },
    {
        name: 'Rahul Mehta',
        role: 'Freelancer',
        text: 'Best freelancer for modern UI design. The dark mode toggle and animations are top-notch!',
        stars: 5,
    },
];

export default function ReviewsSection() {
    return (
        <section id="reviews" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <p className="section-label">Testimonials</p>
                    <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto 16px' }}>
                        What Our <span className="gradient-text">Clients</span> Say
                    </h2>
                </div>

                <div className="grid-3">
                    {REVIEWS.map((review, i) => (
                        <motion.div
                            key={i}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.15 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                        >
                            <Quote size={24} style={{ color: 'var(--accent)', opacity: 0.5 }} />

                            <p style={{
                                color: 'var(--text-secondary)', fontSize: '0.95rem',
                                lineHeight: 1.7, flex: 1, fontStyle: 'italic',
                            }}>
                                "{review.text}"
                            </p>

                            {/* Stars */}
                            <div style={{ display: 'flex', gap: 4 }}>
                                {Array.from({ length: review.stars }).map((_, j) => (
                                    <Star key={j} size={16} fill="#fdcb6e" color="#fdcb6e" />
                                ))}
                            </div>

                            {/* Author */}
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{review.name}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{review.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
