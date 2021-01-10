import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check this</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://source.unsplash.com/daily"
              text="Some text to read:Some text"
              label="Some"
              path="/services"
            />
            <CardItem
              src="https://source.unsplash.com/daily"
              text="Some text to read:Some text"
              label="Some"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://source.unsplash.com/weekly"
              text="Some text to read:Some text"
              label="Some"
              path="/products"
            />
            <CardItem
              src="https://source.unsplash.com/weekly"
              text="Some text to read:Some text"
              label="Some"
              path="/products"
            />
            <CardItem
              src="https://source.unsplash.com/weekly"
              text="Some text to read:Some text"
              label="Some"
              path="/products"
            />
            <CardItem
              src="https://source.unsplash.com/weekly"
              text="Some text to read:Some text"
              label="Some"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
