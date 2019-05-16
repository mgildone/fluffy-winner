import React, { useState, useMemo, useEffect } from "react";
import "./App.scss";
import { GeneratePlayer } from "./utils/generatePlayer";
import { generateLife } from "./utils/generateYear";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { CharacterSummary } from "./components/Character/CharacterSummary";
import { Offline } from "./components/Offline/Offline";
import { Router } from "@reach/router";
import { Homepage } from "./pages/Homepage";
import { Progress } from "./pages/Progress";
import { Profile } from "./pages/Profile";

library.add(far, fas);

function App() {
  const [character, setCharacter] = useState(GeneratePlayer());
  const life = generateLife(character);
  const [years, setYear] = useState([life[0]]);

  const [offline, setOffline] = useState(!navigator.onLine);
  const addYear = () => {
    const age = character.age + 1;
    setCharacter(Object.assign({}, character, { age }));
    setYear([...years, life[age]]);
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

  useEffect(() => {
    console.log(JSON.stringify(character, null, 2));
    console.log(JSON.stringify(years, null, 2));
  });

  return (
    <div className="app">
      <div className="app-header">
        <header>
          <h1 className="logo">BitLife Clone</h1>
        </header>
        {useMemo(
          () => (
            <Offline offline={offline} setOffline={setOffline} />
          ),
          [offline]
        )}
        {!character.newCharacter ? (
          <CharacterSummary character={character} />
        ) : null}
      </div>
      <main className="u-container">
        <Router>
          <Homepage
            path="/"
            setCharacter={setCharacter}
            character={character}
          />
          <Progress path="/progress" character={character} addYear={addYear} years={years} />
          <Profile
            path="/profile"
            setCharacter={setCharacter}
            character={character}
          />
        </Router>
      </main>
    </div>
  );
}

export default App;
