import React, { useContext } from "react";
import InfoClimaContext from "../../../context/InfoClimaContext";
import TemperatureContext from "../../../context/TemperatureContext";
import BoxInfoClima from "./BoxInfoClima";

export default function BoxClima() {
  const { temperature } = useContext(InfoClimaContext);
  const { typeTemper } = useContext(TemperatureContext);
  const { forecast } = temperature;
  return (
    <div className="boxClima">{
      !!forecast > 0 &&
      forecast.map(wheater => {
        return (
          <BoxInfoClima
            data={wheater.date}
            icon={wheater.icon}
            maxTemperature={typeTemper.isGraus ? `${wheater.maxTemperatureC}°C`  : `${wheater.maxTemperatureF}°F`}
            minTemperature={typeTemper.isGraus ? `${wheater.minTemperatureC}°C` :  `${wheater.minTemperatureF}°F`}
            key={wheater.date}
          ></BoxInfoClima>
        );
      })
    }</div>
  )
}
