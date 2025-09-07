import { Link } from "react-router-dom";
import './logo.css'
import lightLogo from "../../assets/logo-dark.svg"
import darkLogo from "../../assets/logo-light.svg"
function Logo({ theme }) {
  return (
    <Link to="/personal-portifolio">
      <img src={theme === 'light' ? lightLogo : darkLogo} alt="Logo" />
    </Link>
  );
}
export default Logo