import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../Logo/logo";

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div>
        <Logo theme={theme} />
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      </div>
      <nav className={isMenuOpen ? "open" : ""}>
        <ol>
          <li>
            <Link to="/personal-portifolio/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/hireme">Hire Me</Link>
          </li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;