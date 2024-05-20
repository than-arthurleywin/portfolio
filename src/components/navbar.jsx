import "./navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToComponent = (componentName) => {
    const component = document.querySelector(`.${componentName}`);
    if (component) {
      component.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); 
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <a href="#">arthurL</a>
        </div>
        <div className="menu">
          <p>
            <a href="#hero" onClick={() => scrollToComponent("hero")}>
              Home
            </a>
          </p>
          <p>
            <a href="#about" onClick={() => scrollToComponent("about")}>
              About
            </a>
          </p>
          <p>
            <a href="#portfolio" onClick={() => scrollToComponent("portfolio")}>
              Portfolio
            </a>
          </p>
          <p>
            <a href="#contact" onClick={() => scrollToComponent("contact")}>
              Contact
            </a>
          </p>
        </div>
        <div className="menu-bar" onClick={toggleMobileMenu}>
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            size="sm"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0)",
              padding: 0,
            }}
          />
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="menu-mobile">
          <p>
            <a href="#hero" onClick={() => scrollToComponent("hero")}>
              Home
            </a>
          </p>
          <p>
            <a href="#about" onClick={() => scrollToComponent("about")}>
              About
            </a>
          </p>
          <p>
            <a href="#portfolio" onClick={() => scrollToComponent("portfolio")}>
              Portfolio
            </a>
          </p>
          <p>
            <a href="#contact" onClick={() => scrollToComponent("contact")}>
              Contact
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
