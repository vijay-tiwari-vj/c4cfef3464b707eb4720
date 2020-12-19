import axios from "axios";
import AsyncStorage  from "@react-native-community/async-storage";

import Constants from './Constants';
const { country_api, weather_api } = Constants.URLS;

import Toast from "./Toast";

function handleResponse(response) {
  const { status, data } = response;
  if (status === 200) Toast.success("Sucessfull got the country data");
  return data;
};

async function handleError(error) {
  return Promise.reject(error.message);
}

const countryInstance = axios.create({
  baseURL: country_api.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const weatherInstance = axios.create({
  baseURL: weather_api.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


const HttpHelperUtil = {
  get: function (url) {
    return countryInstance
      .get(`/name/${url}`)
      .then(handleResponse)
      .catch(handleError);
  },
  getWithParam: function (query) {
    return weatherInstance
      .get(`/current?access_key=${weather_api.API_KEY}&query=${query}`)
      .then(handleResponse)
      .catch(handleError);
  }
};

module.exports = HttpHelperUtil;
