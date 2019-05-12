import React from "react";
import { CharacterModal } from "../components/Character/CharacterModal";

const Homepage = props => {
  return (
    <CharacterModal
      setCharacter={props.setCharacter}
      character={props.character}
    />
  );
};

export { Homepage };
