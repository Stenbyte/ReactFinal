import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import Card from "./Card";
import SingleAlbum from "./SingleAlbum";

const Album = () => {
  const [albums, setAlbums] = useState([]);
  let { path, url } = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:3001/albums").then((response) => {
      setAlbums(response.data);
    });
  }, []);

  const AlbumList = albums.map((a) => {
    return (
      <Card key={a.id} title={a.title} img={a.img} link={`${url}/${a.id}`} />
    );
  });

  return (
    <>
      <Switch>
        <Route path={`${path}/:id`}>
          <SingleAlbum />{" "}
        </Route>
        <Route path={path}>{AlbumList}</Route>
      </Switch>
    </>
  );
};

export default Album;
