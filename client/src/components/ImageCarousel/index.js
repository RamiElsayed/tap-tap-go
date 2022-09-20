import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel({ images }) {
  return (
    <div style={{ height: "300px" }}>
      <Carousel className="carousel" dynamicHeight={false} showThumbs={false}>
        {images.map((el, index) => {
          return (
            <div key={index}>
              <img
                style={{ objectFit: "contain", height: "300px" }}
                src={el.imageLink}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
