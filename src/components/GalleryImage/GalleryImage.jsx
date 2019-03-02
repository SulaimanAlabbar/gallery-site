import React from "react";

export default function GalleryImage({ image, imageIndex, handleClick }) {
  return (
    <img
      src={image}
      alt={`${image}`}
      width="384"
      height="216"
      onClick={() => handleClick(imageIndex)}
      className="Gallery--image"
    />
  );
}
