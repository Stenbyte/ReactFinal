import React from "react";
import { Button } from "../Button/Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <h1>Hello</h1>
      <p>How Are You</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          What <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
