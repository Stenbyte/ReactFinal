import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
const SingleAlbum = () => {
  const [album, setPost] = useState();
  let { id } = useParams();

  useEffect(() => {
    if (!album) {
      axios
        .get("http://localhost:3001/albums/" + id)
        .then((res) => setPost(res.data));
    }
  });

  let albumData = undefined;

  if (id) {
    albumData = <h1>Loading..</h1>;
  }
  if (album) {
    albumData = (
      <Container
        style={{
          background: "lightblue",
          width: "90rem",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Title:</h1>
          <p>{album.title} and</p>
          <p>id:{album.id}</p>
        </div>
      </Container>
    );
  }

  return albumData;
};

export default SingleAlbum;
