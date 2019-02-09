import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ImageModal from "../ImageModal";
import GalleryImage from "../GalleryImage";
import "./Gallery.css";

import IMG01 from "./images/01.jpg";
import IMG02 from "./images/02.jpg";
import IMG03 from "./images/03.jpg";
import IMG04 from "./images/04.jpg";
import IMG05 from "./images/05.jpg";
import IMG06 from "./images/06.jpg";
import IMG07 from "./images/07.jpg";
import IMG08 from "./images/08.jpg";
import IMG09 from "./images/09.jpg";
import IMG10 from "./images/10.jpg";
import IMG11 from "./images/11.jpg";
import IMG12 from "./images/12.jpg";
import IMG13 from "./images/13.jpg";
import IMG14 from "./images/14.jpg";
import IMG15 from "./images/15.jpg";
import IMG16 from "./images/16.jpg";
import IMG17 from "./images/17.jpg";
import IMG18 from "./images/18.jpg";
import IMG19 from "./images/19.jpg";
import IMG20 from "./images/20.jpg";
import IMG21 from "./images/21.jpg";
import IMG22 from "./images/22.jpg";
import IMG23 from "./images/23.jpg";
import IMG24 from "./images/24.jpg";
import IMG25 from "./images/25.jpg";
import IMG26 from "./images/26.jpg";
import IMG27 from "./images/27.jpg";
import IMG28 from "./images/28.jpg";
import IMG29 from "./images/29.jpg";
import IMG30 from "./images/30.jpg";
import IMG31 from "./images/31.jpg";
import IMG32 from "./images/32.jpg";
import IMG33 from "./images/33.jpg";
import IMG34 from "./images/34.jpg";
import IMG35 from "./images/35.jpg";
import IMG36 from "./images/36.jpg";

const imageArray = [
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG09,
  IMG10,
  IMG11,
  IMG12,
  IMG13,
  IMG14,
  IMG15,
  IMG16,
  IMG17,
  IMG18,
  IMG19,
  IMG20,
  IMG21,
  IMG22,
  IMG23,
  IMG24,
  IMG25,
  IMG26,
  IMG27,
  IMG28,
  IMG29,
  IMG30,
  IMG31,
  IMG32,
  IMG33,
  IMG34,
  IMG35,
  IMG36
];

class Gallery extends Component {
  _mounted = false;

  state = {
    selectedImage: false
  };

  componentDidMount = () => {
    this._mounted = true;
  };

  componentWillUnmount = () => {
    this._mounted = false;
  };

  handleClick = image => {
    if (!this._mounted) return;

    this.setState({
      selectedImage: image
    });
  };

  onModalClose = () => {
    if (!this._mounted) return;

    this.setState({
      selectedImage: false
    });
  };

  render() {
    const { selectedImage } = this.state;

    return (
      <div className="Gallery--container">
        {imageArray.map(image => (
          <GalleryImage
            image={image}
            handleClick={this.handleClick}
            key={`${image}`}
          />
        ))}
        {selectedImage && (
          <ImageModal image={selectedImage} onModalClose={this.onModalClose} />
        )}
      </div>
    );
  }
}

export default withRouter(Gallery);
