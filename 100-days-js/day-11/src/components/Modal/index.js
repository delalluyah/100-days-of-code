import React from "react";
import "./index.css";
import close_icon from "./close-btn.svg";

const Modal = ({
  target_id,
  children,
  header = "Sample modal",
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
        onClick={() => {
          let modalOverlay = document.createElement("div");
          modalOverlay.classList.add("modal-overlay");
          let modal = document.querySelector(`#${modal_id}`).cloneNode(true);
          modalOverlay.appendChild(modal);
          document.body.prepend(modalOverlay);
          modal
            .querySelector(".modal-close-btn")
            .addEventListener("click", (e) => {
              let targetModalOverlay = e.currentTarget.closest(
                ".modal-overlay"
              );
              modal.classList.remove("show");
              modal.classList.add("modal-hide");
              setTimeout(() => {
                targetModalOverlay.parentNode.removeChild(targetModalOverlay);
              }, 400);
            });
          modal.style.display = "block";
          modal.classList.add("show");
        }}
      >
        Open Modal
      </a>
      <div className="modal" id={modal_id} style={{ display: "none" }}>
        <header className="modal-header">
          <p className="title">{header}</p>
          <a href="#!" className="modal-close-btn">
            {" "}
            <img alt="close" src={close_icon} />{" "}
          </a>
        </header>
        <section className="modal-body">{children}</section>
        <footer className="modal-footer">{footer}</footer>
      </div>
    </>
  );
};

export default Modal;
