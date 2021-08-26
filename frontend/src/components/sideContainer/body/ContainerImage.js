import React, { useContext } from "react";
import ImageCenter from "./ImageCenter";
import InfoClimaContext from "../../../context/InfoClimaContext";

export default function ContainerImage() {
  const { temperature } = useContext(InfoClimaContext);
  const { clima } = temperature;

  const itens = clima;

  console.log(temperature);
  return (
    <div className="ImagesClima">
      <div className="clouds"></div>
      <ImageCenter infoImage={itens}></ImageCenter>
    </div>
  );
}
