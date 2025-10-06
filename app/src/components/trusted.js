import trustedDeliveryImg from "../assets/trusted_delivery.png";

export default function TrustedDelivery() {
    return (
        <>
          <section className="trustedDelivery">
            <img
              src={trustedDeliveryImg}
              alt="An Iphone with the Godeasil app showing on the screen and the user about to give a courier a rating"
              loading="lazy"
            />
            <article className="text">
              <p className="title">Trusted Delivery Services</p>
              <p>
                Trust our reliable delivery services for peace of mind. We
                prioritize safety and efficiency to ensure your packages are in good
                hands.
              </p>
            </article>
          </section>
        </>
      );
}