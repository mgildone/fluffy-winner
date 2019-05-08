import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterField = props => {
    const icon = props.icon ? <FontAwesomeIcon icon={props.icon} /> : null
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
