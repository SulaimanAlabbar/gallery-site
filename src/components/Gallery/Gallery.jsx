/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ImageModal from "../ImageModal";
import GalleryImage from "../GalleryImage";
import "./Gallery.css";

const imageArray = [];

for (let i = 1; i < 37; i++) {
  imageArray.push(
    `${process.env.REACT_APP_IMAGES_URL}gallery_img${i < 10 ? "0" + i : i}.jpg`
  );
}

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
