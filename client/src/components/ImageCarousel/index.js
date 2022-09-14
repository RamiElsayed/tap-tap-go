import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel() {
  return (
    <Carousel className="carousel" dynamicHeight={false} showThumbs={false}>
      <div>
        <img src="https://www.mammal.org.uk/wp-content/uploads/2021/09/red-fox-300x300.jpg" />
      </div>
      <div>
        <img src="https://www.mammal.org.uk/wp-content/uploads/2021/09/red-fox-300x300.jpg" />
      </div>
      <div>
        <img src="https://www.mammal.org.uk/wp-content/uploads/2021/09/red-fox-300x300.jpg" />
      </div>
    </Carousel>
  );
}
