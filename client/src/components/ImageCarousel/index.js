import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel() {
  return (
    <Carousel>
      <div>
        <img
          className="carousel-img"
          src="https://www.mammal.org.uk/wp-content/uploads/2021/09/red-fox-300x300.jpg"
        />
      </div>
      <div>
        <img className="carousel-img" src="assets/2.jpeg" />
      </div>
      <div>
        <img className="carousel-img" src="assets/3.jpeg" />
      </div>
      <div>
        <img className="carousel-img" src="assets/4.jpeg" />
      </div>
      <div>
        <img className="carousel-img" src="assets/5.jpeg" />
      </div>
      <div>
        <img className="carousel-img" src="assets/6.jpeg" />
      </div>
    </Carousel>
  );
}
