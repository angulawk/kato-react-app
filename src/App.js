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
];

const data = [
  {
    dt: 1487246400,
    date: "1/02",
    humidity: 10,
    temp: 3324
  },
  {
    dt: 1487257200,
    date: "3/03",
    humidity: 40,
    temp: 6543
  },
  {
    dt: 1487408400,
    date: "4/05",
    humidity: 90,
    temp: 7553
  }
]

function App() {
  return (
    <main>
      <Text>
        Select city to display weather
      </Text>
      <Dropdown items={items} onSelect={handleDropdownSelect} />
      <Table titles={titles} data={data} />
    </main>
  );

  function handleDropdownSelect() {}
}

export default App;
