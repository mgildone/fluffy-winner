import React, { useState, useMemo, useEffect } from "react";
import "./App.scss";
import { GeneratePlayer } from "./utils/generatePlayer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "./components/Nav/Nav";
import { CardList } from "./components/Card/CardList";
import { CharacterSummary } from "./components/Character/CharacterSummary";
import { CharacterModal } from "./components/Character/CharacterModal";
import { Offline } from "./components/Offline/Offline";

library.add(far, fas);

function App() {
  const [years, setYear] = useState([]);
  const [character, setCharacter] = useState(GeneratePlayer());
  const [offline, setOffline] = useState(!navigator.onLine);
  const addYear = year => {
    const age = character.age + 1;
    setCharacter(Object.assign({}, character, { age }));
    setYear([...years, Object.assign({}, year, { age })]);
  };

  useEffect(() => {
    const yearsList = document.querySelector("main.u-container");
    if (yearsList) {
      yearsList.lastChild.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    }
  }, [years]);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="logo">BitLife Clone</h1>
        <Nav onClick={addYear} />
      </header>
      {useMemo(
        () => (
          <Offline offline={offline} setOffline={setOffline} />
        ),
        [offline]
      )}
      <main className="u-container">
        {character.newCharacter ? (
          <CharacterModal setCharacter={setCharacter} character={character} />
        ) : (
          <CharacterSummary character={character} />
        )}
        {useMemo(
          () => (
            <CardList years={years} />
          ),
          [years]
        )}
      </main>
    </div>
  );
}

export default App;
