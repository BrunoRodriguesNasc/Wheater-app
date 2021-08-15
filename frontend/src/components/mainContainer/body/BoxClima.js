import React, { useContext } from "react";
import InfoClimaContext from "../../../context/InfoClimaContext";
import BoxInfoClima from "./BoxInfoClima";

export default function BoxClima({ infoClima }) {
  const { temperature } = useContext(InfoClimaContext);
  const max = temperature.temperature.max;
  const min = temperature.temperature.min;

  const box =
    infoClima != ""
      ? infoClima.consolidated_weather.map((itens, index) => {
          return (
            <BoxInfoClima
              date={new Date(itens.applicable_date).toDateString()}
              imageBox={itens.weather_state_name}
              maxTemperature={parseInt(max != "" ? max[index] : itens.max_temp)}
              minTemperature={parseInt(min != "" ? min[index] : itens.min_temp)}
              key={itens.id}
            ></BoxInfoClima>
          );
        })
      : "";
  return <div className="boxClima">{box}</div>;
}
