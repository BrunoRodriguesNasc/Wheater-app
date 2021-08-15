import React from "react";
import ImageCenter from "./ImageCenter";

export default function ContainerImage({ info }) {
  const itens =
    info != "" ? info.consolidated_weather.map((itens) => itens) : [];
  return (
    <div className="ImagesClima">
      <div className="clouds"></div>
      <ImageCenter infoImage={itens}></ImageCenter>
    </div>
  );
}
