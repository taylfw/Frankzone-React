import React from "react";
import reactDom from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function PortNav() {
  return (
    <div className="container">
      <a href="/numberGen/index.html">Number Generator</a>
      <a href="backgroundButton/index.html">Background Generator</a>
      <a href="/snake/index.html">Snake</a>
      <a href="https://frank-taylor-retrodraw.netlify.app/">Retro Draw!</a>
      <a href="/Calculator/index.html">Calculator</a>
    </div>
  );
}

export default PortNav;
