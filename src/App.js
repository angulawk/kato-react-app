import React from 'react';
import Dropdown from './components/molecules/Dropdown';

const items = [
  {
    name: "München"
  },
  {
    name: "London"
  }
];

function App() {
  return (
    <div className="App">
      <Dropdown items={items} onSelect={handleDropdownSelect} />
    </div>
  );

  function handleDropdownSelect() {}
}

export default App;
