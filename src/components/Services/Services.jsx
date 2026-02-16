  import { useEffect } from "react";
  import "./Services.css";

  function Services() {

    useEffect(() => {
      const cards = document.querySelectorAll(".card");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        { threshold: 0.2 }
      );

      cards.forEach((card) => observer.observe(card));
    }, []);

    return (
      <section className="services-section">
        <h1 className="section-title">WHY WE MATTER TO YOU.</h1>

        <div className="cards now">
          <div className="card">
            <h3>Destination Wedding</h3>
            <p>Your celebration is never dependent on third parties.</p>
          </div>

          <div className="card">
            <h3>Venue Consultation</h3>
            <p>We don’t box love into tiers.</p>
          </div>

          <div className="card ">
            <h3>Wedding Invitation</h3>
            <p>Each setting is uniquely imagined, never repeated.</p>
          </div>

          <div className="card   ">
            <h3>On-site Coordination</h3>
            <p>Curated for your taste, not a preset menu.</p>
          </div>

          <div className="card">
            <h3>Wedding Decor</h3>
            <p>Custom styling tailored to your vision.</p>
          </div>

          <div className="card">
            <h3>Bridal Makeup & Wardrobing</h3>
            <p>Elegance curated for your moment.</p>
          </div>

          <div className="card">
            <h3>Entertainment</h3>
            <p>Experiences designed to captivate your guests.</p>
          </div>

          <div className="card">
            <h3>Return Gifts</h3>
            <p>Thoughtful tokens that leave a lasting memory.</p>
          </div>

          <div className="card">
            <h3>Hospitality</h3>
            <p>Seamless care for every guest.</p>
          </div>

          <div className="card">
            <h3>Food & Beverages</h3>
            <p>Menus crafted around your taste.</p>
          </div>

          <div className="card">
            <h3>Photography & Cinematography</h3>
            <p>Stories captured with timeless elegance.</p>
          </div>
        </div>
      </section>
    );
  }

  export default Services;
