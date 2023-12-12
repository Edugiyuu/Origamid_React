import React from 'react';
import "./Header.css"
import {NavLink} from 'react-router-dom'

const Header = () => {


  return (
    <div>
      <NavLink to='/'>Home </NavLink>
       |{' '}
      <NavLink to='sobre'> Sobre</NavLink>
       {' '}|{' '}
      <NavLink to='login'> Login</NavLink>
      {/* O Link irá modificar a rota e renderizar o novo componente sem recarregar a página */}
      {/* O NavLink é igual ao Link só que a diferença é que ele mostra a rota ativa */}
    </div>
  );
};



export default Header;