import React from "react";

export default function Button({ toDoFunction, nameClass, children, type }) {
  return (
    <button
      type={type}
      className={nameClass}
      onClick={(e) =>
        nameClass === "button-close" ? toDoFunction() : toDoFunction(e)
      }
    >
      {children}
    </button>
  );
}
