"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { footerConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-content', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: '.footer-content', start: 'top 90%' }});
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative bg-[#8c8c91] overflow-hidden">
      <div ref={marqueeRef} className="py-8 border-b border-[#f0f0f0]/10 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-6xl md:text-8xl font-light text-[#f0f0f0]/10 mx-8">{footerConfig.marqueeText}</span>
          <span className="text-6xl md:text-8xl font-light text-[#f0f0f0]/10 mx-8">{footerConfig.marqueeText}</span>
        </div>
      </div>
      <div className="footer-content py-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-light text-[#f0f0f0] mb-4 tracking-tight">{footerConfig.brandName}</h3>
              <p className="text-sm text-[#f0f0f0]/60 font-light leading-relaxed">{footerConfig.brandDescription}</p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] text-[#f0f0f0]/50 mb-6 uppercase font-light">{footerConfig.quickLinksTitle}</h4>
              <ul className="space-y-3">
                {footerConfig.quickLinks.map((link) => (
                  <li key={link.label}><a href={link.href} className="text-sm text-[#f0f0f0]/70 hover:text-[#f0f0f0] transition-colors duration-300 font-light uppercase tracking-wide" data-cursor="hover">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] text-[#f0f0f0]/50 mb-6 uppercase font-light">{footerConfig.contactTitle}</h4>
              <ul className="space-y-3">
                {footerConfig.contactItems.map((item, index) => <li key={index} className="text-sm text-[#f0f0f0]/70 font-light">{item}</li>)}
              </ul>
              <div className="flex gap-4 mt-6">
                {footerConfig.socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs text-[#f0f0f0]/50 hover:text-[#f0f0f0] transition-colors duration-300 font-light uppercase tracking-wide" data-cursor="hover">{link.label}</a>)}
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-[#f0f0f0]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#f0f0f0]/40 font-light">© 2024 Santiago Riaño. All rights reserved.</p>
            <div className="flex gap-6">
              {footerConfig.bottomLinks.map((link) => <a key={link.label} href={link.href} className="text-xs text-[#f0f0f0]/40 hover:text-[#f0f0f0]/70 transition-colors duration-300 font-light" data-cursor="hover">{link.label}</a>)}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;