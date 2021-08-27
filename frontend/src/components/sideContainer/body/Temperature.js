import React, { useContext } from "react";
import Title from "./Title";
import InfoClimaContext from "../../../context/InfoClimaContext";
import TemperatureContext from "../../../context/TemperatureContext";

export default function Temperature() {
  const { temperature } = useContext(InfoClimaContext);
  const { typeTemper } = useContext(TemperatureContext);
  const { state_wheater, clima } = temperature;

  const title = state_wheater ? state_wheater : "Clear";
  const tempe = clima[0].the_temp ? clima[0].the_temp : "25°C";
  const convertTemp = !typeTemper.isGraus
    ? parseInt(tempe * 1.8 + 32)
    : parseInt(tempe);
  return (
    <div className="InfoTemperature">
      <Title typeText={"temperatureText"}>{`${convertTemp}${
        typeTemper.isGraus ? "°C" : "°F"
      }`}</Title>
      <Title typeText={"city"}>{title}</Title>
    </div>
  );
}
