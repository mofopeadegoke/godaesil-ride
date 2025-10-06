import LocationIcon from "../assets/locationIcon.png";
import burger from "../assets/burger.svg";
import Button from "./button.js";
import "./navbar.css";
import { Link } from "react-router-dom";
// Function that handles the responsive navbar hamburger
function navBurger() {
  const navHideEls = document.querySelector(".navbarSecondPart");
  navHideEls.classList.toggle("hide");
  console.log(navHideEls);
}
export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="#" className="navbarLogoArticle">
          <p>Godaesil Ride</p>
          <img src={LocationIcon} alt="A map marker" />
        </Link>
        <img
          src={burger}
          alt="Nav burger icon"
          className="mobile"
          onClick={navBurger}
        />
        <a href="#about" className="mobileHide">
          About Us
        </a>
        <a href="#features" className="mobileHide">
          Features
        </a>
        <a href="#privacy" className="mobileHide">
          Privacy
        </a>
        <a href="#contact" className="mobileHide">
          <Button value="Join Waitlist"></Button>
        </a>
      </nav>
      <article className="navbarSecondPart hide">
        <article className="header">
          <Link to="#" className="navbarLogoArticle">
            <p>Godaesil Ride</p>
            <img src={LocationIcon} alt="A map marker" />
          </Link>
          <img
            src={burger}
            alt="Nav burger icon"
            className="mobile"
            onClick={navBurger}
          />
        </article>
        <article className="links">
          <a href="#about">About Us</a>
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a href="#contact">
            <Button value="Join Waitlist"></Button>
          </a>
        </article>
      </article>
    </>
  );
}
