import logo from './logo.svg';
import './App.css';
import React ,{useReducer}from 'react';
import CounterTwo from './components/reducerhook/CounterTwo';
import CounterThree from './components/reducerhook/CounterThree';
import CompA from './components/contextNreducer/CompA';
import CompB from './components/contextNreducer/CompB';
import CompC from './components/contextNreducer/CompC';

export const CountContext = React.createContext()
const initialState = 0

const reducer = (state,action) => {
    switch(action){
        case 'increment': return state+1
        case 'decrement': return state-1
        case 'reset': return initialState
        default: return state
    }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider 
              value = {  
                        {countState: count, countDispatch: dispatch} 
                       }>
    <div className="App">
    Count in app.js is {count}
      <CompA/>
      <CompB/>
      <CompC/>
    </div>
    </CountContext.Provider>
  );
}

export default App;
