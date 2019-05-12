import React, { useMemo, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlagIcon } from "react-flag-kit";
import { navigate } from "@reach/router";

import "./Character.scss";

const CharacterModal = props => {
  const startGame = useCallback(async () => {
    await props.setCharacter(
      Object.assign({}, props.character, { newCharacter: false })
    );
    navigate("/progress");
  }, [props]);

  return (
    <React.Fragment>
      {useMemo(
        () => (
          <div className="c-character-modal">
            <div className="c-character-modal__info">
              <h1>Welcome!</h1>
              <div>
                You are born {props.character.gender.name}{" "}
                <FontAwesomeIcon
                  className="c-icon"
                  icon={props.character.gender.icon}
                />{" "}
                in {props.character.country.name}{" "}
                <FlagIcon
                  className="c-icon"
                  code={props.character.country.abbreviation}
                />
              </div>
              <div>
                Your name is {props.character.firstName}{" "}
                {props.character.lastName}
              </div>
              <button className="c-bnt" type="button" onClick={startGame}>
                Play!
              </button>
              <hr />
              <button
                className="c-bnt c-bnt--negative"
                type="button"
                onClick={startGame}
              >
                I want to reborn!
              </button>
            </div>
          </div>
        ),
        [props.character, startGame]
      )}
    </React.Fragment>
  );
};

export { CharacterModal };
