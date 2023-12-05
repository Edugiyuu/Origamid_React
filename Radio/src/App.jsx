import React from 'react';
const App = () => {
  const [radio, setRadio] = React.useState('');

  function handleChange({ target }) {
    setRadio(target.value);
  }

  return (
    <form>
      {radio}
      <label>
        <input
          type="radio"
          value="test"
          checked={radio === 'test'}
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked= {radio === 'smartphone'}
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="tablet"
          checked={radio === 'tablet'}
          onChange={handleChange}
        />
        Tablet
      </label>
    </form>
  );
};


export default App;
