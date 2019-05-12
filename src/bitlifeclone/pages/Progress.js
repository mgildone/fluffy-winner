import React, { useMemo } from "react";

import { CardList } from "../components/Card/CardList";

const Progress = props => {
  return (
    <React.Fragment>
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
