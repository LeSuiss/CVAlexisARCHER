import React from 'react';
import './App.scss';
import Header from './components/header/Header.js';
import Skills from './components/skills/skills';
import Experiences from './components/experiences/Experiences';
import Formation from './components/formations/Formations'

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Experiences />
      <Formation />


    </div>
  );
}

export default App;
