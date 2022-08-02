import React from "react";

export default function ImageCenter({ image }) {
  return (
    <img
      className="ImageCenter"
      alt="imagem com algum tipo de clima"
      src={image}
    />
  );
}
