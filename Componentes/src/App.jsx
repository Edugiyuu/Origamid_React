import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (

    
    <form>
       <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      /> 
      <Select
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Radio
        options={['azul', 'verde', 'amarelo']}
        value={cor}
        setValue={setCor}
      />
    
    </form>
  );
};



export default App;
