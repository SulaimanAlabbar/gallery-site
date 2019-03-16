import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import JumpToTop from "../components/JumpToTop";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";
import "./MainPage.css";
import "./App.css";

const RedirectToHome = () => <Redirect to="/" />;

function App() {
  return (
    <div className="MainPage--container">
      <div className="MainPage--Logo">
        <h1>Gallery Site</h1>
      </div>
      <div className="MainPage--navjump">
        <div className="Navjump--container">
          <Navbar />
          <JumpToTop />
        </div>
      </div>
      <div className="MainPage--Main">
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={RedirectToHome} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
