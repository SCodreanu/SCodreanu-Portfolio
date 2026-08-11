import { IT, GB } from "country-flag-icons/react/3x2";
import { useState, useEffect } from "react";
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
        {/* FIX: Aggiunto aria-label al link del logo per dare un testo leggibile */}
        <a href="#home" className="logo" aria-label="Torna alla Home"></a>

        <ul className="nav-links">
          <li className="logo-img">
            <img src="/favicon.jpeg" alt="Logo Stefan Codreanu" />
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Chi Sono</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Progetti</a>
          </li>
          <li>
            <a href="#contact">Contattami</a>
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