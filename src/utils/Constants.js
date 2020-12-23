const Constants = {
  URLS: {
    asteroid_api: {
      BASE_URL: 'https://api.nasa.gov/neo/rest/v1/neo',
      API_KEY: 'J4XBFyC6XAtOu9HV3BxelUeR4XXIE3QwcLXemScf'
    },
    random_api: {
      BASE_URL: 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY',
    },
  },
  NAVIGATION: {
    routes: {
      Screens: {
        HOME: 'Home',
        ASTEROID: 'Asteroid',
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
