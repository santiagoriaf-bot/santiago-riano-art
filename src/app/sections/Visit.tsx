"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Calendar, Ticket } from 'lucide-react';
import { visitConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { MapPin, Clock, Calendar, Ticket };

const Visit = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.visit-label', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }});
      gsap.fromTo('.visit-headline', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }});
      gsap.fromTo('.visit-card', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.4, scrollTrigger: { trigger: '.visit-cards', start: 'top 85%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 px-8 lg:px-16 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="visit-label text-xs tracking-[0.3em] text-[#8c8c91] mb-4 uppercase font-light">{visitConfig.label}</p>
          <h2 className="visit-headline text-4xl md:text-5xl lg:text-6xl font-light text-[#f0f0f0]">{visitConfig.headline}</h2>
          <p className="mt-6 text-lg text-[#f0f0f0]/60 font-light max-w-2xl mx-auto">{visitConfig.description}</p>
        </div>
        <div className="visit-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {visitConfig.infoCards.map((card, index) => {
            const IconComponent = iconMap[card.icon];
            return (
              <div key={index} className="visit-card p-8 border border-[#8c8c91]/20 text-center group hover:border-[#8c8c91]/50 transition-colors duration-300" data-cursor="hover">
                {IconComponent && <IconComponent className="w-6 h-6 mx-auto mb-4 text-[#8c8c91]" />}
                <h3 className="text-sm tracking-[0.15em] text-[#f0f0f0] mb-3 uppercase font-light">{card.title}</h3>
                <p className="text-[#f0f0f0]/60 font-light" dangerouslySetInnerHTML={{ __html: card.content }} />
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <a href={`mailto:${visitConfig.infoCards.find(c => c.title === 'Inquiries')?.content}`} className="inline-block px-10 py-4 border border-[#f0f0f0]/30 text-[#f0f0f0] text-sm tracking-[0.2em] uppercase hover:bg-[#f0f0f0] hover:text-[#050505] transition-all duration-500 font-light" data-cursor="hover">{visitConfig.ctaText}</a>
        </div>
      </div>
    </section>
  );
};

export default Visit;