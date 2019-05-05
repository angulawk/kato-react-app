const { ApolloServer, gql } = require('apollo-server');
const { RESTDataSource } = require('apollo-datasource-rest');

class ForecastsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.openweathermap.org';
  }

  async getForecast(city, countryCode, appId) {
    try {
      const data = await this.get(`${this.baseURL}/data/2.5/forecast?q=${city},${countryCode}&appid=${appId}`, null, {
        cacheOptions: {ttl: 60}
      })
      return data;
    } catch (error) {
      console.log(error);
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

  type Forecast {
    list: [ForecastData]
  }

  type Query {
    forecasts(city: String, countryCode: String, appId: String): Forecast
  }
`;

const resolvers = {
  Query: {
    forecasts: async (_source, { city, countryCode, appId }, { dataSources }) => {
      return dataSources.forecastsAPI.getForecast(city, countryCode, appId);
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
