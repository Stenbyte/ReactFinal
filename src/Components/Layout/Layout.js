import React from "react";

import { Container } from "react-bootstrap";

export const Layout = (props) => (
  <Container
    style={{
      display: "flex",
      width: "95%",
      margin: "0.5rem ",
    }}
    fluid
  >
    {props.children}
  </Container>
);
