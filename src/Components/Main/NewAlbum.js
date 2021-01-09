import React, { useState } from "react";
import axios from "axios";
import {
  InputGroup,
  Button,
  FormControl,
  Container,
  Form,
} from "react-bootstrap";

const NewAlbum = () => {
  const [newAlbum, setNewAlbum] = useState({
    title: "",
    id: "",
    img: "",
  });

  const changeValueHandler = (e) => {
    setNewAlbum({
      ...newAlbum,
      [e.target.name]: e.target.value,
    });
  };

  const addAlbumHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/albums", newAlbum).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <Container>
      <>
        <Form
          onSubmit={addAlbumHandler}
          style={{ margin: "3rem", textAlign: "center" }}
        >
          <h1>Add new</h1>
          <Form.Group style={{ width: "30rem", margin: "auto" }}>
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              id="title"
              onChange={changeValueHandler}
            ></Form.Control>

            <Form.Label htmlFor="id">Id</Form.Label>
            <Form.Control
              type="text"
              name="id"
              id="id"
              onChange={changeValueHandler}
            ></Form.Control>

            <Form.Label htmlFor="img">Img</Form.Label>
            <Form.Control
              type="text"
              name="img"
              id="img"
              onChange={changeValueHandler}
            ></Form.Control>

            <Button type="submit" style={{ margin: "1rem" }}>
              Add new
            </Button>
          </Form.Group>
        </Form>
      </>
    </Container>
  );
};

export default NewAlbum;
