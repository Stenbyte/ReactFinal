import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <div>
        <h1>
          Title: {album.title} and id:{album.id}
        </h1>
      </div>
    );
  }

  return albumData;
};

export default SingleAlbum;
