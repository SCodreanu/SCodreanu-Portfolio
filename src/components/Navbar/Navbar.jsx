import { IT, GB } from "country-flag-icons/react/3x2";
import { useState, useEffect } from "react";
import HoverLink from "../HoverLink/HoverLink";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("it");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="logo" aria-label="Torna alla Home"></a>

        <ul className="nav-links">
          <li className="logo-img">
            <img src="/favicon.jpeg" alt="Logo Stefan Codreanu" />
          </li>
          <li>
            <HoverLink href="#home">Home</HoverLink>
          </li>
          <li>
            <HoverLink href="#about">Chi Sono</HoverLink>
          </li>
          <li>
            <HoverLink href="#skills">Skills</HoverLink>
          </li>
          <li>
            <HoverLink href="#projects">Progetti</HoverLink>
          </li>
          <li>
            <HoverLink href="#contact">Contattami</HoverLink>
          </li>

          <li>
            <div className="language-toggle">
              <div
                className="custom-lang-select"
                onClick={() => setIsLangOpen(!isLangOpen)}
                role="button"
                tabIndex={0}
                aria-expanded={isLangOpen}
                aria-label="Seleziona lingua"
              >
                <div className="selected-lang">
                  {currentLang === "it" ? (
                    <IT
                      title="Italiano"
                      aria-hidden="true"
                      style={{ width: "30px", borderRadius: "4px" }}
                    />
                  ) : (
                    <GB
                      title="Inglese"
                      aria-hidden="true"
                      style={{ width: "30px", borderRadius: "4px" }}
                    />
                  )}
                </div>
                {isLangOpen && (
                  <div className="lang-options">
                    <div
                      className="lang-option"
                      onClick={() => {
                        setCurrentLang("it");
                        setIsLangOpen(false);
                      }}
                    >
                      <IT
                        title="Italiano"
                        aria-hidden="true"
                        style={{ width: "30px", borderRadius: "4px" }}
                      />
                    </div>
                    <div
                      className="lang-option"
                      onClick={() => {
                        setCurrentLang("en");
                        setIsLangOpen(false);
                      }}
                    >
                      <GB
                        title="Inglese"
                        aria-hidden="true"
                        style={{ width: "30px", borderRadius: "4px" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;