import React from "react";
import ContainerImage from "./ContainerImage";
import Temperature from "./Temperature";

export default function BodySide({ info }) {
  return (
    <div className="bodySide">
      <ContainerImage info={info}></ContainerImage>
      <Temperature info={info}></Temperature>
    </div>
  );
}
