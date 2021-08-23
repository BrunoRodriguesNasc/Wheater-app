import React, { useRef } from "react";
import HeaderSide from "./header/HeaderSide";
import BodySide from "./body/BodySide";
import FooterSide from "./footer/FooterSide";
import "./sideContainer.css";
import Modal from "./menuModal/Modal";

export default function SideContainer({ getName, info }) {
  const divModal = useRef(HTMLDivElement);

  const activeModal = () => {
    console.log(divModal.current?.classList)
    const modal = document.querySelector(".modal");
    modal.classList.add("active");
  };

  const closeModal = (e) => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("active");
  };

  return (
    <div className="sideContainer">
      <Modal ref={divModal} getName={getName} closeModal={closeModal}></Modal>
      <HeaderSide activeModal={activeModal}></HeaderSide>
      <BodySide info={info}></BodySide>
      <FooterSide info={info}></FooterSide>
    </div>
  );
}
