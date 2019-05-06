import React from "react";

import "./Character.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <dt>
          Nationality <FontAwesomeIcon icon={["far", "flag"]} />
        </dt>
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
        <dt>
          Happiness <FontAwesomeIcon icon={["far", "laugh-beam"]} />
        </dt>
        <dd>
          <div
            className={`c-bar__value c-bar__value-${props.character.happiness}`}
          />
        </dd>
      </div>
      <div>
        <dt>
          Health <FontAwesomeIcon icon={["far", "heartbeat"]} />
        </dt>
        <dd>
          <div
            className={`c-bar__value c-bar__value-${props.character.health}`}
          />
        </dd>
      </div>
      <div>
        <dt>Smarts</dt>
        <dd>
          <div
            className={`c-bar__value c-bar__value-${props.character.smarts}`}
          />
        </dd>
      </div>
      <div>
        <dt>Look</dt>
        <dd>
          <div
            className={`c-bar__value c-bar__value-${props.character.looks}`}
          />
        </dd>
      </div>
    </dl>
  );
};

export { Character };
