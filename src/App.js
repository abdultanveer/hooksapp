import logo from './logo.svg';
import './App.css';
import React from 'react';
import ClickCounter from './components/higherorderComponents/ClickCounter';
import HoverCounter from './components/higherorderComponents/HoverCounter';





function App() {
  return (

    <div className="App">
     <ClickCounter/>
     <HoverCounter/>
    </div>

  );
}

export default App;
