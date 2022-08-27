import React from "react";
import { ModalContainer, BackdropContainer } from "./styles";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <BackdropContainer onClick={props.onClick}></BackdropContainer>;
};

const ModalOverlay = (props) => {
  return <ModalContainer>{props.children}</ModalContainer>;
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
