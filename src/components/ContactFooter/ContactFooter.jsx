import "./ContactFooter.css";

function ContactFooter() {
  return (
    <footer className="wrapper">
      <div className="grid-container">
        
        {/* Logo Section */}
        <div className="logo-header">
          <h1>VIVAHASYA</h1>
          <h4>
            ITI Employees Layout, Annapurneshwari Nagar,
            Bengaluru, Karnataka 560091, Bangalore, India, 560091
          </h4>
        </div>

        {/* Reach Button */}
        <div className="reach">
          <button>Reach Us</button>
        </div>

        {/* Contact Info */}
        <div className="contact">
          <p>daretolapafwrd@gmail.com</p>
          <p>+91 1203495093</p>
        </div>

        {/* Socials */}
        <div className="socials">
          <p>Instagram</p>
          <p>Facebook</p>
        </div>

        {/* Footer Bottom */}
        <div className="copyright">
          © 2026 Vivahasya
        </div>

        <div className="privacy">
          Privacy Terms
        </div>

      </div>
    </footer>
  );
}

export default ContactFooter;
