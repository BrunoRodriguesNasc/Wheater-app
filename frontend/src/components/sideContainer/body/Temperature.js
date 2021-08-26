import React, { useContext } from "react";
import Title from "./Title";
import InfoClimaContext from "../../../context/InfoClimaContext";

export default function Temperature() {
  const { temperature } = useContext(InfoClimaContext);
  const { state_wheater, temp } = temperature;
  const title = state_wheater ? state_wheater : "Clear";
  const tempe = temp ? temp : "25°C";

  return (
    <div className="InfoTemperature">
      <Title typeText={"temperatureText"}>{`${parseInt(tempe)}${
        temperature.isGraus ? "°C" : "°F"
      }`}</Title>
      <Title typeText={"city"}>{title}</Title>
    </div>
  );
}
