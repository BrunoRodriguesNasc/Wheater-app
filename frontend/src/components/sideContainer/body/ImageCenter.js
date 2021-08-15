import React from "react";

export default function ImageCenter({ infoImage }) {
  return (
    <img
      className="ImageCenter"
      src={`./${
        infoImage != "" ? infoImage[0].weather_state_name : "Clear"
      }.png`}
    ></img>
  );
}
