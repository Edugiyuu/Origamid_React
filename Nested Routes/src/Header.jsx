import React from 'react';
import "./Header.css"
import {NavLink, useLocation} from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  
  React.useEffect(() =>{
    console.log('mudou a rota');
  },[location])

  return (
    <div>
      <NavLink to='/'>Home </NavLink>
       |{' '}
      <NavLink to='sobre'> Sobre</NavLink>
       {' '}|{' '}
      <NavLink to='login'> Login</NavLink>
    </div>
  );
};



export default Header;