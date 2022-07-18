import React from "react";
import "./DayMoodModal.css";
import MoodButtons from "./MoodButtons/MoodButtons";
import x from "../../assets/img/x.png"

const DaymoodModal = ({onClickClose, onMoodClick }) => {


  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__container__content">
          <div className="model__container__content__close" onClick={onClickClose}>
            <img src={x} alt="" />
          </div>
          <div className="modal__container__content__title">Mood</div>
          <MoodButtons onMoodClick={onMoodClick}></MoodButtons>
        </div>
      </div>
    </div>
  );
};

export default DaymoodModal;
