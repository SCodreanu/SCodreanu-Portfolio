import { useEffect, useRef } from 'react';
import './Cursor.css';


const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cursor = cursorRef.current;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    let rafId;

    const handleMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    const loop = () => {
      const delay = 6;
      cursorPos.x += (mousePos.x - cursorPos.x) / delay;
      cursorPos.y += (mousePos.y - cursorPos.y) / delay;
      cursor.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(loop);

    const hoverTargets = document.querySelectorAll('[data-cursor="hover"]');
    const handleEnter = () => cursor.classList.add('cursor-hover');
    const handleLeave = () => cursor.classList.remove('cursor-hover');

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef} aria-hidden="true"></div>;
};

export default Cursor;
