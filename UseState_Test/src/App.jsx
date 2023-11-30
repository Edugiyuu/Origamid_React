import React, { useState } from 'react';

const App = () => {
  const [teste, setTeste] = useState("Deseja iniciar?");
  const [ButtonDisabled, setButtonDisabled] = useState(false);
  const [displayButton, setDisplayButton] = useState('none');
  const [displayButtonSimOuNao, setDisplayButtonSimOuNao] = useState('block');


  function Sim() {
    setTeste("Ótimo");
    setDisplayButton('block')
    setDisplayButtonSimOuNao('none')
    
    if (teste === 'Você gosta de doce?') {
      setTeste('Eu também :)');
      setDisplayButton('block')
      setButtonDisabled(true);
      
    }
  }

  function Next() {
    if (teste === "Ótimo") {

      setTeste('Você gosta de doce?');
      setDisplayButtonSimOuNao('block')
      setDisplayButton('none')

    }else if (teste === 'Eu também :)' || 'Eu também não..') {
      setTeste("Obrigado por participar");
    }
  }


  function Não() {
    setTeste("Que peninha :(");
    setButtonDisabled(true);

    if (teste === 'Você gosta de doce?') {
      setTeste('Eu também não..');
      setDisplayButton('block')
      setDisplayButtonSimOuNao('none')
      
    }
  }

  return (
    <div>
      <button onClick={Não} disabled={ButtonDisabled} style={{display: displayButtonSimOuNao}}>Não</button>
      <p>{teste}</p>
      <button className="Botão_Sim" onClick={Sim} disabled={ButtonDisabled}style={{display: displayButtonSimOuNao}}>Sim</button>
      <button style={{display: displayButton}} onClick={Next}>Proximo</button>
    </div>
  );
};


export default App
