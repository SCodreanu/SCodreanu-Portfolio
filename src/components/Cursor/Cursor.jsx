import { useEffect, useRef } from 'react';
import './Cursor.css';

const interactiveSelector = 'a, button, summary, input, select, textarea, [role="button"], [data-cursor="hover"]';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia('(any-pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const position = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let frame = null;
    let visible = false;

    const draw = () => {
      cursor.style.transform = `translate(${position.x}px, ${position.y}px)`;
    };

    const animate = () => {
      frame = null;
      if (!visible) return;
      if (reducedMotion.matches) {
        position.x = target.x;
        position.y = target.y;
      } else {
        position.x += (target.x - position.x) / 6;
        position.y += (target.y - position.y) / 6;
      }
      draw();
      if (Math.abs(target.x - position.x) > 0.1 || Math.abs(target.y - position.y) > 0.1) {
        frame = requestAnimationFrame(animate);
      }
    };

    const hide = () => {
      visible = false;
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      cursor.classList.remove('cursor-visible', 'cursor-hover');
      document.documentElement.classList.remove('custom-cursor-active');
    };

    const move = (event) => {
      if (!finePointer.matches || event.pointerType !== 'mouse') {
        hide();
        return;
      }
      target.x = event.clientX;
      target.y = event.clientY;
      if (!visible || reducedMotion.matches) {
        position.x = target.x;
        position.y = target.y;
        draw();
      }
      visible = true;
      cursor.classList.add('cursor-visible');
      document.documentElement.classList.add('custom-cursor-active');
      cursor.classList.toggle('cursor-hover', event.target instanceof Element && Boolean(event.target.closest(interactiveSelector)));
      if (frame === null && !reducedMotion.matches) frame = requestAnimationFrame(animate);
    };

    const changePreferences = () => {
      if (!finePointer.matches) hide();
      else if (visible) {
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
        animate();
      }
    };

    const leave = (event) => {
      if (event.relatedTarget === null) hide();
    };

    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerout', leave);
    window.addEventListener('blur', hide);
    finePointer.addEventListener('change', changePreferences);
    reducedMotion.addEventListener('change', changePreferences);
    return () => {
      hide();
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerout', leave);
      window.removeEventListener('blur', hide);
      finePointer.removeEventListener('change', changePreferences);
      reducedMotion.removeEventListener('change', changePreferences);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef} aria-hidden="true" />;
}
