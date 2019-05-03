import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className=".c-header app-header">
        <h1 class="logo">BitLife Clone</h1>
      </header>
      <main class="u-container">
        <article class="c-card">
            <header class="c-card__header"><time>2009</time></header>
            <ul class="c-card__feed u-clean-list">
                <li class="c-card__event">
                <i class="fas fa-music"></i> You started studying music.
                </li>
            </ul>
        </article>
        <article class="c-card">
            <header class="c-card__header"><time>2010</time></header>
            <ul class="c-card__feed u-clean-list">
                <li class="c-card__event">
                <i class="fas fa-school"></i> You started going to school.
                </li>
                <li class="c-card__event">
                <i class="fas fa-graduation-cap"></i> You graduated.
                </li>
                <li class="c-card__event">
                <i class="fab fa-itunes"></i> You released <strong>Modestino Power</strong> and sold <strong>10 copies</strong>.
                </li>
                <li class="c-card__event">
                <i class="fas fa-pills"></i> You are ill.
                </li>
            </ul>
        </article>
        <article class="c-card">
            <header class="c-card__header"><time>2011</time></header>
            <ul class="c-card__feed u-clean-list">
                <li class="c-card__event">
                <i class="fas fa-paint-brush"></i> You started studying art.
                </li>
                <li class="c-card__event">
                <i class="fab fa-itunes"></i> You released <strong>Power Modestino</strong> and sold <strong>5 copies</strong>.
                </li>
                <li class="c-card__event">
                <i class="fab fa-itunes"></i><strong>Modestino Power</strong> has sold <strong>10 copies</strong>.
                </li>
            </ul>
        </article>
        <article class="c-card">
            <header class="c-card__header"><time>2012</time></header>
            <ul class="c-card__feed u-clean-list">
                <li class="c-card__event">
                <i class="fab fa-itunes"></i><strong>Power Modestino</strong> has sold <strong>5 copies</strong>.
                </li>
                <li class="c-card__event">
                <i class="fab fa-itunes"></i><strong>Modestino Power</strong> has sold <strong>10 copies</strong>.
                </li>
            </ul>
        </article>
      </main>
    </div>
  );
}

export default App;
