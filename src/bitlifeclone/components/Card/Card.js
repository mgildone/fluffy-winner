import React from "react";

import "./Card.scss";

import { CardEventList } from "./CardEventList";

const Card = props => {
  return (
    <article className="c-card">
      <header className="c-card__header">Age: {props.age} {props.age > 1 ? "years" : "year" } old</header>
      <CardEventList events={props.events} />
    </article>
  );
};

export { Card };
