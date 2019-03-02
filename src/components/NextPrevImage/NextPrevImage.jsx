import React, { Component } from "react";
import "./NextPrevImage.css";

export default class NextPrevImage extends Component {
  handleClick = newImageIndex => {
    this.props.changeModalImage(newImageIndex);
  };

  render() {
    const { imageIndex } = this.props;

    return (
      <>
        <div
          className={`NextPrevImage NextPrevImage--prev${
            imageIndex === 0 ? " hidden" : ""
          }`}
          onClick={() => this.handleClick(imageIndex - 1)}
        >
          &lt;
        </div>
        <div
          className={`NextPrevImage NextPrevImage--next${
            imageIndex + 1 ===
            Number(process.env.REACT_APP_NUM_OF_GALLERY_IMAGES)
              ? " hidden"
              : ""
          }`}
          onClick={() => this.handleClick(imageIndex + 1)}
        >
          &gt;
        </div>
      </>
    );
  }
}
