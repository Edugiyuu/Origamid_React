import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Produto = () => {

    const params = useParams();
    
  return (
    <div>
        <h1>Produto: {params.id}</h1>
        {/* O params.id é o id que fica no Route path */}
    </div>
  );
};



export default Produto;