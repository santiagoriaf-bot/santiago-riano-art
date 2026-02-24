"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonialsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-quote', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }});
      gsap.fromTo('.testimonial-author', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-8 lg:px-16 bg-[#8c8c91]">
      <div className="max-w-5xl mx-auto text-center">
        <blockquote className="testimonial-quote text-2xl md:text-3xl lg:text-4xl font-light text-[#f0f0f0] leading-relaxed mb-12">"{testimonialsConfig.quote}"</blockquote>
        <div className="testimonial-author flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
            <img src={testimonialsConfig.authorImage} alt={testimonialsConfig.authorName} className="w-full h-full object-cover" />
          </div>
          <p className="text-lg font-light text-[#f0f0f0]">{testimonialsConfig.authorName}</p>
          <p className="text-sm text-[#f0f0f0]/60 font-light">{testimonialsConfig.authorTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;