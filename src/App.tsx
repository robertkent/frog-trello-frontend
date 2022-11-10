import React from "react";
import "./App.css";
import Boards from "./components/Boards/Boards";

function App() {
  return (
    <div className="App">
      <div className="App-logo">
        <img src="/frog.png" alt="Frog Trello App" />
        <p>Robert Kent / Frog Trello App</p>
      </div>
      <div className="boards-holder">
        <Boards />
      </div>
    </div>
  );
}

export default App;
