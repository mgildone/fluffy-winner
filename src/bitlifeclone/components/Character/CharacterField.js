import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterField = props => {
  const icon = props.icon ? (
    <span data-testid={`${props.icon.join("-")}`}>
      <FontAwesomeIcon className="c-icon" icon={props.icon} />
    </span>
  ) : null;
  return (
    <div>
      <dt>
        {props.label} {icon}
      </dt>
      <dd>{props.result}</dd>
    </div>
  );
};

export { CharacterField };
