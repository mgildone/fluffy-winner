import React from "react";

import { Card } from "./Card";

const CardList = props => {
  return props.years.map((year, index) => (
    <Card key={`card-${index}`} {...year} />
  ));
};

export { CardList };
