import React, { useContext } from "react";
import BoxClima from "./body/BoxClima";
import HighLights from "./body/HighLights";
import Footer from "./footer/Footer";
import TemperatureContext from "../../context/TemperatureContext";
import InfoClimaContext from "../../context/InfoClimaContext";
import "./mainContainer.css";

export default function Container() {
  const { typeTemper, setTypeTemper } = useContext(TemperatureContext);
  const { isGraus } = typeTemper;
  const { temperature } = useContext(InfoClimaContext);

  const setFahrenheit = () => {
    if (isGraus) {
      setTypeTemper({ isGraus: false, max: temperature.forecast[0].maxTemperatureF, min: temperature.forecast[0].minTemperatureF })
    }
  };

  const setCelsius = () => {
    if (!isGraus) {
      setTypeTemper({ isGraus: true, max: temperature.forecast[0].maxTemperatureC, min: temperature.forecast[0].minTemperatureC })
    }
  };

  return (
    <div className="container">
      <div className="buttonsTemperature">
        <div className="celsius" onClick={() => setCelsius()}>
          °C
        </div>
        <div className="fahrenheit" onClick={() => setFahrenheit()}>
          °F
        </div>
      </div>
      <BoxClima></BoxClima>
      <HighLights></HighLights>
      <Footer></Footer>
    </div>
  );
}
