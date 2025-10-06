import inAppMessageImg from "../assets/inApp_message.png";

export default function InAppMessage() {
    return (
        <>
          <section className="inAppMessage">
            <img src={inAppMessageImg} alt="An Iphone showing the Godeasil app with user using the in app messaging feature in the app" />
            <article className="text">
              <p className="title">In-App Message With Image Sharing</p>
              <p>
                Connect seamlessly with in-app messaging and share photos instantly.
                Enhance communication and provide visual context for a more
                efficient delivery experience.
              </p>
            </article>
          </section>
        </>
      );
}