import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Slideshow extends Component {
  componentDidMount = () => {
    console.log("hi");
  };

  render() {
    return <div className="Slideshow--container">Slideshow</div>;
  }
}

export default withRouter(Slideshow);
