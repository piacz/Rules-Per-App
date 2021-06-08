import React from "react";

import "../css/footer.css";

const Footer = () => (
  <footer id='footer' className="bg-light p-3 text-center">
    <div className="logo" />
    <p>
      Sample project provided by{" "}
      <a target="_blank" rel="noopener noreferrer" href="https://auth0.com">
        Auth0
      </a>
    </p>
  </footer>
);

export default Footer;
