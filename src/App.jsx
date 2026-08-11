import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { SpeedInsights } from "@vercel/speed-insights/react";

const Skills = lazy(() => import('./components/Skills/Skills'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main id="main-content">
        <Hero />
        <About />
        <Suspense fallback={null}>
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>

      <SpeedInsights />
    </>
  );
};

export default App;