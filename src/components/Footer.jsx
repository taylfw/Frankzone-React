import React from "react";
import reactDom from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <Link
          className="link"
          to="https://www.linkedin.com/in/frank-taylor-024895136"
        >
          Linkedin
        </Link>
        <Link className="link" to="https://github.com/taylfw">
          Git Hub
        </Link>
        <Link className="link" to="https://www.codewars.com/users/taylfw88">
          Code Wars
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
