const Constants = {
  URLS: {
    country_api: {
      BASE_URL: 'https://restcountries.eu/rest/v2',
    },
    weather_api: {
      BASE_URL: 'http://api.weatherstack.com',
      API_KEY: '31328b8ae756c1e5c9c38a700f7b689e',
    },
  },
  NAVIGATION: {
    routes: {
      Screens: {
        HOME: 'Home',
        COUNTRY: 'Country',
        Weather: 'Weather'
      },
      Tabs: {
        HOME_TAB: 'Home',
      },
    },
    headers: {
      Tabs: {
        HOME_TAB: 'HOME',
      },
    },
  },
};

export default Constants;
