import React, { useContext } from "react";

import InfoClimaContext from "../../../context/InfoClimaContext";

export default function FooterSide() {
  const { temperature } = useContext(InfoClimaContext);
  const { created, city } = temperature;
  const day = created ? new Date(created).toDateString() : "Fri, 5 Jun";
  const nameCity = city ? city : "Helsinki";

  return (
    <div className="footer">
      <div
        className="footer-top"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "200px",
        }}
      >
        <p>Today</p>
        <p>{day}</p>
      </div>
      <div
        className="footer-bot"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "200px",
        }}
      >
        <p className="location"></p>
        <p>{nameCity}</p>
      </div>
    </div>
  );
}
