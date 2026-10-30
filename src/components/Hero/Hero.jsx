import './Hero.css';
import TextTyper from './TextTyper';
import Greetings from './Greetings';

const roles = ['Sviluppo web con React', 'Progettazione di interfacce'];
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="greeting"><Greetings />Sono</p>
          <h1 className="name" aria-label="Stefan Codreanu">
            <span aria-hidden="true">{'Stefan Codreanu'.split('').map((char, index) => char === ' ' ? ' ' : <span className="name-char" style={{ '--char-index': index }} key={index}>{char}</span>)}</span>
          </h1>
          <div className="description"><TextTyper texts={roles} pauseTime={1800} /></div>
          <p className="hero-intro">Trasformo idee e progetti didattici in interfacce web, dalla progettazione UX/UI ai componenti React.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" data-cursor="hover">Esplora i progetti</a>
            <a href="#contact" className="btn btn-outline" data-cursor="hover">Parliamone</a>
          </div>
        </div>
      </div>
      <div className="hero-bg-glow" aria-hidden="true">
        <svg className="hero-code-mark" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M35 35 20 50l15 15m30-30 15 15-15 15M58 25 42 75"/><circle cx="50" cy="50" r="46" strokeDasharray="2 8" /></svg>
      </div>
    </section>
  );
}
