import React, { useContext } from "react";
import Info from "./Info";
import InfoClimaContext from "../../../context/InfoClimaContext";

export default function HighLights() {
  const { temperature } = useContext(InfoClimaContext);

  const { windMph, humidity, visibilityMiles, pressure } = temperature;

  return (
    <div className="todayHighLight">
      <div className="titleHighLight">Today’s Hightlights</div>
      <div className="containerHighLight">
        <Info title="Wind status" statistic={`${windMph} mph`}></Info>
        <Info title="Humidity" statistic={`${humidity}%`}></Info>
        <Info title="Visibility" statistic={`${visibilityMiles} Miles`}></Info>
        <Info title="Air Pressure" statistic={`${pressure} mb`}></Info>
      </div>
    </div>
  );
}
