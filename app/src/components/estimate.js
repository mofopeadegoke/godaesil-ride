import getEstimateImg from "../assets/get_estimate.png";

export default function GetEstimate() {
    return (
    <>
      <section className="getEstimate">
        <img
          src={getEstimateImg}
          alt="An Iphone showing the Godeasil app on the screen with the user viewing details of a package"
        />
        <article className="text">
          <p className="title">Get Estimate </p>
          <p>
            Get a quick estimate. Plan your delivery cost with our easy-to-use
            estimate tool.
          </p>
        </article>
      </section>
    </>
  );
}