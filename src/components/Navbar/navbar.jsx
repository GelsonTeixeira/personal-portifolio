import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../Logo/logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar({ theme, cycleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div>
        <Logo theme={theme} />
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      </div>
      <nav className={isMenuOpen ? "open" : ""}>
        <ol>
          <li>
            <NavLink to="/personal-portifolio/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/hireme">Hire Me</NavLink>
          </li>
          <li>
            <NavLink to="/timeline">Timeline</NavLink>
          </li>
          <li>
            <ThemeToggle theme={theme} onCycle={cycleTheme} />
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
