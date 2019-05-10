import React, { useMemo, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlagIcon } from "react-flag-kit";

import "./Character.scss";


const CharacterModal = props => {
    const startGame = useCallback(() => {
        props.setCharacter(Object.assign({}, props.character, { newCharacter: false }))
    }, [props]);

  return (
      <React.Fragment>
      {useMemo(() => (
            <div className="c-character-modal">
                <div className="c-character-modal__info">
                    <h1>Welcome!</h1>
                    <div>{ props.character.firstName } { props.character.lastName } <FlagIcon code={props.character.country.abbreviation} /></div>
                    <small>
                        { props.character.age } years old, { props.character.lifePhase },
                        <FontAwesomeIcon icon={ props.character.gender.icon } />
                        <FontAwesomeIcon icon={ props.character.sexualOrientation.icon } />
                    </small>
                    <button className="c-bnt" type="button" onClick={startGame}>Play!</button>
                </div>
            </div>
        ),
        [props.character, startGame]
        )}
      </React.Fragment>
  );
};

export { CharacterModal };
