import React, { useContext } from "react";
import InfoClimaContext from "../../../context/InfoClimaContext";
export default function BoxInfoClima({
  date,
  imageBox,
  maxTemperature,
  minTemperature,
}) {
  const { temperature } = useContext(InfoClimaContext);
  return (
    <div className="BoxInfoClima">
      <div className="title">{date}</div>
      <img
        className="imgBox"
        alt="imagem com algum tipo de clima"
        src={`./${imageBox}.png`}
      ></img>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <p style={{ color: "#E7E7EB" }}>{`${maxTemperature}${
          temperature.isGraus ? "°C" : "°F"
        }`}</p>
        <p style={{ color: "#A09FB1" }}>{`${minTemperature}${
          temperature.isGraus ? "°C" : "°F"
        }`}</p>
      </div>
    </div>
  );
}
