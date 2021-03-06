import React from "react";
import "./GalleryImage.css";

export default function GalleryImage({ image, imageIndex, handleClick }) {
  return (
    <div className="GalleryImage--image--grid">
      <img
        src={image}
        alt={`${image}`}
        onClick={() => handleClick(imageIndex)}
        className="GalleryImage--image"
      />
    </div>
  );
}
