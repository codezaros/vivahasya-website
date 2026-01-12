import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Inquiry from "../components/Inquiry/Inquiry";
import ContactFooter from "../components/ContactFooter/ContactFooter";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Inquiry />
      <ContactFooter />
    </>
  );
}

export default Home;
