import axios from "axios";
import AsyncStorage  from "@react-native-community/async-storage";

import Constants from './Constants';
const { asteroid_api, random_api } = Constants.URLS;

import Toast from "./Toast";

function handleResponse(response) {
  const { status, data } = response;
  if (status === 200) Toast.success("Successfully got the asteroid data");
  return data;
};

async function handleError(error) {
  return Promise.reject(error.message);
}

const asteroidInstance = axios.create({
  baseURL: asteroid_api.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const randomInstance = axios.create({
  baseURL: random_api.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


const HttpHelperUtil = {
  getWithParam: function (id) {
    return asteroidInstance
      .get(`/${id}?api_key=${asteroid_api.API_KEY}`)
      .then(handleResponse)
      .catch(handleError);
  },
  get: function () {
    return randomInstance
      .get(`/`)
      .then(handleResponse)
      .catch(handleError);
  }
};

module.exports = HttpHelperUtil;
