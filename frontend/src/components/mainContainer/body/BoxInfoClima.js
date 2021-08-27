import React, { useContext } from "react";

import TemperatureContext from "../../../context/TemperatureContext";
export default function BoxInfoClima({
  date,
  imageBox,
  maxTemperature,
  minTemperature,
}) {
  const { typeTemper } = useContext(TemperatureContext);
  const imageJoin = imageBox.split(" ").join("");

  return (
    <div className="BoxInfoClima">
      <div className="title">{date}</div>
      <img
        className="imgBox"
        alt="imagem com algum tipo de clima"
        src={`./${imageJoin}.png`}
      ></img>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <p style={{ color: "#E7E7EB" }}>{`${maxTemperature}${
          typeTemper.isGraus ? "°C" : "°F"
        }`}</p>
        <p style={{ color: "#A09FB1" }}>{`${minTemperature}${
          typeTemper.isGraus ? "°C" : "°F"
        }`}</p>
      </div>
    </div>
  );
}
