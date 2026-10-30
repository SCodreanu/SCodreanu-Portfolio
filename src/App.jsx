import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import { SpeedInsights } from "@vercel/speed-insights/react";

const Skills = lazy(() => import('./components/Skills/Skills'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));

const App = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle('motion-inview', entry.isIntersecting);
        if (entry.isIntersecting) entry.target.classList.add('motion-entered');
      }
    }, { threshold: .12 });
    const observed = new WeakSet();
    const scan = () => document.querySelectorAll('.hero, .section-title, .project-card, .skill-category').forEach((element, index) => {
      if (observed.has(element)) return;
      observed.add(element);
      element.style.setProperty('--reveal-delay', `${index % 3 * 70}ms`);
      observer.observe(element);
    });
    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(document.getElementById('main-content'), { childList: true, subtree: true });
    return () => { observer.disconnect(); mutations.disconnect(); };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Vai al contenuto</a>
      <Cursor />
      <header>
        <Navbar />
      </header>

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
        <Suspense fallback={null}><Projects /></Suspense>
        <Suspense fallback={null}><Contact /></Suspense>
      </main>

      <Footer />

      <SpeedInsights />
    </>
  );
};

export default App;