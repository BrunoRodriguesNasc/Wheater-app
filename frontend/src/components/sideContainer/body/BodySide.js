import React from "react";
import ContainerImage from "./ContainerImage";
import Temperature from "./Temperature";

export default function BodySide() {
  return (
    <div className="bodySide">
      <ContainerImage></ContainerImage>
      <Temperature></Temperature>
    </div>
  );
}
