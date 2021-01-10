import React from "react";
import API from "./API";
import Album from "./Album";

import { Switch, Route } from "react-router-dom";
import NewAlbum from "./NewAlbum";
import Home from "../Home/Home";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/api" component={API} />
      <Route path="/album" component={Album} />
      <Route path="/new" component={NewAlbum} />
    </Switch>
  );
};

export default Main;
