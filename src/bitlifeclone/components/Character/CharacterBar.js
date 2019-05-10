import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterBar = props => {
    return (
        <div>
        <dt>
          {props.label} <FontAwesomeIcon className="c-icon" icon={props.icon} />
        </dt>
        <dd>
          <div className={`c-bar__container`}>
            <div
              className={`c-bar__value c-bar__value-${props.value}`}
            />
          </div>
        </dd>
      </div>
    )
};

export { CharacterBar };
