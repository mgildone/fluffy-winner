import React, { useState } from 'react';
import './App.scss';

import { Nav } from './components/Nav/Nav'
import { Card } from './components/Card/Card'

function App() {
    const [years, setYear] = useState([]);
    const addYear= (year) => {
        setYear([
        ...years,
        year
        ]);
    }
    const yearsList  = years.map((year) => <Card {...year} />);
  return (
    <div className="app">
      <header className=".c-header app-header">
        <h1 className="logo">BitLife Clone</h1>
        <Nav onClick={addYear} />
      </header>
      <main className="u-container">
        { yearsList }
      </main>
    </div>
  );
}

export default App;
