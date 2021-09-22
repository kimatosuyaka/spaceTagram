import React from "react";
import "./Modal.css";

export const Modal = ({
  isOpen,
  closeModal,
  title,
  date,
  url,
  like,
  modalLike,
}) => {
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
          <svg
            className="modalLike"
            onClick={() => modalLike()}
            data-name="Layer 1"
            id="Layer_1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="Heart Icon" id="Heart_Icon">
              <circle className="mcls-1" cx="256" cy="256" r="256" />
              <path
                className={like ? "mlike_cls-2" : "mcls-2"}
                d="M256,402.67C149.12,343.33,88.35,262.12,103.8,201.05c5.41-21.35,23.91-55.18,58-63.72,32.12-8.07,69.37,8.61,94.25,42.35,24.88-33.74,62.13-50.42,94.25-42.35,34,8.54,52.32,42.43,57.95,63.72C424.1,261.33,363.61,343.56,256,402.67Z"
                id="Heart"
              />
            </g>
          </svg>
        </div>

        <div className="modal-data">
          <span className="modal-data-text"> {title}</span>
          <span className="modal-data-text hidden"> - </span>
          <span className="modal-data-text"> {date} </span>
        </div>
      </div>
    </div>
  );
};
