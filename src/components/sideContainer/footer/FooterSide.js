import React, { useContext } from "react";
import InfoClimaContext from "../../../context/InfoClimaContext";
import { getDayOfWeek, getMonthNumberToString } from "../../../helpers/date";

export default function FooterSide() {
  const { temperature } = useContext(InfoClimaContext);
  const { city } = temperature;
  const day = new Date(temperature?.forecast[0].date);
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
        <p>{getDayOfWeek(day)}. {day.getUTCDate()}.{getMonthNumberToString(day)}</p>
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
