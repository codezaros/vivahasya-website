import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Loader from "./components/Loader/Loader";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  /* Loader timer */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2700);
    return () => clearTimeout(timer);
  }, []);

  /* Lenis + GSAP Sync */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
    });

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading && <Loader />}

      <BrowserRouter>
        <Navbar introReady={!loading} />
        <Routes>
          <Route path="/" element={<Home introReady={!loading} />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;