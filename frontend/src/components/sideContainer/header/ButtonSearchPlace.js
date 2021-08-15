import React from "react";

export default function ButtonSearchPlace({ activeModal, children }) {
  return (
    <button className="ButtonSearchPlace" onClick={(e) => activeModal(e)}>
      {children}
    </button>
  );
}
