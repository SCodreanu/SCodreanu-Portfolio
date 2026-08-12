import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Stefan Codreanu. Tutti i diritti riservati.</p>
        <p className="footer-disclaimer">
          Sito personale a scopo rappresentativo e non commerciale. Nessuna attività d'impresa esercitata ai sensi dell'art. 35 DPR 633/72.
        </p>
        <div className="footer-links">
          <a href="public\policy\privacy-policy.html" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <span> | </span>
          <a href="public\policy\cookie-policy.html" target="_blank" rel="noopener noreferrer">
            Cookie Policy
          </a>
          <span> | </span>
          <a href="public\policy\accessibility.html" target="_blank" rel="noopener noreferrer">
            Dichiarazione di Accessibilità
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;