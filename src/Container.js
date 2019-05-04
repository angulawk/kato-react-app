import React, { useEffect, useState } from 'react';
import Dropdown from './components/molecules/Dropdown';
import Text from './components/atoms/Text';
import Table from './components/molecules/Table';
import { compose, graphql, withApollo } from 'react-apollo';
import gql from "graphql-tag";
import Loader from "./components/atoms/Loader";

const GET_FORECAST = gql`
  query($city: String!, $appId: String!) {
    forecasts(city: $city, appId: $appId) {
      list {
        dt
        dt_txt
        main {
          humidity
          temp
        }
      }
      city {
        name
      }
    }
  }
`;

const items = [
  {
    name: "München",
    id: 'b6907d289e10d714a6e88b30761fae22'
  },
  {
    name: "London",
    id: '535310d714a6e88b30761fae22'
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

function Container({ forecastQuery }) {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValueId, setSelectedValueId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(isSelected) {
      setInterval(() => {
        forecastQuery && forecastQuery.refetch({ city: selectedValue, appId: selectedValueId });
      }, 10000);
    }
  }, [forecastQuery, isSelected, selectedValue, selectedValueId]);

  useEffect(() => {
    const isLoading = forecastQuery && forecastQuery.loading;

    if (!isLoading) {
      setIsLoading(false);
    }
  }, [forecastQuery]);

  return (
    <main>
      <Loader isLoading={isLoading} />
      <Text>
        Select city to display weather
      </Text>
      <Dropdown
        items={items}
        onSelect={handleDropdownSelect}
      />
      {!isLoading &&
        <Table
          titles={titles}
          data={ forecastQuery && forecastQuery.forecasts }
        />
      }
    </main>
  );

  async function handleDropdownSelect(value) {
    const selectedItem = items.find(item => item.name === value);
    setIsSelected(true);
    setSelectedValue(value);
    setSelectedValueId(selectedItem.id);

    await forecastQuery && forecastQuery.refetch({ city: value, appId: selectedItem.id });
  }
}

export default compose(
	graphql(GET_FORECAST,
		{
			skip: props => !!props.skip,
			options: ( { variables: { city:'', appId: '' } } ),
      name: "forecastQuery"
		}
	)
)(withApollo(Container));
