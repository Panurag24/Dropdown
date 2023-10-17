// App.jsx

import React from 'react';
import './App.css';
import Dropdown from './Dropdown'; // Import the Dropdown component

function App() {
  const items = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="App">
      <h1>React Dropdown Example</h1>
      <Dropdown items={items} /> {/* Use the Dropdown component here */}
    </div>
  );
}

export default App;
