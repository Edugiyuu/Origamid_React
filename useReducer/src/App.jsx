import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function reducer(state, action) {
  /* switch (action) {
    case 'aumentar':
      return state + 1;
    case 'reduzir':
      return state - 1;
    default:
      throw new Error();
  } */
  if (action === 'aumentar') {
    return state + 1
  }
  if (action === 'reduzir') {
    return state + 1
  }
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
