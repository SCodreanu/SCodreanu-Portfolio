import './About.css';

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title">Chi sono</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Sono Stefan Codreanu e mi dedico allo sviluppo web, con un interesse particolare per React e la progettazione delle interfacce.</p>
            <p>Nel mio percorso formativo ho lavorato su concept, wireframe e mockup, trasformando le idee in prototipi con componenti riutilizzabili. Con EcoCycle ho sperimentato anche il collegamento tra un frontend React e un backend PHP con database MySQL locale.</p>
            <p>Il lavoro di gruppo mi ha permesso di esercitare collaborazione, comunicazione e coordinamento. Sono interessato a opportunità di lavoro, stage e collaborazioni in cui continuare a crescere e contribuire a progetti concreti.</p>
          </div>
          <img src="/img/profile_picture.webp" alt="Ritratto di Stefan Codreanu" className="about-image" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
