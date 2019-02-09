import React, { Suspense } from "react";
import Spinner from "../Spinner";

export default function GalleryImage({ image, handleClick }) {
  return (
    <Suspense fallback={<Spinner />}>
      <img
        src={image}
        alt="ha"
        width="403"
        height="227"
        onClick={() => handleClick(image)}
        className="Gallery--image"
      />
    </Suspense>
  );
}
