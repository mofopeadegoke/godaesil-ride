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
  // Smooth scrolling function
  const smoothScrollTo = (target) => {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Add event listeners to the navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        smoothScrollTo(targetId);
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <IntroSection />
      <FeaturesSection />
      <TrackDelivery />
      <TrustedDelivery />
      <InAppMessage />
      <GetEstimate />
      <ContactSection />
      <Footer />
    </>
  );
}
