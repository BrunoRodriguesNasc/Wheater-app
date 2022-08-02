import React from "react";
import ButtonSearchPlace from "./ButtonSearchPlace";
import ElipseLocation from "./ElipseLocation";
export default function HeaderSide({ activeModal }) {
  return (
    <div className="headerSide">
      <ButtonSearchPlace activeModal={activeModal}>
        Seach for places
      </ButtonSearchPlace>
      <ElipseLocation></ElipseLocation>
    </div>
  );
}
