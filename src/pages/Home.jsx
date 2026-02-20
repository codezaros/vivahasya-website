import Hero from "../components/Hero/Hero";
import OurAesthetic from "../components/OurAesthetic/OurAesthetic";
import CelebrationScroll from "../components/CelebrationScroll/CelebrationScroll";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Inquiry from "../components/Inquiry/Inquiry";
import ContactFooter from "../components/ContactFooter/ContactFooter";
import Faq from "../components/Faq/faq.jsx";

function Home() {
  return (
    <>
      <Hero />

      <OurAesthetic />

      {/* Horizontal Wedding Gallery */}
      <CelebrationScroll />

      <Services />

      <Testimonials />

      <Inquiry />
      <Faq />

      <ContactFooter />
    </>
  );
}

export default Home;
