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
          {/* <img
            src="./assets/logout_90894.svg"
            alt="logout"
            className="svg_logout"
          /> */}
          <svg
            className="svg_logout"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-2-Copy"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="74" stroke="#979797" fill-rule="nonzero">
                <path
                  d="M24.2565689,11.1135605 C23.8660446,10.7230362 23.8660446,10.0898712 24.2565689,9.69934692 C24.6470932,9.30882263 25.2802582,9.30882263 25.6707825,9.69934692 L31.3276367,15.3562012 C31.718161,15.7467255 31.718161,16.3798904 31.3276367,16.7704147 L25.6707825,22.427269 C25.2802582,22.8177933 24.6470932,22.8177933 24.2565689,22.427269 C23.8660446,22.0367447 23.8660446,21.4035797 24.2565689,21.0130554 L28.2773842,16.9922401 L6.03804313,16.9922401 C5.48602219,16.9922401 5.0347435,16.5445249 5.0347435,15.9922401 C5.0347435,15.436105 5.48393605,14.9922401 6.03804313,14.9922401 L28.1352486,14.9922401 L24.2565689,11.1135605 Z"
                  id="Rectangle-359"
                  stroke="none"
                  fill="#2A2630"
                ></path>
                <path
                  d="M18,31 L19,30 L1,30 L2,31 L2,24.0644531 L2,8.02148437 L2,1 L1,2 L19,2 L18,1 L18,10 C18,10.5522847 18.4477153,11 19,11 C19.5522847,11 20,10.5522847 20,10 L20,1 C20,0.44771525 19.5522847,3.66373598e-15 19,3.55271368e-15 L1,0 C0.44771525,0 3.55271368e-15,0.44771525 3.55271368e-15,1 L3.55271368e-15,8.02148437 L0,24.0644531 L0,31 C0,31.5522847 0.44771525,32 1,32 L19,32 C19.5522847,32 20,31.5522847 20,31 L20,22 C20,21.4477153 19.5522847,21 19,21 C18.4477153,21 18,21.4477153 18,22 L18,31 Z"
                  id="Rectangle-508"
                  stroke="none"
                  fill="#95909E"
                ></path>
              </g>
            </g>
          </svg>
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
