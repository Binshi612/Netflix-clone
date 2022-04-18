import React from "react";
import "./Slider.css";
import Card from "./Card";

const Slider = () => {
  return (
    <div className="slider">
      <h1>Series Streaming Now</h1>

      <div className="Cardlist">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Slider;
