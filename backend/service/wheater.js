const axios = require("axios");
const { URL_GET_WHEATER_CITY } = require("../constants/const");

const getCity = async (city, days) => {
  const url = `${URL_GET_WHEATER_CITY}${city}&days=${days}&aqi=no&alerts=no`;
    const response = await axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      if (error) {
        console.log(error);
      }
    });
    console.log(response);
    return response;
}

module.exports = getCity;