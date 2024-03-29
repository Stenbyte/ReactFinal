import React from "react";
import "./App.css";
import Nav from "./Components/Header/Nav";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
