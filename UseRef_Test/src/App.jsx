import React, { useEffect, useRef, useState } from 'react';

const App = () => {

  const [nome, setName] = useState('')
  const inputRef = useRef()

  function focus(){
    inputRef.current.focus()
  }

  return(
    <>
    <input ref={inputRef} value={nome} onChange={nome => setName(nome.target.value)}/>
    <div>Meu nome é {nome}</div>
    <button onClick={focus}>Focus</button>
    </>
  )
};


export default App;
