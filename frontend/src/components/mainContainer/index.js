import React, { useContext } from "react";
import BoxClima from "./body/BoxClima";
import HighLights from "./body/HighLights";
import Footer from "./footer/Footer";
import InfoClimaContext from "../../context/InfoClimaContext";
import "./mainContainer.css";

export default function Container({ info }) {
  const { temperature, isGraus, setTemp } = useContext(InfoClimaContext);

  const setFahrenheit = ({ temperature, isGraus }) => {
    if (isGraus) {
      const max = temperature.max.map((temp) => {
        return (temp * 9) / 5 + 32;
      });

      const min = temperature.min.map((temp) => {
        return (temp * 9) / 5 + 32;
      });
      setTemp({ temperature: { max, min }, isGraus: false });
    }
    return;
  };

  const setCelsius = ({ temperature, isGraus }) => {
    if (!isGraus) {
      const max = temperature.max.map((temp) => {
        return ((temp - 32) * 5) / 9;
      });

      const min = temperature.min.map((temp) => {
        return ((temp - 32) * 5) / 9;
      });
      setTemp({ temperature: { max, min }, isGraus: true });
    }
    return;
  };

  return (
    <div className="container">
      <div className="buttons-temperature">
        <div className="celsius" onClick={() => setCelsius(temperature)}>
          C
        </div>
        <div className="fahrenheit" onClick={() => setFahrenheit(temperature)}>
          F
        </div>
      </div>
      <BoxClima infoClima={info}></BoxClima>
      <HighLights infoClima={info}></HighLights>
      <Footer></Footer>
    </div>
  );
}
