import React from "react";

export default function Info({ title, statistic }) {
  return (
    <div className="Info">
      <h1>{title}</h1>
      <div className="statistic">{statistic}</div>
    </div>
  );
}
