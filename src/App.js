import React, { useState, useEffect } from 'react';
import './App.css';
import getCodData from './services/cod-api'
// import { api, platforms } from 'call-of-duty-api';


function App() {

  useEffect(() => {
    getCodData('MCH_MrMangou')
  
  });


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
