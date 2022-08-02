import axios from "axios";

async function getWheater(city, days) {
  const res = await axios.get(`http://localhost:3333/wheater/${city}/${days}`);
  return res;
}


export { getWheater };
