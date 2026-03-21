import { useState } from "react";
import { Link } from "react-router-dom";
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
            <ThemeToggle theme={theme} onCycle={cycleTheme} />
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
