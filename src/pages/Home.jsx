import { motion } from "framer-motion";
import { fadeUp } from "../motion/animations";

import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import OurAesthetic from "../components/OurAesthetic/OurAesthetic";
import Testimonials from "../components/Testimonials/Testimonials";
import Inquiry from "../components/Inquiry/Inquiry";
import ContactFooter from "../components/ContactFooter/ContactFooter";

function Home() {
  return (
    <>
      <Hero />

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Services />
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <OurAesthetic />
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.section>

      <Inquiry />
      <ContactFooter />
    </>
  );
}

export default Home;
