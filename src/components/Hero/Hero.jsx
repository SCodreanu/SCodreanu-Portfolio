import './Hero.css';
import TextTyper from './TextTyper';
import Greetings from './Greetings';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="greeting"><Greetings />mi presento sono</p>
          <h1 className="name">Codreanu Stefan</h1>
          <p className="description">
            <TextTyper texts={["Web Developer", "App Developer", "UX/UI Designer"]} />
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">I Miei Lavori</a>
            <a href="#about" className="btn btn-primary">Scopri di Più</a>
          </div>
        </div>
      </div>
      <div className="hero-bg-glow"></div>
    </section>
  );
};

export default Hero;

