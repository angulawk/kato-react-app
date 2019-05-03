const { ApolloServer, gql } = require('apollo-server');
const { RESTDataSource } = require('apollo-datasource-rest');

class ForecastsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://samples.openweathermap.org';
  }

  async getForecast(city, appId) {
    try {
      const data = await this.get(`https://samples.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${appId}`, null, {
        cacheOptions: {ttl: 60}
      })
      return data;
    } catch (error) {
      console.log(error)
    }
  }
}

const typeDefs = gql`
 type ForecastDetails {
   humidity: Int
   temp: Float
 }

 type ForecastData {
   dt: String
   dt_txt: String
   main: ForecastDetails
 }

 type CityDetails {
   name: String
 }

  type Forecast {
    list: [ForecastData]
    city: CityDetails
  }

  type Query {
    forecasts(city: String, appId: String): Forecast
  }
`;

const resolvers = {
  Query: {
    forecasts: async (_source, { city, appId }, { dataSources }) => {
      return dataSources.forecastsAPI.getForecast(city, appId);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      forecastsAPI: new ForecastsAPI()
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
