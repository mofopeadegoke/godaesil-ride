import LocationIcon from "../assets/locationIcon.png";
// import burger from "../assets/burger.svg";
import Button from "./button.js";
import "./navbar.css";
import { Link } from "react-router-dom";
// // Function that handles the responsive navbar hamburger
// function navBurger() {
//   const navHideEls = document.querySelectorAll(".navHide");
//   const menuLinkEls = document.querySelectorAll(".menuLink");
//   menuLinkEls.forEach((el) => {
//     el.classList.toggle("navHide");
//   });
// }

// // Function that handles the displaying of the dropdown menus
// function handleClick(value) {
//   const programDropdownMenu = document.querySelector(`.dropdownMenu.${value}`);
//   programDropdownMenu.classList.toggle("show");
//   window.onclick = function (e) {
//     if (!e.target.matches(`.${value}`)) {
//       if (programDropdownMenu.classList.contains("show")) {
//         programDropdownMenu.classList.remove("show");
//       }
//     }
//     // if (!e.target.matches(`.${value} + img`)) {
//     //   if (programDropdownMenu.classList.contains("show")) {
//     //     programDropdownMenu.classList.remove("show");
//     //   }
//     // }
//   };
// }
export default function Navbar() {
  return (
    <nav>
      <Link to="#" className="navbarLogoArticle">
        <p>Godaesil Ride</p>
        <img src={LocationIcon} alt="A map marker" />
      </Link>
      <article className="navbarSecondPart">
        <a href="#about">About Us</a>
        <a href="#features">Features</a>
        <a href="#privacy">Privacy</a>
        <a href="#contact">
          <Button value="Join Waitlist"></Button>
        </a>
      </article>
    </nav>
  );
}
