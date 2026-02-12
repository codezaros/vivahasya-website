import "./Navbar.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/vlogo.png" alt="Vivahasya logo" />
        <span className="brand-name">Vivahasya</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/PortfolioGallery">Our Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <Link to="/inquiry" className="nav-btn">
        LOG IN
      </Link>
    </nav>
  );
}

export default Nav;
