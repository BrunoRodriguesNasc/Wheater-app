import React, { forwardRef } from "react";

const Button = forwardRef(
  ({ toDoFunction, nameClass, children, type }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        className={nameClass}
        onClick={(e) => toDoFunction(e)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
