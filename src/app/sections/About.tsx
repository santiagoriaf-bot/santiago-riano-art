"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-label',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.about-headline',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.about-description',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-8 lg:px-16 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="about-label text-xs tracking-[0.3em] text-[#8c8c91] mb-4 uppercase font-light">
              {aboutConfig.label}
            </p>
            <div className="w-16 h-px bg-[#8c8c91]/40" />
          </div>
          <div className="lg:col-span-8 space-y-8">
            <h2 className="about-headline text-4xl md:text-5xl lg:text-6xl font-light text-[#f0f0f0] leading-tight">
              {aboutConfig.headline}
            </h2>
            <p className="about-description text-lg md:text-xl text-[#f0f0f0]/70 leading-relaxed font-light max-w-3xl">
              {aboutConfig.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;