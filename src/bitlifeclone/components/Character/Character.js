import React from "react";

import "./Character.scss";

import { CharacterBar } from "./CharacterBar";
import { CharacterField } from "./CharacterField";

const CharacterContainer = props => {
  return <div className="c-character" {...props} />;
};

const CharacterList = props => {
  return <dl className="c-character__list" {...props} />;
};

const Character = props => {
  console.log(JSON.stringify(props.character, null, 2));
  return (
    <CharacterContainer>
      <CharacterList>
        <CharacterField
          label={"Name"}
          result={`${props.character.firstName} ${props.character.lastName}`}
        />
        <CharacterField
          label={"Nationality"}
          result={props.character.nationality.name}
          icon={["far", "flag"]}
        />
        <CharacterField label={"Gender"} result={props.character.gender.name} />
        <CharacterField
          label={"Sexual orientation"}
          result={props.character.sexualOrientation.name}
        />
        <hr />
        <CharacterBar
          label={"Happiness"}
          result={props.character.happiness}
          icon={["far", "laugh-beam"]}
        />
        <CharacterBar
          label={"Health"}
          result={props.character.health}
          icon={["fas", "heartbeat"]}
        />
        <CharacterBar
          label={"Smarts"}
          result={props.character.smarts}
          icon={["fas", "brain"]}
        />
        <CharacterBar
          label={"Looks"}
          result={props.character.looks}
          icon={["fas", "fire-alt"]}
        />
      </CharacterList>
    </CharacterContainer>
  );
};

export { Character };
