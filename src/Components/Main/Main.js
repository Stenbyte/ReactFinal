import React from "react";
import API from "./API";
import Album from "./Album";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NewAlbum from "./NewAlbum";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={API} />
      <Route path="/album" component={Album} />
      <Route path="/new" exact component={NewAlbum} />
    </Switch>
  );
};

export default Main;
