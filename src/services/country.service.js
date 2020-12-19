import Constants from "../utils/Constants";
import HttpHelper from "../utils/HttpHelperUtil";

const { Routes } = Constants.URLS.country_api;

function getCountry(country) {
  return HttpHelper.get(country).
    then(data => {
    const countries = data.map(({ name, capital, latlng, population, flag }) => ({ name, capital, latlng, population, flag }));
    return countries;
  });
};

export const countryService = {
  getCountry
};
