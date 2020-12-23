import Constants from "../utils/Constants";
import HttpHelper from "../utils/HttpHelperUtil";

function getRandom() {
  return  HttpHelper.get().then((data) => {
    console.log(data);
    const random = data.map(({ name, nasa_jpl_url, is_potentially_hazardous_asteroid }) => ({ name, nasa_jpl_url, is_potentially_hazardous_asteroid }));
    return random;
  });
};

export const randomService = {
  getRandom
};
