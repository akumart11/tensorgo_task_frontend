import React from "react";
import ReactDom from "react-dom";
import "./style.css"

const BackDrop = (props) => {
  return <div className="backdrop"></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<BackDrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children} </ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
