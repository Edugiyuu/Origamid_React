import React from "react"



const Produto = ({nome, propriedade}) => {
    return(
        <div>
            <li>{nome}</li>
            <li>
            {propriedade.map ((produto)=>(
                <li>{produto.propriedade}</li>        
            ))}
            </li>
        </div>
    )
}
export default Produto