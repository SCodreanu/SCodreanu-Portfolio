import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Ecocycle",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      techs: ["React", "HTML5", "CSS3", "Javasript", "MySQL"],
      link: "#"
    },
    {
      title: "Restyling DV Formazione",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      techs: ["React", "HTML5", "CSS3", "Javasript"],
      link: "#"
    },
    {
      title: "Skyscanner Job Simulation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      techs: ["React", "HTML5", "CSS3", "Javasript", "BackPack"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-projects">
      <div className="container">
        <h2 className="section-title">I Miei Progetti</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-techs">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <a href={project.link} className="project-link" aria-label={`Vedi progetto ${project.title}`}>
                Vedi Progetto &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
