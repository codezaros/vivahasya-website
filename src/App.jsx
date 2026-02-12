import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  /* Loader timer */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  /* Lenis Smooth Scroll */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // higher = more floaty
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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
