import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, img, link }) => {
  return (
    <div className="AlbumCard">
      <h2>{id}</h2>
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <Link to={link}>Read more</Link>
    </div>
  );
};

export default Card;
