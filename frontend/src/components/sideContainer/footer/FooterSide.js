import React from "react";

export default function FooterSide({ info }) {
  const day =
    info != ""
      ? new Date(info.consolidated_weather[0].created).toDateString()
      : "Fri, 5 Jun";
  const nameCity = info != "" ? info.title : "Helsinki";

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
