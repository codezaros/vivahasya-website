import Hero from "../components/Hero/Hero";
import OurAesthetic from "../components/OurAesthetic/OurAesthetic";
import CelebrationScroll from "../components/CelebrationScroll/CelebrationScroll";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Inquiry from "../components/Inquiry/Inquiry";
import ContactFooter from "../components/ContactFooter/ContactFooter";

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

      <ContactFooter />
    </>
  );
}

export default Home;
