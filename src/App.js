import React from 'react';
import Dropdown from './components/molecules/Dropdown';
import Text from './components/atoms/Text';

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
      <Text>
        Select city to display weather
      </Text>
      <Dropdown items={items} onSelect={handleDropdownSelect} />
    </div>
  );

  function handleDropdownSelect() {}
}

export default App;
