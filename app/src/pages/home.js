import "./reset.css";
import "./home.css";
import "./responsive.css";
import introImgOne from "../assets/introImg1.png";
import introImgTwo from "../assets/introImg2.png";
import cashIcon from "../assets/cash_icon.png";
import messageIcon from "../assets/message_icon.png";
import packageIcon from "../assets/package_icon.png";
import sendIcon from "../assets/send_icon.png";
import customerServiceIcon from "../assets/customer_service_icon.png";
import trackDeliveryIcon from "../assets/trackDelivery_iphone.png";
import getEstimateImg from "../assets/get_estimate.png";
import inAppMessageImg from "../assets/inApp_message.png";
import trustedDeliveryImg from "../assets/trusted_delivery.png";
import Navbar from "../components/navbar";
import Button from "../components/button";
import Card from "../components/card";
import { useEffect } from "react";

function IntroSection() {
  return (
    <>
      <article className="introSection" id="about">
        <article className="text">
          <h1>Delivery made Easier, Better and Faster</h1>
          <p>
            We pride ourselves on delivering excellence every mile. With our
            intuitive app, managing shipments and tracking deliveries.
          </p>
          <a href="#contact">
            <Button value="Book Demo" />
          </a>
          <a href="#contact">
            <Button value="Join Waitlist" />
          </a>
        </article>
        <article className="images">
          <img
            src={introImgOne}
            alt="An Iphone 14 on a user's dashboard of the Godaesil-ride app"
          />
          <img
            src={introImgTwo}
            alt="The Godaesil-ride's logo on a yellow rectangular background"
          />
        </article>
      </article>
      <marquee direction="right">
        Coming Soon &nbsp;&nbsp;&nbsp;&nbsp; Coming Soon
        &nbsp;&nbsp;&nbsp;&nbsp; Coming Soon &nbsp;&nbsp;&nbsp;&nbsp; Coming
        Soon &nbsp;&nbsp;&nbsp;&nbsp; Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;
        Coming Soon &nbsp;&nbsp;&nbsp;&nbsp; Coming Soon
        &nbsp;&nbsp;&nbsp;&nbsp; Coming Soon &nbsp;&nbsp;&nbsp;&nbsp; Coming
        Soon
      </marquee>
    </>
  );
}

function FeaturesSection() {
  return (
    <>
      <article className="featuresSection" id="features">
        <h2>
          <span className="orangeTxt">Fe</span>atures
        </h2>
        <article className="content">
          <Card
            imgUrl={cashIcon}
            imgAltText="Cash icon"
            title="Get Estimate"
            text="Get an estimate of the cost to make a delivery."
          />
          <Card
            imgUrl={packageIcon}
            imgAltText="Package icon"
            title="Deliver a Package"
            text="Deliver your packages from anywhere."
          />
          <Card
            imgUrl={messageIcon}
            imgAltText="Messages icon"
            title="In-app Message"
            text="Chat with your courier to be constantly updated."
          />
          <Card
            imgUrl={customerServiceIcon}
            imgAltText="Customer service icon"
            title="Customer Care"
            text="Get in touch with the customer care service representative."
          />
          <Card
            imgUrl={sendIcon}
            imgAltText="Send icon"
            title="Real-time Track"
            text="With Godaesil Ride, you can track your deliveries in real-time."
          />
        </article>
      </article>
    </>
  );
}

function TrackDelivery() {
  return (
    <>
      <article className="trackDeliverySection">
        <img src={trackDeliveryIcon} alt="An Iphone 14 on google maps" />
        <article className="text">
          <p className="title">Track Deliveries in Real-time</p>
          <p>
            Stay in control with our real-time delivery tracking. Know where
            your order is and when it will arrive, ensuring a seamless
            experience.
          </p>
        </article>
      </article>
    </>
  );
}

function TrustedDelivery() {
  return (
    <>
      <article className="trustedDelivery">
        <img
          src={trustedDeliveryImg}
          alt="An Iphone 14 on google maps about to give a rating"
        />
        <article className="text">
          <p className="title">Trusted Delivery Services</p>
          <p>
            Trust our reliable delivery services for peace of mind. We
            prioritize safety and efficiency to ensure your packages are in good
            hands.
          </p>
        </article>
      </article>
    </>
  );
}

function InAppMessage() {
  return (
    <>
      <article className="inAppMessage">
        <img src={inAppMessageImg} alt="An Iphone 14 on a messaging platform" />
        <article className="text">
          <p className="title">In-App Message With Image Sharing</p>
          <p>
            Connect seamlessly with in-app messaging and share photos instantly.
            Enhance communication and provide visual context for a more
            efficient delivery experience.
          </p>
        </article>
      </article>
    </>
  );
}

function GetEstimate() {
  return (
    <>
      <article className="getEstimate">
        <img
          src={getEstimateImg}
          alt="An Iphone 14 on the package details page of the app"
        />
        <article className="text">
          <p className="title">Get Estimate </p>
          <p>
            Get a quick estimate. Plan your delivery cost with our easy-to-use
            estimate tool.
          </p>
        </article>
      </article>
    </>
  );
}

function ContactSection() {
  return (
    <>
      <article className="contact" id="contact">
        <p>Subscribe to get update when our app drops</p>
        <p>
          We'll send you an update notification for you to know we are now live
        </p>
        <form action="https://formspree.io/f/mdordzvg" method="POST">
          <label>
            <span>Email*</span>
            <input
              type="email"
              placeholder="eg email@example.com"
              name="Email"
              required
            />
            <button>Join Waitlist</button>
          </label>
        </form>
      </article>
    </>
  );
}

function Footer() {
  return (
    <>
      <article className="footer" id="privacy">
        <p>&copy;2023 Godaesil All Rights Reserved</p>
      </article>
    </>
  );
}

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
