import React from 'react';

import './Card.scss';

const Card = (props) => {
    const eventList = props.events.map(event => <li className="c-card__event">{ event }</li>)
    return (
        <article className="c-card">
            <header className="c-card__header">Age: {props.age} years old</header>
            <ul className="c-card__feed u-clean-list">
                {eventList}
            </ul>
        </article>
    );
}

export { Card }