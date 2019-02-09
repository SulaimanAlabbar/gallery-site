import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./JumpToTop.css";

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
      pathname === "/slideshow" || pathname === "/contact"
        ? "hidden"
        : "visible";

    return (
      <div
        className="JumpToTop--container"
        onClick={this.handleClick}
        style={{ visibility }}
      >
        <p className="JumpToTop--arrow">^</p>
      </div>
    );
  }
}

export default withRouter(JumpToTop);
