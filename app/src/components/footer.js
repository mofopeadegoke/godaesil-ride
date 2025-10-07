import React from "react";

const Footer = React.memo(() => {
  return (
    <>
      <footer className="footer" id="privacy">
        <p>&copy; {new Date().getFullYear()} Godaesil All Rights Reserved</p>
      </footer>
    </>
  );
});


export default Footer;