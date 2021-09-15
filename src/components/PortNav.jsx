import React from "react";
import reactDom from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function PortNav() {
  return (
    <div className="container">
      <a href="/numberGen/index.html" className="link">
        Number Generator
      </a>
      <a href="backgroundButton/index.html" className="link">
        Background Generator
      </a>
      <a href="/snake/index.html" className="link">
        Snake
      </a>
      <a href="https://frank-taylor-retrodraw.netlify.app/" className="link">
        Retro Draw!
      </a>
      <a href="/Calculator/index.html" className="link">
        Calculator
      </a>
    </div>
  );
}

export default PortNav;
