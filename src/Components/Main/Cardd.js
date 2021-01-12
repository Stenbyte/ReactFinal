import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

const Cardd = ({ id, title, img, link }) => {
  return (
    <>
      <Col sm={4}>
        <Card style={{ width: "18rem", padding: "0.2rem", margin: "0.3rem" }}>
          <Card.Img variant="top" src={img} alt={title} />
          <Card.Body>
            <Card.Title>Card Title#</Card.Title>
            <Card.Text style={{ height: "13rem" }}>
              Title: {title}. ID: {id}. Created with Bootstrap
            </Card.Text>
            <Button variant="dark">
              <Link to={link}>Read more</Link>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Cardd;
