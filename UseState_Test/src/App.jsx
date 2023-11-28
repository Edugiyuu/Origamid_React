import React, { useState } from 'react';

const App = () => {
  const [teste, setTeste] = useState("Deseja iniciar?");
  const [simButtonDisabled, setSimButtonDisabled] = useState(false);
  const [nãoButtonDisabled, setNãoButtonDisabled] = useState(false);

  function Sim() {
    setTeste("Ótimo");
    if (teste === "Ótimo") {
      setTeste('Você gosta de doce?');
    } else if (teste === 'Você gosta de doce?') {
      setTeste('Eu também :)');
    } else if (teste === 'Eu também :)') {
      setSimButtonDisabled(true);
      setNãoButtonDisabled(true);
      setTeste("Obrigado por participar");
    }
  }

  function Não() {
    setTeste("Que peninha :(");
    setSimButtonDisabled(true);
      setNãoButtonDisabled(true);
      
  }

  return (
    <div>
      <button onClick={Não} disabled={nãoButtonDisabled}>Não</button>
      <p>{teste}</p>
      <button className="Botão_Sim" onClick={Sim} disabled={simButtonDisabled}>
        Sim
      </button>
    </div>
  );
};


export default App

