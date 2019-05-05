import React from "react";

import "./Character.scss";

const Character = props => {
  return (
    <dl className="c-character">
      <dt>Name:</dt>
      <dd>
        {props.character.firstName} {props.character.lastName}
      </dd>
      <dt>Nationality:</dt>
      <dd>{props.character.nationality.name}</dd>
      <dt>Gender:</dt>
      <dd>{props.character.gender.name}</dd>
      <dt>Sexual orientation:</dt>
      <dd>{props.character.sexualOrientation}</dd>
      <dt>Happiness</dt>
      <dd>{props.character.happiness}</dd>
      <dt>Health</dt>
      <dd>{props.character.health}</dd>
      <dt>Smarts</dt>
      <dd>{props.character.smarts}</dd>
      <dt>Look</dt>
      <dd>{props.character.looks}</dd>
    </dl>
  );
};

export { Character };
