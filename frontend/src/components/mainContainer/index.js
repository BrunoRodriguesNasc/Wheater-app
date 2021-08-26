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
  const { clima } = temperature;

  const setFahrenheit = () => {
    if (isGraus) {
      const max = clima.map((temp) => {
        return (temp.max_temp * 9) / 5 + 32;
      });

      const min = clima.map((temp) => {
        return (temp.min_temp * 9) / 5 + 32;
      });

      setTypeTemper({ isGraus: false, max: max, min: min });
      console.log(typeTemper);
    }
    return;
  };

  const setCelsius = () => {
    if (!isGraus) {
      const max = clima.map((temp) => {
        return ((temp.max_temp - 32) * 5) / 9;
      });

      const min = clima.map((temp) => {
        return ((temp.min_temp - 32) * 5) / 9;
      });

      setTypeTemper({ isGraus: true, max: max, min: min });
      console.log(typeTemper);
    }
    return;
  };
  return (
    <div className="container">
      <div className="buttons-temperature">
        <div className="celsius" onClick={() => setCelsius()}>
          C
        </div>
        <div className="fahrenheit" onClick={(e) => setFahrenheit(e)}>
          F
        </div>
      </div>
      <BoxClima></BoxClima>
      <HighLights></HighLights>
      <Footer></Footer>
    </div>
  );
}
