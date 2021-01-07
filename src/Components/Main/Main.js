import React from "react";
import Home from "./Home";
import Album from "./Album";

import { Switch, Route } from "react-router-dom";
import NewAlbum from "./NewAlbum";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/album" component={Album} />
        <Route path="/new" exact component={NewAlbum} />
      </Switch>
    </main>
  );
};

export default Main;
