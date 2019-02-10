import React, { Component } from "react";
import "./ImageModal.css";

export default class ImageModal extends Component {
  state = {
    modalClose: false
  };

  handleModalClose = () => {
    this.setState(
      {
        modalClose: true
      },
      () => {
        setTimeout(() => {
          this.props.onModalClose();
        }, 400);
      }
    );
  };

  render() {
    const { modalClose } = this.state;
    const { image } = this.props;
    return (
      <>
        <img
          src={image}
          alt={`${image}`}
          className={`ImageModal--modal${
            modalClose ? " ImageModal--modal--close" : ""
          }`}
        />
        <div
          className={`ImageModal--shade${
            modalClose ? " ImageModal--shade--close" : ""
          }`}
          onClick={this.handleModalClose}
        />
        <div
          onClick={this.handleModalClose}
          className={`ImageModal--closeModal${
            modalClose ? " ImageModal--closeModal--close" : ""
          }`}
        >
          X
        </div>
      </>
    );
  }
}
