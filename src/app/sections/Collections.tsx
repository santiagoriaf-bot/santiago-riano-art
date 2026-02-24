"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { collectionsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Collections = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.collections-label', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }});
      gsap.fromTo('.collections-headline', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }});
      gsap.fromTo('.collection-card', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.4, scrollTrigger: { trigger: '.collections-grid', start: 'top 85%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="collections" className="relative py-32 px-8 lg:px-16 bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="collections-label text-xs tracking-[0.3em] text-[#8c8c91] mb-4 uppercase font-light">{collectionsConfig.label}</p>
          <h2 className="collections-headline text-4xl md:text-5xl lg:text-6xl font-light text-[#050505]">{collectionsConfig.headline}</h2>
        </div>
        <div className="collections-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionsConfig.collections.map((collection) => (
            <div key={collection.id} className="collection-card group cursor-pointer" data-cursor="hover">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img src={collection.image} alt={collection.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] text-[#8c8c91] mb-2 uppercase font-light">{collection.year}</p>
                <h3 className="text-xl font-light text-[#050505] mb-3 group-hover:text-[#8c8c91] transition-colors duration-300">{collection.title}</h3>
                <p className="text-sm text-[#050505]/60 font-light leading-relaxed">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;