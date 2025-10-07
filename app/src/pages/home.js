import "./reset.css";
import "./home.css";
import "./responsive.css";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import IntroSection from "../components/intro";
import FeaturesSection from "../components/featured";
import TrackDelivery from "../components/delivery";
import TrustedDelivery from "../components/trusted";
import InAppMessage from "../components/inApp";
import GetEstimate from "../components/estimate";
import ContactSection from "../components/contact";
import Footer from "../components/footer";


export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <IntroSection />
        <FeaturesSection />
        <TrackDelivery />
        <TrustedDelivery />
        <InAppMessage />
        <GetEstimate />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
