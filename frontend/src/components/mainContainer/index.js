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
        return temp.max_temp * 1.8 + 32;
      });

      const min = clima.map((temp) => {
        return temp.max_temp * 1.8 + 32;
      });

      setTypeTemper({ isGraus: false, max: max, min: min });
    }
    return;
  };

  const setCelsius = () => {
    if (!isGraus) {
      const max = clima.map((temp) => {
        return temp.max_temp;
      });

      const min = clima.map((temp) => {
        return temp.min_temp;
      });

      setTypeTemper({ isGraus: true, max: max, min: min });
    }
    return;
  };
  return (
    <div className="container">
      <div className="buttons-temperature">
        <div className="celsius" onClick={() => setCelsius()}>
          C
        </div>
        <div className="fahrenheit" onClick={() => setFahrenheit()}>
          F
        </div>
      </div>
      <BoxClima></BoxClima>
      <HighLights></HighLights>
      <Footer></Footer>
    </div>
  );
}
