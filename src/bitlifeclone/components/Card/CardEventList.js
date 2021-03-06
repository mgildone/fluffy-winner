import React from "react";

const CardEventList = props => {
  const eventList = props.events.map((event, index) => (
    <li key={`event-${index}`} className="c-card__event">
      {event}
    </li>
  ));
  return <ul className="c-card__feed u-clean-list">{eventList}</ul>;
};

export { CardEventList };
