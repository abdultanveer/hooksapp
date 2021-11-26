
import './App.css';
import React from 'react';
import ClickCounter from './components/higherorderComponents/ClickCounter';
import HoverCounter from './components/higherorderComponents/HoverCounter';
import DocTitle from './components/customhooks/DocTitle';
import DocTitle2 from './components/customhooks/DocTitle2';





function App() {
  return (

    <div className="App">
      <DocTitle/>
      <DocTitle2/>
    </div>

  );
}

export default App;
