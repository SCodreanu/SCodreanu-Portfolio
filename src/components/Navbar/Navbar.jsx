import { useState, useEffect } from 'react';
import HoverLink from '../HoverLink/HoverLink';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Navigazione principale">
      <div className="nav-container">
        <ul className="nav-links">
          <li className="logo-img"><a href="#home" aria-label="Stefan Codreanu — torna all’inizio"><img src="/favicon.jpeg" alt="" width="40" height="40" /></a></li>
          <li><HoverLink href="#home">Home</HoverLink></li>
          <li><HoverLink href="#about">Chi sono</HoverLink></li>
          <li><HoverLink href="#skills">Competenze</HoverLink></li>
          <li><HoverLink href="#projects">Progetti</HoverLink></li>
          <li><HoverLink href="#contact">Contatti</HoverLink></li>
        </ul>
      </div>
    </nav>
  );
}
