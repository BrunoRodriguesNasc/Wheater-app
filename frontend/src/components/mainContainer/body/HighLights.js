import React, { useContext } from "react";
import Info from "./Info";
import InfoClimaContext from "../../../context/InfoClimaContext";

export default function HighLights() {
  const { temperature } = useContext(InfoClimaContext);

  const { windStatus, humidity, visibility, airPressure } = temperature;

  const windStatusShow = windStatus ? windStatus : "0";

  const humidityShow = humidity ? humidity : "0";

  const visibilityShow = visibility ? visibility : "0";

  const airPressureShow = airPressure ? airPressure : "0";

  return (
    <div className="todayHighLight">
      <div className="titleHighLight">Today’s Hightlights</div>
      <div className="containerHighLight">
        <Info title="Wind status" statistic={`${windStatusShow} mph`}></Info>
        <Info title="Humidity" statistic={`${humidityShow}%`}></Info>
        <Info title="Visibility" statistic={`${visibilityShow} Miles`}></Info>
        <Info title="Air Pressure" statistic={`${airPressureShow} mb`}></Info>
      </div>
    </div>
  );
}
