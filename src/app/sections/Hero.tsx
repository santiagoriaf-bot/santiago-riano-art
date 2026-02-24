"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { heroConfig } from '../config';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleLeftRef = useRef<HTMLDivElement>(null);
  const titleRightRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleLeftRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }
      )
        .fromTo(
          titleRightRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 },
          '-=0.9'
        )
        .fromTo(
          '.hero-badge',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.hero-since',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          imageRef.current,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5 },
          '-=1'
        )
        .fromTo(
          '.hero-nav-link',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
          '-=0.8'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#8c8c91]"
    >
      <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <div className="flex gap-8">
          {heroConfig.navLinks.slice(0, 2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hero-nav-link text-xs tracking-[0.2em] text-[#f0f0f0] hover:opacity-70 transition-opacity uppercase font-light"
              data-cursor="hover"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-8">
          {heroConfig.navLinks.slice(2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hero-nav-link text-xs tracking-[0.2em] text-[#f0f0f0] hover:opacity-70 transition-opacity uppercase font-light"
              data-cursor="hover"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4">
        <div className="text-center mb-8">
          <div className="overflow-hidden">
            <h1
              ref={titleLeftRef}
              className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#f0f0f0] leading-none"
            >
              {heroConfig.brandLeft}
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              ref={titleRightRef}
              className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#f0f0f0] leading-none"
            >
              {heroConfig.brandRight}
            </h1>
          </div>
        </div>

        <div className="hero-badge mb-4">
          <span className="text-xs tracking-[0.2em] text-[#f0f0f0]/70 uppercase font-light">
            {heroConfig.badge}
          </span>
        </div>

        <div className="hero-since mb-12">
          <span className="text-xs tracking-[0.3em] text-[#f0f0f0]/50 uppercase font-light">
            {heroConfig.since}
          </span>
        </div>

        <div
          ref={imageRef}
          className="relative w-full max-w-md mx-auto aspect-[2/3]"
        >
          <img
            src={heroConfig.heroImage}
            alt={heroConfig.heroImageAlt}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="mt-12 max-w-lg text-center px-4">
          <p className="text-sm md:text-base text-[#f0f0f0]/80 font-light leading-relaxed">
            {heroConfig.tagline}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
        <div className="text-xs tracking-[0.1em] text-[#f0f0f0]/50 font-light">
          {heroConfig.copyrightText}
        </div>
        <div className="text-xs tracking-[0.1em] text-[#f0f0f0]/50 font-light">
          {heroConfig.email}
        </div>
      </div>
    </section>
  );
};

export default Hero;