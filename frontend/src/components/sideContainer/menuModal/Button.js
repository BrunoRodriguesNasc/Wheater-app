import React,{ useRef } from "react";

export default function Button({ toDoFunction, nameClass, children, type }) {
  const ButtonRef = useRef(HTMLButtonElement);
  return (
    <button
      type={type}
      ref={ButtonRef}
      className={nameClass}
      onClick={(e) =>
        nameClass === "button-close" ? toDoFunction() : toDoFunction(e,ButtonRef.current?.parentElement[0].value)
      }
    >
      {children}
    </button>
  );
}
