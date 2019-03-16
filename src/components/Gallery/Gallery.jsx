import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import GalleryImage from "../GalleryImage";
import galleryImages from "./galleryImages.json";
import ImageModal from "../ImageModal";
import "./Gallery.css";

class Gallery extends Component {
  _mounted = false;

  state = {
    modalOpen: false,
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

    this.setState(state => ({
      modalOpen: !state.modalOpen,
      selectedImageIndex: imageIndex
    }));
  };

  onModalClose = () => {
    if (!this._mounted) return;

    this.setState({
      modalOpen: false
    });
  };

  render() {
    const { modalOpen, selectedImageIndex } = this.state;

    return (
      <div className="Gallery--container">
        {galleryImages.map((image, index) => (
          <GalleryImage
            image={image.placeholder}
            imageIndex={index}
            handleClick={this.handleClick}
            key={`${image.placeholder}`}
          />
        ))}
        {modalOpen && (
          <ImageModal
            images={galleryImages}
            startingImageIndex={selectedImageIndex}
            onModalClose={this.onModalClose}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Gallery);
