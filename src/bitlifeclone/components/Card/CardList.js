import React from "react";

import { Card } from "./Card";

const CardList = props => {
  return props.years.map(year => <Card {...year} />);
};

export { CardList };
