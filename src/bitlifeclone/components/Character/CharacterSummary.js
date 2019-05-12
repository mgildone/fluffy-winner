import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlagIcon } from "react-flag-kit";
import { Link } from "@reach/router";

import "./Character.scss";

const CharacterSummary = props => {
  return (
    <React.Fragment>
      {useMemo(
        () => (
          <div className="c-character-summary">
            <h1>
              <Link to="/profile">
                {props.character.firstName} {props.character.lastName}{" "}
                <FlagIcon
                  className="c-icon"
                  code={props.character.country.abbreviation}
                />
              </Link>
            </h1>
            <small>
              {props.character.age} years old
              <FontAwesomeIcon
                className="c-icon"
                icon={props.character.gender.icon}
              />
            </small>
          </div>
        ),
        [props.character]
      )}
    </React.Fragment>
  );
};

export { CharacterSummary };
