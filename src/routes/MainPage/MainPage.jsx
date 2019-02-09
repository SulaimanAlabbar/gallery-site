import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "../../components/Navbar";
import JumpToTop from "../../components/JumpToTop";
import Gallery from "../../components/Gallery";
import Slideshow from "../../components/Slideshow";
import About from "../../components/About";
import Contact from "../../components/Contact";
import "./MainPage.css";

class MainPage extends Component {
  componentDidMount = () => {
    console.log("gello");
  };

  render() {
    return (
      <div className="MainPage--container">
        <div className="MainPage--Navbar">
          <Navbar />
          <JumpToTop />
        </div>
        <div className="MainPage--Main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div className="MainPage--Gallery">
                  <Gallery />
                </div>
              )}
            />
            <Route
              exact
              path="/slideshow"
              render={() => (
                <div className="MainPage--Slideshow">
                  <Slideshow />
                </div>
              )}
            />
            <Route
              exact
              path="/about"
              render={() => (
                <div className="MainPage--About">
                  <About />
                </div>
              )}
            />
            <Route
              exact
              path="/contact"
              render={() => (
                <div className="MainPage--Contact">
                  <Contact />
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(MainPage);
