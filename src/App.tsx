import React from 'react';
import logo from './logo.svg';
import './App.scss';
import LocalStorage from './components/localStorage';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        REACT CUSTOM HOOKS
      </header>
      <div className="App-content">
        <LocalStorage />
      </div>
    </div>
  );
}

export default App;
