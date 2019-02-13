/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ImageModal from "../ImageModal";
import GalleryImage from "../GalleryImage";
import NextPrevImage from "../NextPrevImage";
import "./Gallery.css";

const imageArray = [];

for (
  let i = 1;
  i < Number(process.env.REACT_APP_NUM_OF_GALLERY_IMAGES) + 1;
  i++
) {
  imageArray.push({
    full: `${process.env.REACT_APP_IMAGES_URL}gallery_img${
      i < 10 ? "0" + i : i
    }_full_large.jpg`,
    thumbnail: `${process.env.REACT_APP_IMAGES_URL}gallery_img${
      i < 10 ? "0" + i : i
    }_thumbnail_large.jpg`
  });
}

class Gallery extends Component {
  _mounted = false;

  state = {
    selectedImage: false,
    selectedImageIndex: false
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
      selectedImage: imageArray[imageIndex],
      selectedImageIndex: imageIndex
    });
  };

  changeModalImage = newImageIndex => {
    if (!this._mounted) return;

    this.setState({
      selectedImage: imageArray[newImageIndex],
      selectedImageIndex: newImageIndex
    });
  };

  onModalClose = () => {
    if (!this._mounted) return;

    this.setState({
      selectedImage: false
    });
  };

  render() {
    const { selectedImage, selectedImageIndex } = this.state;

    return (
      <div className="Gallery--container">
        {imageArray.map((image, index) => (
          <GalleryImage
            image={image.thumbnail}
            imageIndex={index}
            handleClick={this.handleClick}
            key={`${image.thumbnail}`}
          />
        ))}
        {selectedImage && (
          <>
            <ImageModal
              image={selectedImage.full}
              onModalClose={this.onModalClose}
            />
            <NextPrevImage
              imageIndex={selectedImageIndex}
              changeModalImage={this.changeModalImage}
            />
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Gallery);
