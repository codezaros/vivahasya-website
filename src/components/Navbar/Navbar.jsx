import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Nav({ introReady }) {
  return (
    <motion.nav
      className="navbar"
      initial={{ x: -60, opacity: 0 }}
      animate={introReady ? { x: 0, opacity: 1 } : {}}
      transition={{
        delay: 1.5,
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="logo-container">
        <img src="/vlogo.png" alt="Vivahasya wedding planners" />
        <div className="brand-text">
          <span className="brand-name">Vivahasya Celebrations</span>
          <span className="brand-tagline">
            Where Every Wedding Tells a Story
          </span>
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
    </motion.nav>
  );
}

export default Nav;
