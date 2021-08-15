import React from "react";
import Form from "./Form";
import Button from "./Button";
import Select from "./Select";

export default function Modal({ getName, closeModal }) {
  const getNameLocation = (e) => {
    e.preventDefault();
    const modal = document.querySelector(".modal");
    modal.classList.remove("active");
    getName(e.target.parentElement[0].value);
  };
  return (
    <div className="modal">
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
