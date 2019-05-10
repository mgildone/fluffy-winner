import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.scss";

const Nav = props => {
  const insertYear = e => {
    e.preventDefault();
    props.onClick({
      age: props.age,
      events: [
        "You started going to school.",
        "You graduated.",
        "You released Modestino Power and sold 10 copies.",
        "Modestino Power has sold 10 copies."
      ]
    });
  };
  return (
    <nav className="c-nav-bar c-nav-bar--bottom u-container--wide">
      <ul className="u-clean-list u-flex">
        {
          //<li className="c-nav-bar__item c-button c-button--1-3">
          //  <a href="/career">Career</a>
          //</li>
        }
        <li className="c-nav-bar__item c-button c-nav-bar__item-priority  c-button--1-3">
          <button type="button" onClick={insertYear}>
            <FontAwesomeIcon className="c-icon" icon={["far", "calendar-plus"]} size="2x" />
          </button>
        </li>
        {
          //<li className="c-nav-bar__item c-button c-button--1-3">
          //  <a href="/profile">Profile</a>
          //</li>
        }
      </ul>
    </nav>
  );
};

export { Nav };
