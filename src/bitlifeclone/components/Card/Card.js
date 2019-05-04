import React from "react";

import "./Card.scss";

import { CardEventList } from "./CardEventList";

const Card = props => {
  return (
    <article className="c-card">
      <header className="c-card__header">Age: {props.age} years old</header>
      <CardEventList events={props.events} />
    </article>
  );
};

export { Card };
