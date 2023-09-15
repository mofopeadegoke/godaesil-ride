import "./reset.css";
import "./home.css";
import introImgOne from "../assets/introImg1.png";
import introImgTwo from "../assets/introImg2.png";
import Navbar from "../components/navbar";
import Button from "../components/button";

function IntroSection() {
  return (
    <>
      <article className="introSection">
        <article className="text">
          <h1>Delivery made Easier, Better and Faster</h1>
          <p>
            We pride ourselves on delivering excellence every mile. With our
            intuitive app, managing shipments and tracking deliveries.
          </p>
          <Button value="Book Demo" />
          <Button value="Join Waitlist" />
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
    </>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <IntroSection />
    </>
  );
}
