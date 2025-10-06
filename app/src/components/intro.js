import introImgOne from "../assets/introImg1.png";
import introImgTwo from "../assets/introImg2.png";
import Button from "../components/button";

export default function IntroSection() {
    return (
        <>
          <section className="introSection" id="about">
            <article className="text">
              <h1>Delivery made Easier, Better and Faster</h1>
              <p>
                We pride ourselves on delivering excellence every mile. With our
                intuitive app, managing shipments and tracking deliveries.
              </p>
              <a href="#contact" aria-label="Button to book a demo of the Godeasil app">
                <Button value="Book Demo" />
              </a>
              <a href="#contact" aria-label="Button to join the waitlist to use the Godeasil app">
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
          </section>
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