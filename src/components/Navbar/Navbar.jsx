import { IT, GB } from 'country-flag-icons/react/3x2'
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('it');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo"></a>
        <ul className="nav-links">
          <li className='logo-img'><img src="/src/assets/img/favicon.jpeg" alt="logo" /></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Chi Sono</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Progetti</a></li>
          <li><a href="#contact">Contattami</a></li>
          <div className='language-toggle'>
            <div className="custom-lang-select" onClick={() => setIsLangOpen(!isLangOpen)}>
              <div className="selected-lang">
                {currentLang === 'it' ? <IT title="Italiano" style={{ width: '30px', borderRadius: '4px' }} /> : <GB title="Inglese" style={{ width: '30px', borderRadius: '4px' }} />}
              </div>
              {isLangOpen && (
                <div className="lang-options">
                  <div className="lang-option" onClick={() => { setCurrentLang('it'); setIsLangOpen(false); }}>
                    <IT title="Italiano" style={{ width: '30px', borderRadius: '4px' }} />
                  </div>
                  <div className="lang-option" onClick={() => { setCurrentLang('en'); setIsLangOpen(false); }}>
                    <GB title="Inglese" style={{ width: '30px', borderRadius: '4px' }} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
