import axios from "axios";

async function getWorldId(nameLocation) {
  const res = await axios.get(`http://localhost:3333/search/${nameLocation}`);

  return await getInfoLocations(res.data[0].woeid);
}

async function getInfoLocations(woeid) {
  const res = await axios.get(`http://localhost:3333/location/${woeid}`);

  return await prepareData(res.data);
}

async function prepareData(data) {
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
