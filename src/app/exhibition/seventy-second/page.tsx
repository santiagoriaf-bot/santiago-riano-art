"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import useLenis from '../../hooks/useLenis';
import useCustomCursor from '../../hooks/useCustomCursor';

gsap.registerPlugin(ScrollTrigger);

export default function SeventySecondExhibition() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useLenis();
  useCustomCursor();

  useEffect(() => { window.scrollTo(0, 0); ScrollTrigger.refresh(); }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        triggersRef.current.push(ScrollTrigger.create({
          trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true,
          onUpdate: (self) => {
            const img = heroRef.current?.querySelector('.hero-bg');
            if (img) gsap.set(img, { y: self.progress * 200, scale: 1 + self.progress * 0.15 });
          },
        }));
      }
      document.querySelectorAll('.reveal').forEach((el) => {
        gsap.set(el, { opacity: 0, y: 50 });
        triggersRef.current.push(ScrollTrigger.create({ trigger: el, start: 'top 85%', onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }), once: true }));
      });
      document.querySelectorAll('.gallery-item').forEach((item, i) => {
        gsap.set(item, { opacity: 0, y: 80 });
        triggersRef.current.push(ScrollTrigger.create({ trigger: item, start: 'top 90%', onEnter: () => gsap.to(item, { opacity: 1, y: 0, duration: 1, delay: i * 0.1, ease: 'power3.out' }), once: true }));
      });
    }, mainRef);
    return () => { triggersRef.current.forEach((t) => t.kill()); triggersRef.current = []; ctx.revert(); };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#050505] text-[#f0f0f0]">
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
        <Link href="/" className="text-[#f0f0f0] hover:opacity-70 transition-opacity" data-cursor="hover"><ArrowLeft className="w-6 h-6" /></Link>
        <span className="text-xs tracking-[0.3em] text-[#f0f0f0] uppercase font-light">Santiago Riaño</span>
        <div className="w-6" />
      </nav>

      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/seventy-second/seventy_003.png" alt="Seventy Second and Zero" className="hero-bg w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/30 to-[#050505]" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs tracking-[0.3em] text-[#f0f0f0]/60 mb-6 reveal uppercase font-light">Exhibition — 2024</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] mb-2 reveal">SEVENTY SECOND</h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] mb-8 reveal">AND ZERO</h1>
            <p className="text-lg text-[#f0f0f0]/70 max-w-md reveal font-light">"La Cumbrera"</p>
            <p className="text-sm text-[#f0f0f0]/50 mt-3 reveal font-light tracking-wide">Bogotá, Colombia</p>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-16 py-32 border-t border-[#8c8c91]/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-[#8c8c91] mb-6 reveal uppercase font-light">Exhibition</p>
          <h2 className="text-5xl md:text-6xl font-light mb-12 reveal tracking-tight">Seventy Second and Zero</h2>
          <Link href="/" className="inline-block px-10 py-4 border border-[#f0f0f0]/30 text-[#f0f0f0] text-sm tracking-[0.2em] uppercase hover:bg-[#f0f0f0] hover:text-[#050505] transition-all duration-500 reveal font-light" data-cursor="hover">Back to Home</Link>
        </div>
      </section>
    </div>
  );
}