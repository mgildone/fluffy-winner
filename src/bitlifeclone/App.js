import React, { useState } from "react";
import "./App.scss";
import { GeneratePlayer } from "./utils/generatePlayer";

import { Nav } from "./components/Nav/Nav";
import { CardList } from "./components/Card/CardList";
import { Character } from "./components/Character/Character";

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
        <Character character={character} />
        <CardList years={years} />
      </main>
    </div>
  );
}

export default App;
