import React, { useState, useMemo } from "react";
import "./App.scss";
import { GeneratePlayer } from "./utils/generatePlayer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "./components/Nav/Nav";
import { CardList } from "./components/Card/CardList";
import { Character } from "./components/Character/Character";

library.add(far, fas);

function App() {
  const [years, setYear] = useState([]);
  const [character, setCharacter] = useState(GeneratePlayer());
  const addYear = year => {
    setYear([...years, year]);
  };

  return (
    <div className="app">
      <header className=".c-header app-header">
        <h1 className="logo">BitLife Clone</h1>
        <Nav onClick={addYear} />
      </header>
      <main className="u-container">
        {useMemo(
          () => (
            <Character onCLick={setCharacter} character={character} />
          ),
          [character]
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
