import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlagIcon } from "react-flag-kit";

import "./Character.scss";


const CharacterSummary = props => {
  return (
    <div className="c-character-summary">
        <h1>{ props.character.firstName } { props.character.lastName } <FlagIcon code={props.character.country.abbreviation} /></h1>
        <small>
            { props.character.age } years old, { props.character.lifePhase },
            <FontAwesomeIcon icon={ props.character.gender.icon } />
            <FontAwesomeIcon icon={ props.character.sexualOrientation.icon } />
        </small>
    </div>
  );
};

export { CharacterSummary };
