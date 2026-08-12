import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';
import TextTyper from './TextTyper';
import Greetings from './Greetings';

const Hero = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    // Rispetta chi preferisce meno animazioni (accessibilità)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Spezza "Codreanu Stefan" in singoli caratteri (spazi esclusi) per animarli uno a uno
    const nameEl = nameRef.current;
    const originalText = nameEl.textContent;
    nameEl.innerHTML = originalText
      .split('')
      .map((char) =>
        char === ' '
          ? ' '
          : `<span class="name-char">${char}</span>`
      )
      .join('');

    gsap.fromTo(
      nameEl.querySelectorAll('.name-char'),
      { opacity: 0, y: 40, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.03,
      }
    );
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="greeting"><Greetings />mi presento sono</p>
          <h1 className="name" ref={nameRef}>Codreanu Stefan</h1>
          <p className="description">
            <TextTyper texts={["Web Developer", "App Developer", "UX/UI Designer"]} />
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" data-cursor="hover">I Miei Lavori</a>
            <a href="#about" className="btn btn-primary" data-cursor="hover">Scopri di Più</a>
          </div>
        </div>
      </div>
      <div className="hero-bg-glow"></div>
    </section>
  );
};

export default Hero;

