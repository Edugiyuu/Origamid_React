import React from 'react';
import Produto from './Produto';

const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current);
  }, []);

  return <video ref={video}></video>;
};


export default App;
