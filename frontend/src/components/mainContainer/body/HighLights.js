import React from "react";
import Info from "./Info";
export default function HighLights({ infoClima }) {
  const windStatus =
    infoClima != ""
      ? parseInt(infoClima.consolidated_weather[0].wind_speed)
      : "0";

  const humidity =
    infoClima != "" ? infoClima.consolidated_weather[0].humidity : "0";

  const visibility =
    infoClima != ""
      ? parseInt(infoClima.consolidated_weather[0].visibility)
      : "0";

  const airPressure =
    infoClima != ""
      ? parseInt(infoClima.consolidated_weather[0].air_pressure)
      : "0";

  return (
    <div className="todayHighLight">
      <div className="titleHighLight">Today’s Hightlights</div>
      <div className="containerHighLight">
        <Info title="Wind status" statistic={`${windStatus} mph`}></Info>
        <Info title="Humidity" statistic={`${humidity}%`}></Info>
        <Info title="Visibility" statistic={`${visibility} Miles`}></Info>
        <Info title="Air Pressure" statistic={`${airPressure} mb`}></Info>
      </div>
    </div>
  );
}
