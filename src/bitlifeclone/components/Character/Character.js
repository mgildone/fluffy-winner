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
          <div className={`c-bar__container`}>
            <div
              className={`c-bar__value c-bar__value-${
                props.character.happiness
              }`}
            />
          </div>
        </dd>
      </div>
      <div>
        <dt>
          Health <FontAwesomeIcon icon={["fas", "heartbeat"]} />
        </dt>
        <dd>
          <div className={`c-bar__container`}>
            <div
              className={`c-bar__value c-bar__value-${props.character.health}`}
            />
          </div>
        </dd>
      </div>
      <div>
        <dt>
          Smarts <FontAwesomeIcon icon={["fas", "brain"]} />
        </dt>
        <dd>
          <div className={`c-bar__container`}>
            <div
              className={`c-bar__value c-bar__value-${props.character.smarts}`}
            />
          </div>
        </dd>
      </div>
      <div>
        <dt>
          Look <FontAwesomeIcon icon={["fas", "fire-alt"]} />
        </dt>
        <dd>
          <div className={`c-bar__container`}>
            <div
              className={`c-bar__value c-bar__value-${props.character.looks}`}
            />
          </div>
        </dd>
      </div>
    </dl>
  );
};

export { Character };
