import React from 'react';
import { useLocation, useParams, Route, Routes, NavLink, Outlet} from 'react-router-dom';


const Produto = () => {

    const params = useParams();
    
  return (
    <div>
        <h1>Produto: {params.id}</h1>
        {/* O params.id é o id que fica no Route path */}
        <nav>
          <NavLink to ="">Descrição</NavLink>
          <NavLink to ="avaliacao">Avalição</NavLink>
          <NavLink to ="customizado">Customização</NavLink>
        </nav>
       <Outlet/>
    </div>
  );
};



export default Produto;