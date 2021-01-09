import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const Cardd = ({ id, title, img, link }) => {
  return (
    <Col sm={4}>
      <Card style={{ width: "18rem", padding: "0.2rem", margin: "0.3rem" }}>
        <Card.Img variant="top" src={img} alt={title} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text style={{ height: "13rem" }}>
            {title}
            {id}
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="dark">
            <Link to={link}>Read more</Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cardd;
//{
/* <Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src={img} alt={title} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      {title}
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">
      <Link to={link}>Read more</Link>
    </Button>
  </Card.Body>
</Card>; */
//}

//{
/* <div className="AlbumCard">
<h2>{id}</h2>
<h2>{title}</h2>
<img src={img} alt={title} />
<Link to={link}>Read more</Link>
</div> */
//}
