import React from "react";
import "./Modal.css";

export const Modal = ({ isOpen, closeModal, title, date, url, children }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        {/* <h1>{title}</h1> */}
        <button onClick={closeModal}>X</button>

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
