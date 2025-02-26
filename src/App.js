import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from "./Hello";
import Thanks from "./Thanks";
import SimpleForm from "./forms/SimpleForm";




function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <Hello word="React world"/>
                    <Thanks firstName="Alec" lastName="Ko"/>
                    <SimpleForm />
                </p>
            </header>
        </div>
    );
}

export default App;
