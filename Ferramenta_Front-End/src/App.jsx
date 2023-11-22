import React from "react"

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {

const dados = luana.compras.map((objeto) => Number(objeto.preco)).reduce((valorA,valorB) => valorA + valorB)
console.log(dados);

  return <div>
    <p>Nome: {luana.cliente}</p>
    <p>Idade: {luana.idade}</p>
    <p>Situação: <span>{luana.ativa ? 'ativa' : 'false'}</span></p>
    <p>Total gasto: {dados}</p>
  </div>;
};

export default App

