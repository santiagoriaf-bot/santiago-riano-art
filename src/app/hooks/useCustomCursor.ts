"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useCustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch.current) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.08, ease: 'power2.out' });
    };

    const handleMouseEnter = () => gsap.to(cursor, { opacity: 1, duration: 0.3 });
    const handleMouseLeave = () => gsap.to(cursor, { opacity: 0, duration: 0.3 });
    const handleHoverStart = () => cursor.classList.add('hover');
    const handleHoverEnd = () => cursor.classList.remove('hover');

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const hoverElements = document.querySelectorAll('[data-cursor="hover"]');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      cursor.remove();
    };
  }, []);

  return cursorRef;
};

export default useCustomCursor;