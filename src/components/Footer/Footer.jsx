import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-socials">
          <a href="https://github.com/SCodreanu" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/stefan-codreanu-000380366/" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Codreanu Stefan Tutti i diritti riservati. <br />
        </p>
        <p className="footer-text">Realizzato con React | HTML | CSS | JS</p>
      </div>
    </footer>
  );
};

export default Footer;
