import React, { useContext } from "react";
import Title from "./Title";
import InfoClimaContext from "../../../context/InfoClimaContext";
export default function Temperature({ info }) {
  const { temperature } = useContext(InfoClimaContext);
  const now = temperature.temperature.max;
  const title =
    info != "" ? info.consolidated_weather[0].weather_state_name : "Clear";
  const temp = info != "" ? info.consolidated_weather[0].the_temp : "25°C";
  return (
    <div className="InfoTemperature">
      <Title typeText={"temperatureText"}>{`${
        now != "" ? parseInt(now[0]) : parseInt(temp)
      }${temperature.isGraus ? "°C" : "°F"}`}</Title>
      <Title typeText={"city"}>{title}</Title>
    </div>
  );
}
