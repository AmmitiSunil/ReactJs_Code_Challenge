import React, { useState } from 'react';
import Grid from './Grid';

function App() {
  const [input, setInput] = useState('');
  const [coloredIndices, setColoredIndices] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const calculateIndices = () => {
    const numbers = input.split(',').map(Number);
    const base = numbers[0];
    const indices = numbers.slice(1).map(n => n / base);
    setColoredIndices(indices);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter numbers like 3,3,12,15,29"
      />
      <button onClick={calculateIndices}>Color Grid</button>
      <Grid coloredIndices={coloredIndices} />
    </div>
  );
}

export default App;


