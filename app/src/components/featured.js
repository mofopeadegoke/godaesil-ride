import cashIcon from "../assets/cash_icon.png";
import messageIcon from "../assets/message_icon.png";
import packageIcon from "../assets/package_icon.png";
import sendIcon from "../assets/send_icon.png";
import customerServiceIcon from "../assets/customer_service_icon.png";
import Card from "../components/card";


export default function FeaturesSection() {
    return (
        <>
          <section className="featuresSection" id="features">
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
          </section>
        </>
      );
}