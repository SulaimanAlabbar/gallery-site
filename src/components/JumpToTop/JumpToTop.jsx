import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./JumpToTop.css";
import JumpToTopIcon from "./jtt.svg";

class JumpToTop extends Component {
  handleClick = () => {
    (function smoothscroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 5);
      }
    })();
  };

  render() {
    const { pathname } = this.props.location;
    const visibility =
      pathname === "/" || pathname === "/about" ? "visible" : "hidden";

    return (
      <img
        onClick={this.handleClick}
        style={{ visibility }}
        src={JumpToTopIcon}
        alt="Jump to Top Icon"
        className="JumpToTop--container"
      />
    );
  }
}

export default withRouter(JumpToTop);
