import React from "react";

const Character = props => {
  return (
    <div>
      <dl>
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
      </dl>
    </div>
  );
};

export { Character };
