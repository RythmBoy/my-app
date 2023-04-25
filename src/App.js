import logo from './people-and-animals-image.png';
import './App.css';
import React from "react"; 
import ScrambleText from "./ScrambleText"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>raNDOm cAPs gENeratOr</h1> 
      <ScrambleText />
        <p>
          Type your post title in the box above to sCRamBel iT
        </p>
        <p>
          Then click "Copy to clipboard"
        </p>
        <p>
          by u/oreiz
        </p>
        <a
          className="App-link"
          href="https://www.reddit.com/r/PeopleAndAnimalsDying/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go back to r/PeopleAndAnimalsDying
        </a>
      </header>
    </div>
  );
}

export default App;