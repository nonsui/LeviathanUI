import React from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from "./Confirm"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and TypeScript
        </a>
      </header>
      <Confirm  title="Jim Kash Portfolio"
              content="Welcome to my portfolio site"
              okCaption="ok"
              cancelCaption="cancel"/>
    </div>
  );
}

export default App;
