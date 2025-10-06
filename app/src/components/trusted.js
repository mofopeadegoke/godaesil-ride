import trustedDeliveryImg from "../assets/trusted_delivery.png";

export default function TrustedDelivery() {
    return (
        <>
          <section className="trustedDelivery">
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
          </section>
        </>
      );
}