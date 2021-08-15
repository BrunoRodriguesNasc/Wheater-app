import React from "react";
import Button from "./Button";
import InputModal from "./InputModal";

export default function Form({ eventFunction }) {
  return (
    <div>
      <form className="form-div">
        <InputModal></InputModal>
        <Button nameClass="search" toDoFunction={eventFunction}>
          Search
        </Button>
      </form>
    </div>
  );
}
