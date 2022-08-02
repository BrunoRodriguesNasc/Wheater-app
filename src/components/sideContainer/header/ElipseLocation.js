import React, { useState, useContext } from "react";
import { getWheater } from "../../../api/apiService";
import InfoClimaContext from "../../../context/InfoClimaContext";

export default function ElipseLocation() {
  const [location, setLocation] = useState();
  const { setTemp } = useContext(InfoClimaContext);
  const getGeoLocation = async () => {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(response => setLocation(response.coords));
    }
    return fetchLocation();
  }

  const fetchLocation = async () => {
   if(!!location){
     console.log(location);
    const latLong = `${location.latitude},${location.longitude}`;
    const { data } = await getWheater(latLong, 5);
    setTemp(data)
   }
    
  }

  return <div onClick={() => getGeoLocation()} className="elipse"></div>;
}
