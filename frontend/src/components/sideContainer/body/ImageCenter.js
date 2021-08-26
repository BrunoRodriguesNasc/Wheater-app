import React from "react";

export default function ImageCenter({ infoImage }) {
  // const { weather_state_name } = infoImage;

  return (
    <img
      className="ImageCenter"
      alt="imagem com algum tipo de clima"
      src={`./${"weather_state_name" ? "weather_state_name" : "Clear"}.png`}
    ></img>
  );
}
