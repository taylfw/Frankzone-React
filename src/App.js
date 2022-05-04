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
          <div className="welcome">
            <h1>Welcome to the Frank Zone!</h1>
          </div>
          <img src={image} alt="Frank's picture."></img>
          <Blurb></Blurb>
        </div>
      </Route>

      <Route path="/portfolio">
        <div className="outer-container">
          <Portfolio></Portfolio>
          <PortNav></PortNav>
        </div>
      </Route>

      <Route path="/about">
        <About></About>
      </Route>

      <Footer></Footer>
    </div>
  );
}

export default App;
