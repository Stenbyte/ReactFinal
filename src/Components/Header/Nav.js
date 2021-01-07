import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">API</Link>
        </li>
        <li>
          <Link to="/album">Albums</Link>
        </li>
        <li>
          <Link to="/new">New Album</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
