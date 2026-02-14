import "./OurAesthetic.css";

function OurAesthetic() {
  return (
    <section className="stories-section">
      <div className="stories-container">
        
        {/* LEFT SIDE: Text and Small Images */}
        <div className="stories-left">
          <span className="stories-label">Stories We Crafted</span>

          <h2 className="stories-heading">
            A GALLERY OF JOY AND<br /> ELEGANCE
          </h2>

          <p className="stories-desc">
            Experience the glimpse into the beautiful stories we had the
            privilege of crafting. Each event is a testament to our
            dedication to blending elegance with heartfelt emotion.
          </p>

          <div className="stories-small-grid">
            <div className="story-card">
              <div className="story-img img-1"></div>
              <h4 className="card-title">Sahana & Siddu</h4>
              <span className="card-location">Goa</span>
            </div>

            <div className="story-card">
              <div className="story-img img-2"></div>
              <h4 className="card-title">Satish & Keerthi</h4>
              <span className="card-location">Delhi</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Featured Big Image */}
        <div className="stories-right">
          <div className="story-big-img"></div>
        </div>

      </div>
    </section>
  );
}

export default OurAesthetic;