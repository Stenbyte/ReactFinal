import React from "react";
import API from "./API";
import Album from "./Album";
import { Switch, Route } from "react-router-dom";
import NewAlbum from "./NewAlbum";
import Home from "../Home/Home";
import Services from "../SP/Services";
import Products from "../SP/Products";
import SignUp from "../SP/SignUp";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/api" component={API} />
      <Route path="/album" component={Album} />
      <Route path="/new" component={NewAlbum} />
      <Route path="/services" component={Services} />
      <Route path="/products" component={Products} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
};

export default Main;
