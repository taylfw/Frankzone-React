import React from "react";
import reactDom from "react-dom";
import HeyThere from "./HeyThere";

import PortNav from "./PortNav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <div className="welcome">
        <h1>Portfolio</h1>
      </div>

      <div className="blurb">
        <h2>Check out all the stuff I do. </h2>
      </div>
      <div className="container">
        <Route path="/numberGen/index.html"></Route>

        <Route path="/backgroundButton/index.html"></Route>

        <Route path="/snake/index.html"></Route>

        <Route path="/retrodraw/index.html"></Route>

        <Route path="/Calculator/index.html"></Route>
      </div>
    </div>
  );
}

export default Portfolio;
