import React, { useContext } from "react";
import InfoClimaContext from "../../../context/InfoClimaContext";
import TemperatureContext from "../../../context/TemperatureContext";
import BoxInfoClima from "./BoxInfoClima";

export default function BoxClima() {
  const { temperature } = useContext(InfoClimaContext);
  const { typeTemper } = useContext(TemperatureContext);
  const { clima } = temperature;

  const box = clima
    ? clima.map((itens, index) => {
        return (
          <BoxInfoClima
            date={new Date(itens.applicable_date).toDateString()}
            imageBox={itens.weather_state_name}
            maxTemperature={parseInt(
              typeTemper.max.length > 0
                ? typeTemper.max[index]
                : clima[index].max_temp
            )}
            minTemperature={parseInt(
              typeTemper.min.length > 0
                ? typeTemper.min[index]
                : clima[index].min_temp
            )}
            key={itens.id}
          ></BoxInfoClima>
        );
      })
    : "";
  return <div className="boxClima">{box}</div>;
}
