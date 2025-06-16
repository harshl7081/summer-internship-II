'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  // Parallax handler
  function handleMouseMove(e: React.MouseEvent) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMouse({ x, y });
  }

  // Parallax transforms
  const float = (dx: number, dy: number) => `translate3d(${(mouse.x - 0.5) * dx}px, ${(mouse.y - 0.5) * dy}px, 0)`;

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Colorful Gradient Background */}
      <div className="fixed inset-0 -z-20 animate-gradient bg-gradient-to-br from-[#00c6fb] via-[#a21caf] to-[#f94892]" style={{
        background: 'linear-gradient(120deg, #00c6fb 0%, #a21caf 50%, #f94892 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientMove 8s ease-in-out infinite',
      }} />
      {/* Liquid Glass Background Shapes */}
      <div
        className="absolute top-1/4 left-1/5 w-[30vw] h-[12vw] rounded-[5vw] bg-white/40 border border-white/30 shadow-2xl blur-2xl"
        style={{ zIndex: 1, transform: float(-60, -30), transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)' }}
      />
      <div
        className="absolute top-2/3 left-1/3 w-[40vw] h-[14vw] rounded-[7vw] bg-gradient-to-r from-[#00c6fb]/40 to-[#f94892]/40 border border-white/20 shadow-xl blur-3xl"
        style={{ zIndex: 1, transform: float(80, 40), transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)' }}
      />
      <div
        className="absolute top-1/2 right-1/6 w-[22vw] h-[10vw] rounded-[5vw] bg-white/30 border border-white/20 shadow-xl blur-2xl"
        style={{ zIndex: 1, transform: float(-40, 60), transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)' }}
      />
      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 backdrop-blur-3xl bg-white/50 border border-white/20 rounded-[2.5rem] shadow-2xl px-16 py-10 flex items-center justify-center"
        style={{
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.12), 0 1.5px 8px 0 #fff8',
          WebkitBackdropFilter: 'blur(48px)',
          backdropFilter: 'blur(48px)',
          maxWidth: '95vw',
          transform: float(40, -40),
          transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
        }}
      >
        <span
          className="font-extrabold tracking-tight text-center font-sans w-full"
          style={{
            color: '#222',
            textShadow: '0 2px 8px #fff, 0 1px 0 #fff',
            fontSize: '7vw',
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            fontFamily: 'Inter, Sora, Space Grotesk, sans-serif',
            width: '100%',
            display: 'block',
          }}
        >
          Harsh Limbasiya
        </span>
      </motion.div>
      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </main>
  );
} 