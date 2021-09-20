import React from "react";
import "./Modal.css";

export const Modal = ({ isOpen, closeModal, title, date, url, children }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <button onClick={closeModal}>
          <img
            src="/assets/logout_90894.svg"
            alt="logout"
            className="svg_logout"
          />
        </button>

        <div className="container-img">
          <img className="modal-img" src={url} alt={title} loading="lazy" />
        </div>

        <div className="modal-data">
          <span className="modal-data-text"> {title}</span>
          <span className="modal-data-text"> {date} </span>
        </div>

        {children}
      </div>
    </div>
  );
};
