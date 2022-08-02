import React, { forwardRef, useRef } from "react";
import Form from "./Form";
import Button from "./Button";

const modal = forwardRef(({ getName, closeModal }, ref) => {
  const buttonRef = useRef();

  const getNameLocation = (e) => {
    e.preventDefault();
    closeModal(e);
    getName(buttonRef.current?.parentElement[0].value);
  };
  return (
    <div className="modal" ref={ref}>
      <div className="div-close">
        <Button toDoFunction={closeModal} nameClass="button-close">
          X
        </Button>
      </div>
      <Form ref={buttonRef} eventFunction={getNameLocation}></Form>
      {/* <Select></Select> */}
    </div>
  );
});

export default modal;
