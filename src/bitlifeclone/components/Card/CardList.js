import React from "react";

import { Card } from "./Card";

const CardList = props => {
  const years = props.years.map((year, index) => (
    <Card key={`card-${index}`} {...year} />
  ));
  return <div className="c-year-list">{years}</div>;
};

export { CardList };
