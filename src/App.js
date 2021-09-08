import NavBar from "./components/NavBar";
import Blurb from "./components/Blurb";
import Footer from "./components/Footer";
import image from "./images/altPic.png";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import PortNav from "./components/PortNav";
import React from "react";
import reactDom from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <NavBar></NavBar>
      </nav>

      <Route exact path="/">
        <div>
          <img src={image} alt="Frank's picture."></img>
          <Blurb></Blurb>
        </div>
      </Route>

      <Route path="/portfolio">
        <Portfolio></Portfolio>
        <PortNav></PortNav>
      </Route>

      <Route path="/about">
        <About></About>
      </Route>

      <Footer></Footer>
    </div>
  );
}

export default App;
