import { Suspense, lazy } from 'react';
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
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Footer />

      <SpeedInsights />
    </>
  );
};

export default App;