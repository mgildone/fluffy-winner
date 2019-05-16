import React, { useMemo } from "react";

import { Nav } from "../components/Nav/Nav";
import { CardList } from "../components/Card/CardList";

const Progress = props => {
  return (
    <React.Fragment>
      {props.character.age < props.character.deathAge ? (
        <Nav onClick={props.addYear} />
      ) : null}
      {useMemo(
        () => (
          <CardList years={props.years} />
        ),
        [props.years]
      )}
    </React.Fragment>
  );
};

export { Progress };
