import { motion } from "framer-motion";
import "./Hero.css";

function Hero({ introReady }) {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src=""
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-overlay"></div>

      <motion.h1
        className="hero-line"
        initial={{
          scale: 4,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}

        transition={{
          delay: 3,
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        Crafting stories worth remembering
      </motion.h1>

    </section>
  );
}

export default Hero;
