import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contatti</h2>
        <div className="contact-content">
          <p className="contact-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="mailto:scodreanu.cs@gmail.com" className="btn btn-primary contact-btn">
            Contattami ora!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
