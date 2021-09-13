import React from "react";
import reactDom from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <a href="https://www.linkedin.com/in/frank-taylor-024895136">
          Linkedin
        </a>
        <a href="https://github.com/taylfw">Git Hub</a>
        <a href="https://www.codewars.com/users/taylfw88">Code Wars</a>
      </div>
    </footer>
  );
}

export default Footer;
