import React from "react";
import PlayerApi from "../api";
import { Link } from "react-router-dom";

const FullRoster = () => (
  <div>
    <ul>
      {PlayerApi.all().map(p => (
        <li key={p.number}>
          <Link to={`/roster/${p.number}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
    <div>
      <Link to="/roster">Back</Link>
    </div>
  </div>
);

export default FullRoster;
