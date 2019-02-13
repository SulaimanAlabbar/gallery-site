import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

const elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}

class Slideshow extends Component {
  state = {
    exitedFullScreen: false
  };

  // componentDidMount = () => {
  //   openFullscreen();
  //   document.addEventListener(
  //     "fullscreenchange",
  //     this.onFullScreenChange,
  //     false
  //   );
  //   document.addEventListener(
  //     "webkitfullscreenchange",
  //     this.onFullScreenChange,
  //     false
  //   );
  //   document.addEventListener(
  //     "mozfullscreenchange",
  //     this.onFullScreenChange,
  //     false
  //   );
  // };

  // componentWillUnmount = () => {
  //   if (!window.screenTop && !window.screenY) {
  //     closeFullscreen();
  //   }
  //   document.removeEventListener(
  //     "fullscreenchange",
  //     this.onFullScreenChange,
  //     false
  //   );
  //   document.removeEventListener(
  //     "webkitfullscreenchange",
  //     this.onFullScreenChange,
  //     false
  //   );
  //   document.removeEventListener(
  //     "mozfullscreenchange",
  //     this.onFullScreenChange,
  //     false
  //   );
  // };

  onFullScreenChange = () => {
    const fullscreenElement =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement;

    if (fullscreenElement === null) {
      console.log("EXITED FULLSCREEN");
      this.setState({
        exitedFullScreen: true
      });
    }
  };

  render() {
    // const { exitedFullScreen } = this.state;

    // if (exitedFullScreen) {
    //   console.log("LINK");
    //   return <Link to="/" />;
    // }

    return <div className="Slideshow--container">Slideshow coming soon...</div>;
  }
}

export default withRouter(Slideshow);
