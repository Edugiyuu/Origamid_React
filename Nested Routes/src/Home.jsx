import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <p>algo</p>
        <Link to = '/produto/notebook'>Notebook</Link>{' '}
        <Link to = '/produto/smartphone'>Smartphone</Link>
        {/* O Link irá modificar a rota e renderizar o novo componente sem recarregar a página */}
        {/* O NavLink é igual ao Link só que a diferença é que ele mostra a rota ativa */}
    </div>
  );
};



export default Home;