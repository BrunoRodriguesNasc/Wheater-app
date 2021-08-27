import React from "react";

export default function ImageCenter({ infoImage }) {
  const { weather_state_name } = infoImage[1];
  const imageJoin = weather_state_name.split(" ").join("");

  return (
    <img
      className="ImageCenter"
      alt="imagem com algum tipo de clima"
      src={`./${imageJoin ? imageJoin : "clear"}.png`}
    ></img>
  );
}
