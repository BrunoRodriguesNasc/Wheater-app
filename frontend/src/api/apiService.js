import axios from "axios";
import { URL_GET_WOEIRD, URL_GET_ALL_DATA } from "./constants/const";

async function getWorldId(nameLocation) {
  const res = await axios.get(`${URL_GET_WOEIRD}${nameLocation}`);

  if (res.data.length === 0) return ["error"];
  return getInfoLocations(res.data[0].woeid);
}

async function getInfoLocations(worldId) {
  const res = await axios.get(`${URL_GET_ALL_DATA}${worldId}/`);

  return prepareData(res.data);
}

function prepareData(data) {
  const { consolidated_weather, title } = data;

  const preparedData = {
    clima: consolidated_weather,
    city: title,
    temp: parseInt(consolidated_weather[0].the_temp),
    windStatus: parseInt(consolidated_weather[0].wind_speed),
    visibility: parseInt(consolidated_weather[0].visibility),
    humidity: consolidated_weather[0].humidity,
    maxTemp: parseInt(consolidated_weather[0].max_temp),
    minTemp: parseInt(consolidated_weather[0].min_temp),
    airPressure: parseInt(consolidated_weather[0].air_pressure),
    created: consolidated_weather[0].created,
    state_wheater: consolidated_weather[0].weather_state_name,
    isGraus: false,
  };

  return preparedData;
}

export { getWorldId };
