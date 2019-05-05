import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import "./index.css";
import App from "./bitlifeclone/App";
import * as serviceWorker from "./serviceWorker";

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to="app">BitLife Clone</Link>
    </nav>
  </div>
);

const Dash = () => <div>Dash</div>;

ReactDOM.render(
  <Router>
    <Home path="/" />
    <Dash path="dashboard" />
    <App path="bitlifeclone" />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
