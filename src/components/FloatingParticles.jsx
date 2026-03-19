import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const generateParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 30; i++) {
                newParticles.push({
                    id: i,
                    initialX: Math.random() * 100,
                    initialY: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    duration: Math.random() * 15 + 10,
                    color: i % 3 === 0 ? '#0ea5e9' : i % 3 === 1 ? '#6366f1' : '#14b8a6'
                });
            }
            setParticles(newParticles);
        };
        generateParticles();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full opacity-20 blur-[1px]"
                    style={{
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        boxShadow: `0 0 10px ${p.color}`,
                        left: `${p.initialX}%`,
                        top: `${p.initialY}%`
                    }}
                    animate={{
                        y: [0, -200, 0],
                        x: [0, Math.random() * 100 - 50, 0],
                        opacity: [0.1, 0.4, 0.1],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
