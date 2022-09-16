import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel({ images }) {
  return (
    <div style={{ height: "300px" }}>
      <Carousel
        rende
        className="carousel"
        dynamicHeight={false}
        showThumbs={false}
      >
        {images.map((el) => {
          console.log(el.imageLink);
          return (
            <div>
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
