import React from 'react';
import bo from './bo.png';
import './App.css';

const App = (): JSX.Element => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={bo} className="App-logo" alt="logo" />
                <p>aanes.dev</p>
                <a href="https://github.com/boaanes" className="App-link">
                    GitHub
                </a>
            </header>
        </div>
    );
};

export default App;
