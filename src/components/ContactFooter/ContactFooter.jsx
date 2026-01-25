import "./ContactFooter.css";

function ContactFooter() {
  const year = new Date().getFullYear();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="wrapper">
      <div className="footer">
        <div className="footer-container">
          {/* Column 1 */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, "about")}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScroll(e, "services")}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3>Get in touch</h3>
            <p>
              Email:{" "}
              <a href="mailto:hello@company.com">hello@company.com</a>
            </p>
            <p>
              Phone: <a href="tel:+91XXXXXXXX">+91 XXXXXXXX</a>
            </p>
            <p>Location: Bangalore</p>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3>Social Media</h3>
            <p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Vivahasya Celebrations</p>
          <p>
            <a href="#privacy" onClick={(e) => handleScroll(e, "privacy")}>
              Privacy
            </a>{" "}
            ·{" "}
            <a href="#terms" onClick={(e) => handleScroll(e, "terms")}>
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>

  );
}

export default ContactFooter;
