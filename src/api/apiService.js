import axios from "axios";

async function getWheater(city, days) {
  const res = await axios.get(`https://wheater-app-bruno.herokuapp.com/wheater/${city}/${days}`);
  return res;
}


export { getWheater };
