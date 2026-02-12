import "./OurAesthetic.css";

function OurAesthetic() {
  return (
    <section className="our-aesthetic">
      <div className="left">
        <div className="header">
          <h1 className="reveal delay-1">EVERY DETAIL,</h1>
          <h1 className="reveal delay-1">THOUGHTFULLY HANDLED</h1>
          <p className="reveal delay-2">Where timeless traditions meet breathtaking elegance.</p>
          <p className="reveal delay-2">Every detail, from the fragrant floral canopy to the gleaming brass, is meticulously crafted to tell your unique love story. Let Vivahasya design the perfect beginning to your forever.</p>
        </div>
        <div className="img-showcase">
          <div className="img img-a reveal delay-3"></div>
          <div className="img img-b reveal delay-3"></div>
          <div className="img img-c reveal delay-3"></div>
          <div className="img img-d reveal delay-3"></div>
        </div>

      </div>
      <div className="right">
        <div className="showcase2">
          <div className="content imgR reveal delay-3"></div>
          <div className="content textR">
            <h2 className="reveal delay-1">EVERY TRADITION DESERVES AN ELEGANT FRAME</h2>
            <p className="reveal delay-2">Every element is carefully curated so your traditions feel seamless, meaningful, and beautifully complete.</p>
          </div>
        </div>
        <div className="showcase3">
          <h2 className="reveal delay-1">DECOR THAT WHISPERS CULTURE, YET SHINES WITH GRACE.</h2>
          <p className="reveal delay-2">From sacred rituals to the finest finishing touches, every element is <span className="l-style">thoughtfully</span> designed to feel seamless and refined.
            We focus on harmony, proportion, and detail, ensuring each space reflects both cultural depth and visual elegance.
            Nothing is excessive, yet every moment feels complete and beautifully composed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurAesthetic;

