import React, { useState } from 'react';

const App = () => {
  const [teste, setTeste] = useState("Deseja iniciar?");
  const [simButtonDisabled, setSimButtonDisabled] = useState(false);

  function Sim() {
    setTeste("Ótimo");
    if (teste === "Ótimo") {
      setTeste('Você gosta de doce?');
    } else if (teste === 'Você gosta de doce?') {
      setTeste('Eu também :)');
    } else if (teste === 'Eu também :)') {
      setSimButtonDisabled(true);
    }
  }

  function Não() {
    setTeste("Que peninha :(");
  }

  return (
    <div>
      <button onClick={Não}>Não</button>
      <p>{teste}</p>
      <button className="Botão_Sim" onClick={Sim} disabled={simButtonDisabled}>
        Sim
      </button>
    </div>
  );
};


export default App

