import "./reset.css";
import "./home.css";
import "./responsive.css";
import Navbar from "../components/navbar";
import IntroSection from "../components/intro";
import FeaturesSection from "../components/featured";
import TrackDelivery from "../components/delivery";
import TrustedDelivery from "../components/trusted";
import InAppMessage from "../components/inApp";
import GetEstimate from "../components/estimate";
import ContactSection from "../components/contact";
import Footer from "../components/footer";
import { SECTIONS } from "../constants/content";
import SectionComponent from "../components/sectionComponent";


export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <IntroSection />
        <FeaturesSection />
        {SECTIONS.map((x, index) => {
          <SectionComponent key={index} imgUrl={x.imgUrl} imgAlt={x.imgAlt} title={x.title} content={x.text}/>
        })}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
