import { Link } from "react-router-dom";
import './logo.css'
import logo from "./logo-nome.png"
function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  );
}
export default Logo