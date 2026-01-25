import "./Navbar.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src="/vlogo.png" alt="Vivahasya wedding planners" />
                <div className="brand-text">
                    <span className="brand-name">Vivahasya Celebrations</span>
                    <span className="brand-tagline">Where Every Wedding Tells a Story</span>
                </div>
            </div>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li>About</li>
                <li><Link to="/PortfolioGallery">Our Portfolio</Link></li>
                <li>Contact</li>
            </ul>
            <Link to="/inquiry" className="nav-btn">
                LOG IN
            </Link>
        </nav>


    );
}

export default Nav;
