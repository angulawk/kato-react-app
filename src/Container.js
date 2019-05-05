import React, { useEffect, useState } from 'react';
import Dropdown from './components/molecules/Dropdown';
import Text from './components/atoms/Text';
import Table from './components/molecules/Table';
import { compose, graphql, withApollo } from 'react-apollo';
import gql from "graphql-tag";
import Loader from "./components/atoms/Loader";

const GET_FORECAST = gql`
  query($city: String!, $countryCode: String!, $appId: String!) {
    forecasts(city: $city, countryCode: $countryCode, appId: $appId) {
      list {
        dt_txt
        main {
          humidity
          temp
        }
      }
    }
  }
`;

const APP_ID = "a400b7bf74842ffd8d384f7defdbefee";

const items = [
  {
    name: "München"
  },
  {
    name: "London"
  }
];

const queryItems = [
  {
    name: "München",
    city: "Munich",
    countryCode: "de"
  },
  {
    name: "London",
    city: "London",
    countryCode: "uk"
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
  const [isLoading, setIsLoading] = useState(true);

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
    const selectedItem = queryItems.find(item => item.name === value);
    const { city, countryCode } = selectedItem;
    forecastQuery.stopPolling();

    await forecastQuery && forecastQuery.refetch({ city, countryCode, appId: APP_ID });
    forecastQuery && forecastQuery.startPolling(10000);
  }
}

export default compose(
	graphql(GET_FORECAST,
		{
			options: (
        {
          variables: {
            city: '',
            countryCode: '',
            appId: APP_ID
          }
        }
      ),
      name: "forecastQuery"
		}
	)
)(withApollo(Container));
