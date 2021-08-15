import axios from "axios";
import { URL_GET_WOEIRD, URL_GET_ALL_DATA } from "./constants/const";

async function getWorldId(nameLocation) {
  const res = await axios.get(`${URL_GET_WOEIRD}${nameLocation}`);

  return getInfoLocations(res.data[0].woeid);
}

async function getInfoLocations(worldId) {
  const res = await axios.get(`${URL_GET_ALL_DATA}${worldId}/`);
  return res.data;
}

export { getWorldId };
