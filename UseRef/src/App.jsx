import React from 'react';

 const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    
    console.log(video.current.currentTime);
    
    //Agora o vc pode usar as propriedades do video como por exemplo currentTime
    // O current é usado porque ele define como objeto pra q vc tenha ele como mutavel
    video.current = 'Teste'
    
    //agora o video.current é teste
  }, []);

  return <video ref={video}></video>;
}; 


/* const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios((comentarios) => [...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};
 */


export default App;
