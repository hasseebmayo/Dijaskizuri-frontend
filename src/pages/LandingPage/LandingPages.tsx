import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Contact from "./Contactus/Contact";
import Gallery from "./Gallery/Gallery";
import { HeroSection } from "./HeroSection/HeroSection";
import ParentsSection from "./Parents/Parents";
import PartnersMain from "./Partners/PartnersMain";
import StudentsSection from "./Students/StudentsSection";

const LandingPages = () => {
  return (
    <div className="landing-pages-main">
      <Header />
      <HeroSection />
      <Gallery />
      <StudentsSection />
      <ParentsSection />
      <Contact />
      <PartnersMain />
      <Footer />
    </div>
  );
};

export default LandingPages;
