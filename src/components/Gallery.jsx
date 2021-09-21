import React, { useEffect, useState } from "react";
import useModal from "../hook/useModal";
import { Modal } from "./Modal";
import "../app.css";
// import confetti from "https://cdn.skypack.dev/canvas-confetti";

const initLike = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const Gallery = ({ datos }) => {
  const [like, setlike] = useState(initLike);
  const { url, title, date } = datos;
  const [isOpenModal, openModal, closeModal] = useModal(false);

  console.log(`este like de ${title} es ${like}`);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(like));
    // confetti();
  }, [like]);

  return (
    <>
      <li>
        <img
          className="li-img"
          src={url}
          alt={title}
          loading="lazy"
          onClick={openModal}
        />

        <div className="li-data">
          <span className="li-title"> {title}</span>
          <span className="li-date"> {date} </span>
        </div>

        <svg
          className="notLike"
          onClick={() => setlike(!like)}
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-name="Heart Icon" id="Heart_Icon">
            <circle className="cls-1" cx="256" cy="256" r="256" />
            <path
              className={like ? "like_cls-2" : "cls-2"}
              d="M256,402.67C149.12,343.33,88.35,262.12,103.8,201.05c5.41-21.35,23.91-55.18,58-63.72,32.12-8.07,69.37,8.61,94.25,42.35,24.88-33.74,62.13-50.42,94.25-42.35,34,8.54,52.32,42.43,57.95,63.72C424.1,261.33,363.61,343.56,256,402.67Z"
              id="Heart"
            />
          </g>
        </svg>
      </li>

      <Modal
        isOpen={isOpenModal}
        closeModal={closeModal}
        title={title}
        date={date}
        url={url}
      ></Modal>
    </>
  );
};
