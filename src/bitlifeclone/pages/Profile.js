import React from "react";
import { Character } from "../components/Character/Character";

const Profile = props => {
  return (
    <Character setCharacter={props.setCharacter} character={props.character} />
  );
};

export { Profile };
