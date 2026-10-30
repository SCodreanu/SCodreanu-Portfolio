import './Projects.css';

const projects = [
  {
    id: 'ecocycle', title: 'EcoCycle', category: 'Progetto didattico · UX/UI e sviluppo React',
    description: 'Un concept per la gestione intelligente dei rifiuti, nato come proposta di crowdfunding nel corso di inglese e approfondito nei percorsi di UX/UI e React.',
    contribution: 'Ho sviluppato il percorso attraverso wireframe, design system e mockup, fino a un prototipo React con componenti riutilizzabili, stato e Context API. Registrazione e login si collegano a un backend PHP con database MySQL in ambiente locale XAMPP.',
    note: 'Prototipo didattico: IoT e intelligenza artificiale appartengono al concept, non alle funzionalità implementate.',
    techs: ['React', 'JavaScript', 'CSS', 'Context API', 'PHP', 'MySQL'],
  },
  {
    id: 'novaris', title: 'DV Formazione — Team Novaris', category: 'Project work di gruppo · Team leadership',
    description: 'Analisi e proposta di restyling del sito DV Formazione, svolte durante il percorso Learning by Project.',
    contribution: 'Come team leader del gruppo Novaris, ho partecipato a un progetto che comprendeva analisi del sito esistente, proposta UX/UI, design system e soluzioni per desktop e mobile. Un’esperienza di collaborazione, coordinamento e presentazione di una proposta condivisa.',
    note: 'Progetto didattico di gruppo. Il mio ruolo era quello di team leader; design e sviluppo sono risultati del lavoro del team.',
    techs: ['Analisi web', 'UX/UI', 'Responsive design', 'Teamwork'],
  },
  {
    id: 'skyscanner', title: 'Skyscanner — Front-End Engineering', category: 'Simulazione formativa · Forage',
    description: 'Un’esercitazione pratica su Forage per lavorare con React e Backpack, il design system di Skyscanner.',
    contribution: 'Partendo dalla repository fornita, ho composto piccoli elementi di un’interfaccia di prenotazione viaggi, tra cui tabelle, calendari e pulsanti, esercitandomi nell’utilizzo di componenti e convenzioni di una libreria esistente.',
    note: 'Simulazione formativa con attestato di completamento, svolta su Forage.',
    techs: ['React', 'Backpack', 'Componenti UI'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="section-title">Progetti e percorsi pratici</h2>
        <p className="projects-intro">Dalla progettazione alle interfacce: una selezione dei lavori con cui ho messo in pratica le mie competenze.</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card" aria-labelledby={`${project.id}-title`}>
              <p className="project-category">{project.category}</p>
              <h3 id={`${project.id}-title`} className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <details className="project-details">
                <summary>Il percorso e il mio contributo</summary>
                <p>{project.contribution}</p>
              </details>
              <ul className="project-techs" aria-label="Tecnologie e ambiti">
                {project.techs.map((tech) => <li key={tech} className="tech-tag">{tech}</li>)}
              </ul>
              <p className="project-note">{project.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
