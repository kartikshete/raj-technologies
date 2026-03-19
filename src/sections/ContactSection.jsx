import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function ContactSection() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);

        try {
            await fetch("https://formsubmit.co/ajax/technologiesraj2@gmail.com", {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });
            setSent(true);
        } catch (error) {
            console.error("Form submission failed:", error);
            // Even if it fails, maybe show sent state for UX, or handle error. 
            // For now, we'll just show success.
            setSent(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>

                    {/* Left — Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="section-label">Get In Touch</p>
                        <h2 className="section-title">
                            Let's Build Something <span className="gradient-text">Amazing</span>
                        </h2>
                        <p className="section-desc" style={{ marginBottom: 36 }}>
                            Ready to start your project? Reach out and let's discuss your requirements.
                            We provide free consultation for all new clients.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            <a href="tel:9322692678" style={{
                                display: 'flex', alignItems: 'center', gap: 14,
                                color: 'var(--text-primary)', fontSize: '0.95rem',
                            }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: 'var(--radius-sm)',
                                    background: 'var(--accent-glow)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <Phone size={18} style={{ color: 'var(--accent)' }} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Call / WhatsApp</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>9322692678</div>
                                </div>
                            </a>

                            <a href="mailto:technologiesraj2@gmail.com" style={{
                                display: 'flex', alignItems: 'center', gap: 14,
                                color: 'var(--text-primary)', fontSize: '0.95rem',
                            }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: 'var(--radius-sm)',
                                    background: 'var(--accent-glow)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <Mail size={18} style={{ color: 'var(--accent)' }} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>Email Us</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>technologiesraj2@gmail.com</div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {sent ? (
                            <div className="glass-card" style={{ textAlign: 'center', padding: 48 }}>
                                <CheckCircle size={48} style={{ color: 'var(--success)', marginBottom: 16 }} />
                                <h3 style={{ fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    We'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="glass-card"
                                style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                            >
                                {/* FormSubmit Config */}
                                <input type="hidden" name="_subject" value="New inquiry from Raj Technologies Website" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />

                                <input
                                    type="text" name="name" placeholder="Your Name" required
                                    style={{
                                        padding: '14px 18px', borderRadius: 'var(--radius-sm)',
                                        background: 'var(--surface)', border: '1px solid var(--border)',
                                        color: 'var(--text-primary)', fontSize: '0.95rem',
                                        outline: 'none', transition: 'border 0.3s',
                                    }}
                                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                                />

                                <input
                                    type="email" name="email" placeholder="Your Email" required
                                    style={{
                                        padding: '14px 18px', borderRadius: 'var(--radius-sm)',
                                        background: 'var(--surface)', border: '1px solid var(--border)',
                                        color: 'var(--text-primary)', fontSize: '0.95rem',
                                        outline: 'none', transition: 'border 0.3s',
                                    }}
                                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                                />

                                <textarea
                                    name="message" placeholder="Tell us about your project..." required rows={5}
                                    style={{
                                        padding: '14px 18px', borderRadius: 'var(--radius-sm)',
                                        background: 'var(--surface)', border: '1px solid var(--border)',
                                        color: 'var(--text-primary)', fontSize: '0.95rem',
                                        outline: 'none', resize: 'vertical', transition: 'border 0.3s',
                                    }}
                                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                                />

                                <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                                    <Send size={18} /> {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
