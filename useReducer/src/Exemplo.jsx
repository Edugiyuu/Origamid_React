import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function reducer(state, action) {
  
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('reduzir')}>-</button>
      <p>{state}</p>
    </div>
  );
};




export default App;
