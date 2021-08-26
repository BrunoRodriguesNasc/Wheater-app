import React, { forwardRef } from "react";
import Button from "./Button";
import InputModal from "./InputModal";

const Form = forwardRef(({ eventFunction }, ref) => {
  return (
    <div>
      <form className="form-div">
        <InputModal></InputModal>
        <Button ref={ref} nameClass="search" toDoFunction={eventFunction}>
          Search
        </Button>
      </form>
    </div>
  );
});

export default Form;
