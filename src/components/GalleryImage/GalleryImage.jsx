import React, { Suspense } from "react";
import Spinner from "../Spinner";

export default function GalleryImage({ image, imageIndex, handleClick }) {
  return (
    <Suspense fallback={<Spinner />}>
      <img
        src={image}
        alt={`${image}`}
        width="384"
        height="216"
        onClick={() => handleClick(imageIndex)}
        className="Gallery--image"
      />
    </Suspense>
  );
}

// TODO: Remove Suspense
