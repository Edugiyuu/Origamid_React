import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';

/* const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
}; */

//mudando o estado
let ativo = true;
function Teste(){
 if (ativo === true) {
  ativo = false
 }else{
  ativo = true
 }
 console.log(ativo);
}

const App = () => {
  
  //o ternario não muda porque o react não vai renderizar-lo novamente porque uma variavel mudou..
  //pra isso que existem os hooks
  return (
    <button onClick={Teste}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
  );
};


export default App;
