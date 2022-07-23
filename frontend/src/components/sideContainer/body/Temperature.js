import React, { useContext } from "react";
import Title from "./Title";
import InfoClimaContext from "../../../context/InfoClimaContext";
import TemperatureContext from "../../../context/TemperatureContext";

export default function Temperature() {
  const { temperature } = useContext(InfoClimaContext);
  const { typeTemper } = useContext(TemperatureContext);
  const { condition } = temperature;
  const valueTemperature = typeTemper.isGraus ? `${temperature.temperatureC}°C` : `${temperature.temperatureF}°F`;
  return (
    <div className="InfoTemperature">
      <Title typeText={"temperatureText"}>{valueTemperature}</Title>
      <Title typeText={"city"}>{condition}</Title>
    </div>
  );
}
