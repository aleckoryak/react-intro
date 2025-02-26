import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greetings from "./Greetings";
import Hello from "./Hello";
import Thanks from "./Thanks";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <Hello word="React world"/>
                    <Greetings firstName="Alec" lastName="Ko"/>
                    <Thanks firstName="Alec" lastName="Ko"/>
                </p>
            </header>
        </div>
    );
}

export default App;
