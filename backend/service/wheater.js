const axios = require("axios");
const { URL_GET_WHEATER_CITY } = require("../constants/const");

const getCity = async (city, days) => {
  const url = `${URL_GET_WHEATER_CITY}${city}&days=${days}&aqi=no&alerts=no`;
    const { data } = await axios.get(url);
    return data;
}

module.exports = getCity;