import React, { useContext } from "react";
import ImageCenter from "./ImageCenter";
import InfoClimaContext from "../../../context/InfoClimaContext";

export default function ContainerImage() {
  const { temperature } = useContext(InfoClimaContext);
  return (
    <div className="ImagesClima">
      <div className="clouds"></div>
      <ImageCenter image={temperature.icon}></ImageCenter>
    </div>
  );
}
