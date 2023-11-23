// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)


  import React from "react";

 

const Produtos = () => {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
      ];

    return (
      <div>
        <h1 style={{color: 'green'}}>Produtos</h1>
        <div>
            {produtos.map ((produto)=>(
                <li key={produto.nome}{...produto}>{produto.nome}</li>
                
            ))}

            
        </div>
        <div>
        
       
        </div>
      </div>
    );
  };
  
  
  export default Produtos;