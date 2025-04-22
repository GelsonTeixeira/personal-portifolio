import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../Logo/logo";

function Navbar({theme, toggleTheme}) {
  return (
    <header>
      <div>
       <Logo />
      </div>
      <nav>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">About</Link>
          </li>
          <li>
            <Link to="/contato">Contact</Link>
          </li>
        <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;