import React, { Children } from "react";
import "./index.css";

const Modal = ({
  target_id,
  header = "",
  footer = "",
  display_link = false,
}) => {
  const modal_id = target_id + "_modal";

  return (
    <>
      <a
        href="#!"
        id={target_id}
        style={{ display: display_link ? "block" : "none" }}
      >
        Open Modal
      </a>
      <div className="modal" id={modal_id}>
        <header className="modal-body">{header}</header>
        <section className="modal-body">{Children}</section>
        <footer className="modal-footer">{footer}</footer>
      </div>
    </>
  );
};

export default Modal;
