import React, { useState } from "react";
import axios from "axios";

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
    <>
      <h1>Add new</h1>
      <form className="newAlbum" onSubmit={addAlbumHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={changeValueHandler}
          />
        </div>
        <div>
          <label htmlFor="id">Id</label>
          <input type="text" name="id" id="id" onChange={changeValueHandler} />
        </div>
        <div>
          <label htmlFor="img">Img</label>
          <input
            type="text"
            name="img"
            id="img"
            onChange={changeValueHandler}
          />
        </div>
        <button type="submit">Add new</button>
      </form>
    </>
  );
};

export default NewAlbum;
