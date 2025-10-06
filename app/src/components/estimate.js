import getEstimateImg from "../assets/get_estimate.png";

export default function GetEstimate() {
    return (
    <>
      <section className="getEstimate">
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
      </section>
    </>
  );
}