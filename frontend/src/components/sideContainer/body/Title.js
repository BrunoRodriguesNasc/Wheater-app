import React from "react";

export default function Title({ typeText, children }) {
  return <h1 className={typeText}>{children}</h1>;
}
