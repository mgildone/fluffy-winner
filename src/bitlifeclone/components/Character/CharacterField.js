import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterField = props => {
    const icon = props.icon ? <span data-testid={`${props.icon.join("-")}`}><FontAwesomeIcon icon={props.icon} /></span> : null
    return (
        <div>
        <dt>
          { props.label } { icon }
        </dt>
        <dd>{ props.value }</dd>
      </div>
    )
};

export { CharacterField };
