import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Parliamo del prossimo progetto</h2>
        <div className="contact-content">
          <p className="contact-text">Hai un’opportunità di lavoro o stage, oppure un progetto da sviluppare insieme? Scrivimi: mi farà piacere conoscere la tua idea.</p>
          <a href="mailto:scodreanu.cs@gmail.com" className="btn btn-primary contact-btn">Scrivimi via email</a>
          <div className="contact-socials">
            <a href="https://github.com/SCodreanu" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/stefan-codreanu-000380366/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
