import Constants from "../utils/Constants";
import HttpHelper from "../utils/HttpHelperUtil";

const { Routes } = Constants.URLS.asteroid_api;

function getAsteroid(id) {
  return HttpHelper.getWithParam(id).
    then(data => {
    console.log(data);
    const asteroids = data.map(({ name, nasa_jpl_url, is_potentially_hazardous_asteroid }) => ({ name, nasa_jpl_url, is_potentially_hazardous_asteroid }));
    return asteroids;
  });
};

export const asteroidService = {
  getAsteroid
};
