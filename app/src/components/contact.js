export default function ContactSection() {
    return (
    <>
      <section className="contact" id="contact">
        <p>Subscribe to get update when our app drops</p>
        <p>
          We'll send you an update notification for you to know we are now live
        </p>
        <form action="https://formspree.io/f/mdordzvg" method="POST">
          <label htmlFor="emailInput">
            Email*
          </label>
            <input
              type="email"
              placeholder="eg email@example.com"
              name="Email"
              required
              aria-label="Input element where users of the website put in their email to join the waitlist for the Godeasil app"
              id="emailInput"
              autoComplete="email"
            />
            <button>Join Waitlist</button>
          
        </form>
      </section>
    </>
  );
}