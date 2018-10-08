import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Roster">Roster</Link>
        </li>
        <li>
          <Link to="/Schedule">Schedule</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
