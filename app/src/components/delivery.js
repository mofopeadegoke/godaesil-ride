import trackDeliveryIcon from "../assets/trackDelivery_iphone.png";

export default function TrackDelivery() {
    return (
        <>
          <section className="trackDeliverySection">
            <img src={trackDeliveryIcon} alt="An Iphone with the Godeasil app showing on its screen" loading="lazy"/>
            <article className="text">
              <p className="title">Track Deliveries in Real-time</p>
              <p>
                Stay in control with our real-time delivery tracking. Know where
                your order is and when it will arrive, ensuring a seamless
                experience.
              </p>
            </article>
          </section>
        </>
      );
}