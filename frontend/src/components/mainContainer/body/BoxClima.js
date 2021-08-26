import React, { useContext } from "react";
import InfoClimaContext from "../../../context/InfoClimaContext";
import BoxInfoClima from "./BoxInfoClima";

export default function BoxClima() {
  const { temperature } = useContext(InfoClimaContext);
  const { clima } = temperature;

  const max = clima[0].max_temp;
  const min = clima[0].min_temp;

  const box = clima
    ? clima.map((itens) => {
        return (
          <BoxInfoClima
            date={new Date(itens.applicable_date).toDateString()}
            imageBox={itens.weather_state_name}
            maxTemperature={parseInt(max)}
            minTemperature={parseInt(min)}
            key={itens.id}
          ></BoxInfoClima>
        );
      })
    : "";
  return <div className="boxClima">{box}</div>;
}
