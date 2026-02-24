"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { exhibitionsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Exhibitions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exhibitions-label',
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
        '.exhibitions-headline',
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

      const cards = gridRef.current?.querySelectorAll('.exhibit-card');
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: 0.3 + i * 0.15,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="exhibitions"
      className="relative py-32 px-8 lg:px-16 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="exhibitions-label text-xs tracking-[0.3em] text-[#8c8c91] mb-4 uppercase font-light">
            {exhibitionsConfig.label}
          </p>
          <h2 className="exhibitions-headline text-4xl md:text-5xl lg:text-6xl font-light text-[#f0f0f0]">
            {exhibitionsConfig.headline}
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {exhibitionsConfig.exhibitions.map((exhibit) => {
            const cardContent = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={exhibit.image}
                    alt={exhibit.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8">
                  <p className="text-white/50 mb-2 text-[10px] tracking-[0.15em] uppercase font-light">{exhibit.date}</p>
                  <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-light">
                    {exhibit.title}
                  </h3>
                </div>

                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
              </>
            );

            return exhibit.link ? (
              <Link
                key={exhibit.id}
                href={exhibit.link}
                className="exhibit-card group relative overflow-hidden will-change-transform block"
                data-cursor="hover"
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={exhibit.id}
                className="exhibit-card group relative overflow-hidden will-change-transform"
                data-cursor="hover"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;