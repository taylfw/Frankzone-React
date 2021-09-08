import React from "react";
import reactDom from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function navBar() {
  return (
    <div>
      <header>
        <Link to="/" className="link">
          Home 🏠️
        </Link>
        <Link to="/portfolio" className="link">
          Portfolio ☕️
        </Link>
        <Link to="/about" className="link">
          About 🛸️
        </Link>
      </header>
    </div>
  );
}

export default navBar;
