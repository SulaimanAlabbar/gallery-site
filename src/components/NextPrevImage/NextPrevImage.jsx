import React, { Component } from "react";
import NextIcon from "./next.svg";
import PrevIcon from "./prev.svg";
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
          <img src={PrevIcon} alt="Previous" />
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
          <img src={NextIcon} alt="Next" />
        </div>
      </>
    );
  }
}
