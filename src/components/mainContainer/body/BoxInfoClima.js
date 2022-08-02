import React from "react";

export default function BoxInfoClima({data, icon, maxTemperature, minTemperature  }) {
  return (
    <div className="BoxInfoClima">
      <div className="title">{data}</div>
      <img
        className="imgBox"
        alt="imagem com algum tipo de clima"
        src={icon}
      ></img>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <p style={{ color: "#E7E7EB" }}>{maxTemperature}</p>
        <p style={{ color: "#A09FB1" }}>{minTemperature}</p>
      </div>
    </div>
  );
}
