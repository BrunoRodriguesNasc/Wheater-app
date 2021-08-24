import React, { useRef } from "react";
import Form from "./Form";
import Button from "./Button";
import Select from "./Select";

export default function Modal({ getName, closeModal }) {
  const divModal = useRef();

  const getNameLocation = (e, value) => {
    e.preventDefault();
    getName(value);
    divModal.current?.classList.remove("active");
  };
  return (
    <div className="modal" ref={divModal}>
      <div className="div-close">
        <Button nameClass="button-close" toDoFunction={closeModal}>
          X
        </Button>
      </div>
      <Form eventFunction={getNameLocation}></Form>
      <Select></Select>
    </div>
  );
}
