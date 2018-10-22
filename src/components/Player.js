import React from "react";
import PlayerApi from "../api";
import { Link } from "react-router-dom";

const Player = props => {
  const player = PlayerApi.get(parseInt(props.match.params.number));
  if (!player) {
    return <div>Sorry!! No such player found</div>;
  }

  return (
    <div>
      <h1>
        {player.name} (#
        {player.number})
      </h1>
      <h2>Postion: {player.style}</h2>
      <Link to="/roster">Back</Link>
    </div>
  );
};

export default Player;
