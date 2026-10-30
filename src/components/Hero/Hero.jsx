import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';
import TextTyper from './TextTyper';
import Greetings from './Greetings';

const roles = ['Sviluppo web con React', 'Progettazione di interfacce'];
export default function Hero() {
  const nameRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      gsap.fromTo(nameRef.current.querySelectorAll('.name-char'),
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out', stagger: 0.03 });
    }, nameRef);
    return () => context.revert();
  }, []);
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="greeting"><Greetings />Sono</p>
          <h1 className="name" ref={nameRef} aria-label="Stefan Codreanu">
            <span aria-hidden="true">{'Stefan Codreanu'.split('').map((char, index) => char === ' ' ? ' ' : <span className="name-char" key={index}>{char}</span>)}</span>
          </h1>
          <div className="description"><TextTyper texts={roles} pauseTime={1800} /></div>
          <p className="hero-intro">Trasformo idee e progetti didattici in interfacce web, dalla progettazione UX/UI ai componenti React.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" data-cursor="hover">Esplora i progetti</a>
            <a href="#contact" className="btn btn-outline" data-cursor="hover">Parliamone</a>
          </div>
        </div>
      </div>
      <div className="hero-bg-glow" aria-hidden="true"></div>
    </section>
  );
}
