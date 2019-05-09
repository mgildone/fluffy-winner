import React from "react";

import "./Character.scss";


const CharacterSummary = props => {
  return (
    <div className=""c-character-summary>
        { props.character.firstName } { props.character.lastName }
        { props.character.age } years old, { props.character.lifePhase }
    </div>
  );
};

export { CharacterSummary };
