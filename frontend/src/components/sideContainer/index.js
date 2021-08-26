import React, { useRef } from "react";
import HeaderSide from "./header/HeaderSide";
import BodySide from "./body/BodySide";
import FooterSide from "./footer/FooterSide";
import "./sideContainer.css";
import Modal from "./menuModal/Modal";

export default function SideContainer({ getName }) {
  const fowardModal = useRef();

  const activeModal = () => {
    fowardModal.current?.classList.add("active");
  };

  const closeModal = (e) => {
    fowardModal.current?.classList.remove("active");
  };

  return (
    <div className="sideContainer">
      <Modal
        ref={fowardModal}
        getName={getName}
        closeModal={closeModal}
      ></Modal>
      <HeaderSide activeModal={activeModal}></HeaderSide>
      <BodySide></BodySide>
      <FooterSide></FooterSide>
    </div>
  );
}
