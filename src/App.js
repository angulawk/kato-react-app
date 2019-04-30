import React from 'react';
import Dropdown from './components/molecules/Dropdown';
import Text from './components/atoms/Text';
import Table from './components/molecules/Table';

const items = [
  {
    name: "München"
  },
  {
    name: "London"
  }
];

const titles = [
  {
    name: "Date"
  },
  {
    name: "Humidity"
  },
  {
    name: "Temp"
  }
]

function App() {
  return (
    <div className="App">
      <Text>
        Select city to display weather
      </Text>
      <Dropdown items={items} onSelect={handleDropdownSelect} />
      <Table titles={titles} />
    </div>
  );

  function handleDropdownSelect() {}
}

export default App;
