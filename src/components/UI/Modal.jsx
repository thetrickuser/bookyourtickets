import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const portalElement = document.getElementById("overlays");

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={props.onClick} />,
    portalElement
  );
};

const ModalOverlay = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.modal}>{props.children}</div>,
    portalElement
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onClick={props.onBackdropClick}></Backdrop>
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
