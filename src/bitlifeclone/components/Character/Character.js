import React from "react";

import "./Character.scss";

const Character = props => {
  return (
    <dl className="c-character">
      <div>
        <dt>Name</dt>
        <dd>
          {props.character.firstName} {props.character.lastName}
        </dd>
      </div>
      <div>
        <dt>Nationality</dt>
        <dd>{props.character.nationality.name}</dd>
      </div>
      <div>
        <dt>Gender</dt>
        <dd>{props.character.gender.name}</dd>
      </div>
      <div>
        <dt>Sexual orientation</dt>
        <dd>{props.character.sexualOrientation}</dd>
      </div>
      <hr />
      <div>
        <dt>Happiness</dt>
        <dd>
          <div
            class={`c-bar__value c-bar__value-${props.character.happiness}`}
          />
        </dd>
      </div>
      <div>
        <dt>Health</dt>
        <dd>
          <div class={`c-bar__value c-bar__value-${props.character.health}`} />
        </dd>
      </div>
      <div>
        <dt>Smarts</dt>
        <dd>
          <div class={`c-bar__value c-bar__value-${props.character.smarts}`} />
        </dd>
      </div>
      <div>
        <dt>Look</dt>
        <dd>
          <div class={`c-bar__value c-bar__value-${props.character.looks}`} />
        </dd>
      </div>
    </dl>
  );
};

export { Character };
