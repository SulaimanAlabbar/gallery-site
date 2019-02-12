/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ImageModal from "../ImageModal";
import GalleryImage from "../GalleryImage";
import "./Gallery.css";

const imageArray = [];

for (
  let i = 1;
  i < Number(process.env.REACT_APP_NUM_OF_GALLERY_IMAGES) + 1;
  i++
) {
  imageArray.push([
    `${process.env.REACT_APP_IMAGES_URL}gallery_img${
      i < 10 ? "0" + i : i
    }_full_large.jpg`,
    `${process.env.REACT_APP_IMAGES_URL}gallery_img${
      i < 10 ? "0" + i : i
    }_thumbnail_large.jpg`
  ]);
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

  handleClick = imageIndex => {
    if (!this._mounted) return;

    this.setState({
      selectedImage: imageArray[imageIndex]
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
        {imageArray.map((image, index) => (
          <GalleryImage
            image={image[1]}
            imageIndex={index}
            handleClick={this.handleClick}
            key={`${image[1]}`}
          />
        ))}
        {selectedImage && (
          <ImageModal
            image={selectedImage[0]}
            onModalClose={this.onModalClose}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Gallery);
