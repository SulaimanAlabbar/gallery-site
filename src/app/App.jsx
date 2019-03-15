import React from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
// import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import JumpToTop from "../components/JumpToTop";
import Gallery from "../components/Gallery";
import Slideshow from "../components/Slideshow";
import About from "../components/About";
import Contact from "../components/Contact";
import "./MainPage.css";
// import "./mediaQueries.css";

function App() {
  return (
    <div className="MainPage--container">
      <div className="MainPage--Logo">
        <h1>Gallery Site</h1>
      </div>
      <div className="MainPage--Navbar">
        <Navbar />
      </div>
      <div className="MainPage--JumpToTop">
        <JumpToTop />
      </div>

      <div className="MainPage--Main">
        <Switch>
          <Route exact path="/" render={() => <Gallery />} />
          <Route exact path="/slideshow" render={() => <Slideshow />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
