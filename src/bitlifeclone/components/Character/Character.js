import React from "react";

import "./Character.scss";

import { CharacterBar } from "./CharacterBar";
import { CharacterField } from "./CharacterField";

const CharacterContainer = (props) => {
    return <dl className="c-character" {...props} />
}

const Character = props => {
  return (
    <CharacterContainer id="ca">
        <CharacterField label={"Name"} value={`${props.character.firstName} ${props.character.lastName}`} />
        <CharacterField label={"Nationality"} value={props.character.nationality.name} icon={["far", "flag"]} />
        <CharacterField label={"Gender"} value={props.character.gender.name} />
        <CharacterField label={"Sexual orientation"} value={props.character.sexualOrientation} />
        <hr />
        <CharacterBar label={"Happiness"} value={props.character.happiness} icon={["far", "laugh-beam"]} />
        <CharacterBar label={"Health"} value={props.character.health} icon={["fas", "heartbeat"]} />
        <CharacterBar label={"Smarts"} value={props.character.smarts} icon={["fas", "brain"]} />
        <CharacterBar label={"Looks"} value={props.character.looks} icon={["fas", "fire-alt"]} />
    </CharacterContainer>
  );
};

export { Character };
