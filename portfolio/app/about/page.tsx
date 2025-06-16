'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Animated Colorful Gradient Background */}
      <div className="fixed inset-0 -z-20 animate-gradient bg-gradient-to-br from-[#00c6fb] via-[#a21caf] to-[#f94892]" style={{
        background: 'linear-gradient(120deg, #00c6fb 0%, #a21caf 50%, #f94892 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientMove 8s ease-in-out infinite',
      }} />
      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 backdrop-blur-3xl bg-white/50 border border-white/20 rounded-[2.5rem] shadow-2xl px-12 py-10 flex flex-col items-center justify-center"
        style={{
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.12), 0 1.5px 8px 0 #fff8',
          WebkitBackdropFilter: 'blur(48px)',
          backdropFilter: 'blur(48px)',
          maxWidth: '90vw',
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 text-[#222]">About Harsh Limbasiya</h1>
        <p className="text-lg md:text-2xl text-center text-[#333] max-w-2xl mb-8">
          I am a passionate developer and designer focused on building beautiful, high-performance web apps. I love turning ideas into reality with code and design. Always learning, always building.
        </p>
        <Link href="/" className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#00c6fb] to-[#a21caf] text-white font-bold shadow hover:from-[#a21caf] hover:to-[#f94892] transition-all">← Back</Link>
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